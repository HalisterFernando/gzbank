import React, { useEffect, useState, useContext } from 'react'
import { GiMoneyStack } from 'react-icons/gi';
import { getItem } from '../helpers/localStorage'
import { setToken } from '../helpers/requests';
import { requestData } from '../helpers/requests';
import { userContext, UserContextType } from '../context/UserContext';
import replaceDotToComa from '../helpers/replace';

function Balance() {

  const {user} = useContext(userContext) as UserContextType
  const [userBalance, setUserBalance] = useState('');

  useEffect(() => {
   
    const getBalance = async () => {
      const token = getItem('token')
      setToken(token)
      const {balance: {balance}} = await requestData(`/account/${user.username}`)
      setUserBalance(balance)
    }
    getBalance()
  }, [])  


  return (
    <div className='min-h-[550px] flex justify-center items-center'>
        <div className="
        card 
        w-[80%] 
        h-64 
        bg-black 
        rounded-lg 
        p-4 
        shadow-xl 
        shadow-ng-green
        flex
        items-center        
        "
        >
            <div className="card-body flex flex-col justify-between items-center gap-8">
                <h2 className="card-title text-white font-semibold text-xl">Saldo atual</h2>
                <i className="text-[100px] text-white"> <GiMoneyStack /></i>
                <p className='text-white font-semibold text-xl'>R$: {replaceDotToComa(userBalance)}</p>               
            </div>
        </div>
    </div>
  )
}

export default Balance