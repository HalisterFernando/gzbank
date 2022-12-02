import { useEffect, useState } from 'react'



const useCheckPath = () => {

    const balance = window.location.href.includes('balance');
    const transaction = window.location.href.includes('transaction');
    const transfer = window.location.href.includes('transfer');
    const login = window.location.href.includes('login');
    const signin = window.location.href.includes('signin');

    const [path, setPath] = useState({
        balance: false,
        transaction: false,
        transfer: false,
        login: false,
        signin: false
    })

    useEffect(() => {
        
        switch (true) {
            case balance:
                return setPath({
                    ...path, 
                    balance, 
                    transaction, 
                    transfer,
                    login,
                    signin
                });
            case transaction:
                return  setPath({
                    ...path, 
                    balance, 
                    transaction, 
                    transfer,
                    login,
                    signin
                });      
            case transfer:
                return  setPath({
                    ...path, 
                    balance, 
                    transaction, 
                    transfer,
                    login,
                    signin
                });
            case login:
                return setPath({
                    ...path,
                    balance,
                    transaction,
                    transfer,
                    login,
                    signin
                });
            case signin:
                return setPath({
                    ...path,
                    balance,
                    transaction,
                    transfer,
                    login,
                    signin
                });      
            default:
                return setPath({
                    ...path, 
                    balance, 
                    transaction, 
                    transfer,
                    login,
                    signin
                });
        }      
    }, [login, transfer, balance, signin, transaction])

  return {path}
}

export default useCheckPath