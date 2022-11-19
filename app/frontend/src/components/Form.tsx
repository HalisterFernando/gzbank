import React, { useState, useEffect } from 'react'
import { FormikValues, useFormik } from 'formik'
import Loading from './Loading'
import validationSchema from '../validations/yupSchemas'
import useLoading from '../hooks/useLoading'




const initialValues = {
    username: '',
    password: '',    
  }

const Form = ({onSubmit}: FormikValues) => {
   
    const { loading } = useLoading();
    
    const path = window.location.href.includes('login'); 
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });    

    const usernameProps = formik.getFieldProps("username");
    const passwordProps = formik.getFieldProps("password");


     
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white'>
      {
      loading ? ( <Loading /> ) : 
      (
      <>       
        <div className='
            w-[85%] 
            min-h-96
            border
            border-ng-pink
            rounded-sm
            bg-black
            p-4
           '>
              <h1 className='text-center text-white font-semibold'>Bem-vindo ao NG_APP</h1>
              <h2 className='text-center text-white font-semibold mt-5'>
              {path ? "Realize o login" : "Crie sua conta"}
              </h2>
              <form onSubmit={formik.handleSubmit} className='mt-5'>
                <label htmlFor="" className='text-white font-semibold'>Nome de usuário</label>
                <input                
                    type="text"                                
                    placeholder='Flávio Albuquerque'              
                    {...usernameProps}
                    className='
                    rounded-md
                    p-2
                    w-full
                    mt-2
                    mb-4
                '
                />
                {formik.touched.username && formik.errors.username ? (
                    <div className='text-red-600 mb-4'>
                        {formik.errors.username}
                    </div>
                ): null}
                  <label htmlFor="" className='text-white font-semibold'>Senha</label>
                <input 
                    type="password" 
                    placeholder='S3nha123'                
                    {...passwordProps}
                    className='
                    rounded
                    p-2
                    w-full
                    mt-2
                    mb-4
                    '
                />
                  {formik.touched.password && formik.errors.password ? (
                    <div className='text-red-600'>
                        {formik.errors.password}
                    </div>
                ): null}
                <div className='w-full flex justify-center mt-8'>
                    <button 
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                        className="
                        btn 
                        btn-active 
                        bg-green-400
                        w-full
                        text-xl
                        font-bold
                        text-slate-200
                        hover:bg-ng-green
                        
                        ">
                          {path ? "Login" : "Criar Conta"}
                    </button>
                </div>
              </form>
        </div>
        </>
      ) 
      }
       
    </div>
    
  )
}

export default Form