import React from 'react'


import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'


const ComponentRoutes = () => { 

  return (
    <Routes>
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