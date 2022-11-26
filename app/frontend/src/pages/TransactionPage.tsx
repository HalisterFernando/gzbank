import React from 'react'
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import Transaction from '../components/Transaction';


const TransactionPage = () => {  

  return (
    <div className='h-screen flex flex-col'>          
      <Header />
      <Transaction />
      <PageFooter />      
    </div>
  )
}

export default TransactionPage