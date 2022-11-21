import React, {createContext, useState, ReactNode, FC} from 'react';

export interface IUser {
    id: number | null;
    username: string;
    accountId: number | null;
}


export type UserContextType = {
   user: IUser,
   saveUserData: (id: number, username: string, accountId: number) => void   
}

interface Props {
    children: ReactNode
}


export const userContext = createContext<UserContextType | null>(null);


const UserProvider: FC<Props> = ({children}) => {

    const [user, setUser] = useState<IUser>({
        id: null,
        username: '',
        accountId: null
    });        
    
    const saveUserData = (id: number, username: string, accountId: number) => {
        setUser({...user, id, username, accountId})
    }
    

  return (
    <userContext.Provider value={{user, saveUserData}}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider