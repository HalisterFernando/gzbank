import React, {useContext} from 'react'
import Links from './Links'
import { userContext, UserContextType } from '../context/UserContext'

const Header = () => {

  const { user } = useContext(userContext) as UserContextType

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
        <span className='text-white font-semibold'>Olá {user.username}</span>
       <div className='flex gap-4'>
        <Links />
       </div>
    </header>
  )
}

export default Header