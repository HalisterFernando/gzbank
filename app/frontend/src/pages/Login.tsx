import React from 'react'



const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white'>
        <h1>Bem vindo ao NG_APP</h1>
        <div className='
        w-[85%] 
        h-96
        border
        border-ng-pink
        rounded-sm
        bg-black
        p-4
        '>
        <h2 className='text-center text-white font-semibold'>Crie sua conta</h2>
          <form action="" className='mt-5'>
            <label htmlFor="" className='text-white font-semibold'>Nome de usuário</label>
            <input 
            type="text" 
            placeholder='Flávio Albuquerque'
            className='
            rounded-md
            p-2
            w-full
            mt-2
            mb-4
            '
            />
              <label htmlFor="" className='text-white font-semibold'>Senha</label>
            <input 
            type="text" 
            placeholder='S3nha123'
            className='
            rounded
            p-2
            w-full
            mt-2
            mb-4
            '
            />
            <div className='w-full flex justify-center mt-8'>
                <button 
                disabled
                className="
                btn 
                btn-active 
                bg-green-400
                w-full
                text-xl
                font-bold
                text-slate-200
                hover:bg-ng-green
                
                ">OK</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login