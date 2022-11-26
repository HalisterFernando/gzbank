import React, {useContext, useEffect} from 'react'
import Links from './Links'
import { userContext, UserContextType } from '../context/UserContext'
import { getItem } from '../helpers/localStorage'

const Header = () => {
  
  const {user, saveUserData} = useContext(userContext) as UserContextType
  
  useEffect(() => {
    const localStorageUser = getItem('user')
    if (localStorageUser) {
      const {id, username, accountId} = localStorageUser
      saveUserData(id, username, accountId)
    }
  }, [])

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
        <span className='text-white font-semibold mt-1'>Olá {user.username}</span>
       <div className='flex gap-4'>
        <Links />
       </div>
    </header>
  )
}

export default Header