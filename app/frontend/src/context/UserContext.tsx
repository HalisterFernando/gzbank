import React, {createContext, useState, ReactNode, FC} from 'react';

export interface IUser {
    username: string,
}


export type UserContextType = {
   user: IUser
   saveUserData: (username: string) => void   
}

interface Props {
    children: ReactNode
}


export const userContext = createContext<UserContextType | null>(null);


const UserProvider: FC<Props> = ({children}) => {

    const [user, setUser] = useState<IUser>({
        username: ''
    });        
    
    const saveUserData = (username: string) => {
        setUser({...user, username})
    }
    

  return (
    <userContext.Provider value={{user, saveUserData}}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider