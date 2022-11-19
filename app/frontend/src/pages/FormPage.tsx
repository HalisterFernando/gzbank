import React from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'

const FormPage = () => {
  const history = useNavigate()
  const loginPath = window.location.href.includes('login')
  return (
    <Form     
    onSubmit={() => loginPath ? history('/balance') : history('/login')}
    />
  )
}

export default FormPage