import React from 'react'
import { Navigate } from 'react-router-dom'


import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'



const ComponentRoutes = () => {   
  return (
    <Routes>
      <Route 
      path='/'
      element={<Navigate to="/signin" replace />}
      />
      <Route       
      path='/signin'
      element={ 
      <Home />     
    }    
      />
      <Route 
      path='/login'
      element={
        <Home />
      }
      />
    </Routes>
  )
}

export default ComponentRoutes