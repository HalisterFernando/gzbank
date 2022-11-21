import React, { useContext } from 'react';
import { useFormik } from 'formik';
import Loading from './Loading';
import validationSchema from '../validations/yupSchemas';
import useLoading from '../hooks/useLoading';
import { useNavigate } from 'react-router-dom';
import { requestPost } from '../helpers/requests';
import {setItem} from '../helpers/localStorage'
import { userContext, UserContextType } from '../context/UserContext';




const Form = () => {
  const { saveUserData } = useContext(userContext) as UserContextType;
  const history = useNavigate();
  const { loading } = useLoading();
  const loginPath = window.location.href.includes('login'); 
  
  const initialValues = {
      username: '',
      password: '',    
    }

  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const {username, password} = values
        
        if (loginPath) {
          const response = await requestPost('/login', {username, password})
          setItem('token', response.token);
          setItem('user', response.userData);

          saveUserData(
            response.userData.id, 
            response.userData.username, 
            response.userData.accountId
            )
        } else {
          const response = await requestPost('/signin', {username, password})          
        }

        return loginPath ? history(`/balance`) : history('/login')
      }
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
              {loginPath ? "Realize o login" : "Crie sua conta"}
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
                          {loginPath ? "Login" : "Criar Conta"}
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