import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormPage from '../pages/FormPage'
import UserPage from '../pages/UserPage'
import Welcome from '../pages/Welcome'



const ComponentRoutes = () => {   
  return (
    <Routes>
      <Route path='/' element={ <Welcome/> } />
      <Route path='/signin' element={ <FormPage /> } />
      <Route path='/login'  element={ <FormPage /> } />
      <Route path='/balance' element={ <UserPage />} />
    </Routes>
  )
}

export default ComponentRoutes