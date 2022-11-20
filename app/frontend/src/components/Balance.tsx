import React from 'react'
import { GiMoneyStack } from 'react-icons/gi'

function Balance() {
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
                <p className='text-white font-semibold text-xl'>R$ 100,00</p>               
            </div>
        </div>
    </div>
  )
}

export default Balance