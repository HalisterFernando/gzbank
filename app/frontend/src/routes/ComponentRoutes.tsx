import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormPage from '../pages/FormPage'
import BalancePage from '../pages/BalancePage'
import TransactionPage from '../pages/TransactionPage'
import TransferPage from '../pages/TransferPage'
import { Navigate } from 'react-router-dom'

const ComponentRoutes = () => {   
  return (
    
      <Routes>
        <Route path='*' element={ <Navigate to='/login' replace /> } />
        <Route path='/signin' element={ <FormPage /> } />
        <Route path='/login'  element={ <FormPage /> } />
        <Route path='/balance' element={ <BalancePage />} />
        <Route path='/transaction/history/:id' element={ <TransactionPage /> } />
        <Route path='/transfer' element={ <TransferPage /> } />      
      </Routes>
   
  )
}

export default ComponentRoutes