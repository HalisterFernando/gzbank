import React, { useState, ChangeEvent, useEffect, FormEvent, useContext } from 'react'

import MoneyTransfer from '../images/transfer.png'
import {userContext, UserContextType } from '../context/UserContext';
import { requestData, requestPost } from '../helpers/requests';
import { getItem } from '../helpers/localStorage';
import { setToken } from '../helpers/requests'

type Account = {
    accountId: string,
    username: string
}

function Transfer() {

    const { user, userAmount, saveUserAmount } = useContext(userContext) as UserContextType

    const [transfer, setTransfer] = useState({
        accountId: '',
        username: '',
        amount: '',
    })

    const [accounts, setAccounts] = useState<Account[]>([])

         
    const { username, amount, accountId } = transfer;

    const [isDisabled, setIsDisabled] = useState(true)
    const [hidden, setHidden] = useState(true)

    
    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTransfer({...transfer, [name]: value})
    };
    
    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const threeSeconds = 3000;
       
        await requestPost('/transaction', {
            debitedAccountId: user.accountId,
            creditedAccountId: accountId,
            value: amount
         })
        
        setHidden(false)
        
        setTimeout(() => {
            setHidden(true)
        }, threeSeconds)        
    };

    const validateAmount = () => {
        const regex = /^\d+$/gi
        const isAmountValid = regex.test(amount)
        const isAmountEnought = Number(userAmount.amount) > Number(amount)
        console.log(userAmount.amount)
        
        if (isAmountValid && username && isAmountEnought) {
            setIsDisabled(false)
         
        } else {
            setIsDisabled(true)
        }
    }
    
    useEffect(() => {
        validateAmount()
    }, [transfer])

    useEffect(() => {
   
        const getBalance = async () => {
          const token = getItem('token')
          setToken(token)
          const {balance: {balance}} = await requestData(`/account`)
          saveUserAmount(balance)
        }
        getBalance()
      }, [hidden])  

    useEffect(() => {

        const getAccounts = async () => {
            const token = getItem('token')
            setToken(token)
            const allAccounts = await requestData(`/account/transfer`);
            setAccounts(allAccounts)
            setTransfer({...transfer,accountId: allAccounts[0].accountId, username: allAccounts[0].username})
        }

        getAccounts()
    }, [])

  return (
    <div className='h-full flex justify-center items-center bg-black border-y-2 border-white'>
      <form 
        onSubmit={ handleSubmit }
        className="
          w-3/4
          h-full           
          flex 
          flex-col 
          items-center
          justify-evenly          
          "
        > 
                <img className='w-28' src={MoneyTransfer} alt="transferência" />
           
                <label 
                    htmlFor='username' 
                    className="card-title 
                    text-white 
                    font-semibold 
                    text-xl"
                >
                    Transferir para
                </label>
                <select 
                    name="username" 
                    id='username' 
                    value={username}
                    onChange={handleChange}
                    className="
                        select 
                        select-bordered 
                        rounded-md 
                        w-full 
                        max-w-xs"
                >
                   
                    {accounts.length && accounts.map(({accountId, username}) => (
                        <option key={accountId} id={accountId} value={username}>{username}</option>
                    ))}
                </select>

                <label 
                    htmlFor='ammount' 
                    className="
                    card-title 
                    text-white 
                    font-semibold 
                    text-xl"
                >
                    Quantia
                </label>
                <input 
                    name='amount' 
                    id='amount' 
                    value={amount}
                    onChange={handleChange}
                    className='rounded-md' 
                    type="number" 
                    placeholder='Escreva sem pontos ou vírgula' 
                />

                <span className={ hidden ? "hidden-transfer-alert" : "show-transfer-alert" }>
                    Transferência realizada com sucesso!
                </span>
                <button 
                    type="submit"  
                    disabled={ isDisabled }                     
                    className={ isDisabled ? "disable-green-btn" : "able-green-btn"}                      
                >
                    OK
                </button>
                             
            </form>        
    </div>
  )
}

export default Transfer