import React from 'react'
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import Transfer from '../components/Transfer';


const TransferPage = () => {  

  return (
    <div className='h-screen flex flex-col'>          
      <Header />
      <Transfer />
      <PageFooter />      
    </div>
  )
}

export default TransferPage