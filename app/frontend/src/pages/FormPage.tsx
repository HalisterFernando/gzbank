import React from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import PageFooter from '../components/PageFooter'

const FormPage = () => {
  return (
    <div className='h-screen flex flex-col'>   
    <Header />
    <Form />
    <PageFooter />
    </div>
  )
}

export default FormPage