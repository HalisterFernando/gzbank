import React from 'react'
import { useNavigate } from 'react-router-dom'



function Welcome() {
  const history = useNavigate()
  return (
    <div className='h-screen flex flex-col justify-center items-center border'>       
        <div className='
            w-[85%] 
            min-h-96
            border
            border-ng-pink
            rounded-sm
            bg-black
            p-4
        '>  
            <h1 className='text-center text-white font-semibold'>Bem-vindo ao NG_APP</h1>
            <h2 className='text-center text-white font-semibold'>Você já possui uma conta ?</h2>
            <button 
              type="button"
              onClick={() => history('/login')}
              className="
              btn 
              btn-active 
              bg-green-400
              w-full
              text-xl
              font-bold
              text-slate-200
              hover:bg-ng-green
              my-8                                  
              ">
              SIM
            </button>
            <button 
              type="button"       
              onClick={() => history('/signin')}             
              className="
              btn 
              btn-active 
              bg-pink-400
              w-full
              text-xl
              font-bold
              text-slate-200
              hover:bg-ng-pink  
              mb-8                  
              ">
              NÃO
            </button>
        </div>
    </div>
  )
}

export default Welcome