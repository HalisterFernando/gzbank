import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormPage from '../pages/FormPage'
import Welcome from '../pages/Welcome'
import BalancePage from '../pages/BalancePage'
import TransactionPage from '../pages/TransactionPage'
import TransferPage from '../pages/TransferPage'

const ComponentRoutes = () => {   
  return (
    
      <Routes>
        <Route path='/' element={ <Welcome/> } />
        <Route path='/signin' element={ <FormPage /> } />
        <Route path='/login'  element={ <FormPage /> } />
        <Route path='/balance/:username' element={ <BalancePage />} />
        <Route path='/transaction/:username' element={ <TransactionPage /> } />
        <Route path='/transfer/:username' element={ <TransferPage /> } />      
      </Routes>
   
  )
}

export default ComponentRoutes