import React from 'react'
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import Balance from '../components/Balance';


const BalancePage = () => {  

  return (
    <div className='h-screen flex flex-col'>          
      <Header />
      <Balance />
      <PageFooter />      
    </div>
  )
}

export default BalancePage