import React from 'react'
import Links from './Links'

const Header = () => {
  return (
    <header className="
    bg-black
    w-full
    h-28
    flex
    flex-col
    items-center
    justify-evenly
    gap-2
    ">
        <span className='text-white'>Olá Usuário</span>
       <div className='flex gap-4'>
        <Links />
       </div>
    </header>
  )
}

export default Header