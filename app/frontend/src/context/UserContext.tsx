import React, {createContext, useState, ReactNode, FC} from 'react';

export interface IUser {
    id: number | null;
    username: string;
    accountId: number | null;
}

export interface IAmount {
    amount: string
}


export type UserContextType = {
   user: IUser,
   userAmount: IAmount
   saveUserData: (id: number, username: string, accountId: number) => void   
   saveUserAmount: (amount: string) => void
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

    const [userAmount, setUserAmount] = useState<IAmount>({amount: ''})
    
    const saveUserData = (id: number, username: string, accountId: number) => {
        setUser({...user, id, username, accountId})
    }

    const saveUserAmount = (amount: string) => {
        setUserAmount({...userAmount, amount })
    }
    

  return (
    <userContext.Provider value={{user, userAmount, saveUserData, saveUserAmount}}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider