import React, { useEffect, useState, useContext, ChangeEvent } from 'react'
import { userContext, UserContextType } from '../context/UserContext'
import { setItem, getItem } from '../helpers/localStorage'
import { requestData, setParam } from '../helpers/requests'

type Transactions = {
  id: number,
  debitedAccountId: number,
  creditedAccountId: number,
  value: string,
  createdAt: string
}

const Transaction = () => {

  const { user } = useContext(userContext) as UserContextType
  const [transactions, setTransactions] = useState<Transactions[]>([])
  const [transactionType, setTransactionType] = useState({
    all: true,
    cashIn: false,
    cashOut: false 
  });

  const [date, setDate] = useState<string>()


  useEffect(() => {
    const localStorageTransactions = getItem('transactions')
    if (localStorageTransactions) {
      setTransactions(localStorageTransactions) 
    }
  }, [])  

  useEffect(() => {
    const getTransactions = async () => {
      setParam(user.id)
      const response = await requestData(`/transaction/history/${user.id}`);
      setItem('transactions', response)
      setTransactions(response)
    };

    getTransactions()
  }, [])


  const handleChange = ({target: {value}}: ChangeEvent<HTMLSelectElement>) => {
    if ( value === 'cash-in') {
      setTransactionType({...transactionType, all: false, cashIn: true, cashOut: false})
    } 
    if ( value === 'cash-out') {
      setTransactionType({...transactionType, all: false, cashIn: false, cashOut: true})
    } 
    if ( value === 'all') {
      setTransactionType({...transactionType, all: true, cashIn: false, cashOut: false})
    }
    
  }

  const handleDate = ({target: {value}}: ChangeEvent<HTMLDataElement>) => {
    const newData = value.replace(/-/g, '/').split('/').reverse().join('/')    
    setDate(newData)
  }

  const renderTransactions = () => {    
    const { cashIn, cashOut } = transactionType

    let allTransactions = transactions;
    
    if (cashIn) {
      allTransactions = transactions.filter(({creditedAccountId}) => creditedAccountId === user.accountId)
    }
    if (cashOut) {
      allTransactions = transactions.filter(({debitedAccountId}) => debitedAccountId !== user.accountId)
    }

    if (date) {
      allTransactions = transactions.filter(({createdAt}) => createdAt.includes(date))
    }
     console.log(allTransactions)
    
    return allTransactions.map((transaction) => (
      <div 
        key={transaction.id}
        className='p-2 m-4 border border-black rounded-md '
      >
        <div className='px-2 flex flex-col'>
            {
          transaction.creditedAccountId === user.accountId ? 
          (<span>Valor recebido R$: {transaction.value}</span>) :
          (<span>Valor transferido R$: {transaction.value}</span>) 
          }
          <span>Transação feita em: {transaction.createdAt}</span>
        </div>
      </div>
    ))
    

    

  }

  return (
    <div className='min-h-[550px]'>
      <div className="mt-4">
         <h2 className='text-center'>Filtrar por</h2>
         <form action="" className='flex flex-col px-4 gap-2'>
          <label htmlFor="">Tipo de transação</label>          
          <select name="type" id="" className='mb-2 rounded-md' onChange={handleChange}>
            <option value="all">Todas as transições</option>
            <option value="cash-in">Recebeu dinheiro</option>
            <option value="cash-out">Transferiu dinheiro</option>
          </select>
          <label htmlFor=''>Data da transação</label>          
          <input type="date" className='rounded-md' onChange={handleDate} />
         </form>
         {renderTransactions()}
      </div>
    </div>
  )
}

export default Transaction