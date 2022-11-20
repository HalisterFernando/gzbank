import React, { useEffect, useState } from 'react'



const useCheckPath = () => {

    const balancePath = window.location.href.includes('balance');
    const transactionPath = window.location.href.includes('transaction');
    const transferPath = window.location.href.includes('transfer');

    const [path, setPath] = useState({
        balance: false,
        transaction: false,
        transfer: false
    })

    useEffect(() => {
        if (balancePath) {
            setPath({
                ...path, 
                balance: true, 
                transaction: false, 
                transfer: false
            })
        }
        if (transactionPath) {
            setPath({
                ...path, 
                balance: false, 
                transaction: true, 
                transfer: false
            })
        }
        if (transferPath) {
            setPath({
                ...path, 
                balance: false,
                transaction: false,
                transfer: true
            })
        }
    }, [balancePath, transactionPath, transferPath])

  return {path}
}

export default useCheckPath