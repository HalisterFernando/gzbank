import React from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const history = useNavigate()

  return (
    <Form 
    
    onSubmit={() => history('/login')}
    />
  )
}

export default Home