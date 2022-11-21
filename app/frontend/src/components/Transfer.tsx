import React, { useState, ChangeEvent, useEffect, FormEvent, useContext } from 'react'

import { GiPayMoney } from 'react-icons/gi'
import {userContext, UserContextType } from '../context/UserContext';
import { requestData } from '../helpers/requests';
import { getItem } from '../helpers/localStorage';
import { setToken } from '../helpers/requests'

function Transfer() {

    const { user } = useContext(userContext) as UserContextType

    const [transfer, setTransfer] = useState({
        username: '',
        amount: '',
    })

    const [accounts, setAccounts] = useState([])

         
    const { username, amount } = transfer;

    const [isDisabled, setIsDisabled] = useState(true)
    const [hidden, setHidden] = useState(true)

    
    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTransfer({...transfer, [name]: value})
    };
    
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const threeSeconds = 3000;
        
        setHidden(false)
        
        setTimeout(() => {
            setHidden(true)
        }, threeSeconds)        
    };

    const validateAmount = () => {
        const regex = /^\d+$/gi
        const isAmountValid = regex.test(amount)
        
        if (isAmountValid && username) {
            setIsDisabled(false)
         
        } else {
            setIsDisabled(true)
        }
    }
    
    useEffect(() => {
        validateAmount()
    }, [transfer])

    useEffect(() => {
        const getAccounts = async () => {
            const token = getItem('token')
            setToken(token)
            const allAcounts = await requestData(`/account/transfer/${user.username}`);
            setAccounts(allAcounts)
        }

        getAccounts()
    }, [])

  return (
    <div className='min-h-[550px] flex justify-center items-center'>
        <div className="
            card 
            w-[80%] 
            h-[500px] 
            bg-black 
            rounded-lg 
            p-4 
            shadow-xl 
            shadow-ng-green
            flex
            items-center        
            "
        >
            <form 
            onSubmit={ handleSubmit }
            className="
                card-body 
                flex 
                flex-col 
                justify-between 
                items-center 
                gap-2
                
                ">
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
                    <option disabled selected>Selecione um usuário</option>
                    {accounts.length && accounts.map(({username}) => (
                        <option value={username}>{username}</option>
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

                <i className="text-[100px] text-white"> <GiPayMoney /></i>
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
    </div>
  )
}

export default Transfer