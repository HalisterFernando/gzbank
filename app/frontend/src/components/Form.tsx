import React, { useContext } from 'react';
import { useFormik } from 'formik';
import useCheckPath from '../hooks/useCheckPath';
import Loading from './Loading';
import validationSchema from '../validations/yupSchemas';
import useLoading from '../hooks/useLoading';
import { useNavigate } from 'react-router-dom';
import { requestPost } from '../helpers/requests';
import {setItem} from '../helpers/localStorage'
import { userContext, UserContextType } from '../context/UserContext';
import { ImKey, ImUser } from 'react-icons/im'




const Form = () => {
  const { user, saveUserData } = useContext(userContext) as UserContextType;
  const history = useNavigate();
  const { loading } = useLoading();
  const {path: {login, signin}} = useCheckPath();
  
  const initialValues = {
      username: '',
      password: '',    
    }

  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const {username, password} = values
        
        if (login) {
          const response = await requestPost('/login', {username, password})
          setItem('token', response.token);
          setItem('user', response.userData);

          saveUserData(
            response.userData.id, 
            response.userData.username, 
            response.userData.accountId
            )
        } else {
            await requestPost('/signin', {username, password})          
        }

        return login ? history(`/balance/${user.accountId}`) : history('/login')
      }
  });    

  const usernameProps = formik.getFieldProps("username");
  const passwordProps = formik.getFieldProps("password");

     
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white border-y-2 border-white'>
      {
      loading ? ( <Loading /> ) : 
      (        
        <form 
          onSubmit={formik.handleSubmit}
          className='     
            w-full       
            h-full           
            rounded-sm
            bg-black
            p-4
           '>
             
              <h2 className='text-center text-white text-xl font-bold my-5'>
              {login ? "Realize o login" : "Crie sua conta"}
              </h2>             
                <label htmlFor="" className='text-white font-semibold flex items-center gap-2'>
                  <i className='text-xl text-ng-green'>
                    <ImUser />
                  </i>
                  Nome de usuário
                </label>
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
                {signin && formik.touched.username && formik.errors.username ? (
                    <div className='bg-ng-pink font-semibold rounded-md p-2 mb-4'>
                        {signin && formik.errors.username}
                    </div>
                ): null}
                  <label htmlFor="" className='text-white font-semibold flex items-center gap-2'>
                    <i className='text-xl text-ng-green'>
                      <ImKey />  
                    </i>
                    Senha
                  </label>
                
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
                  {signin && formik.touched.password && formik.errors.password ? (
                    <div className='bg-ng-pink font-semibold rounded-md p-2 mb-4'>
                        {signin && formik.errors.password}
                    </div>
                ): null}
                <div className='w-full flex flex-col justify-center gap-4 mt-8'>
                    <button
                      type="button"
                      className={login ? 'show-signin-btn' : 'hidden-signin-btn'}
                      onClick={ () => history('/signin')}
                    >
                      Cadastrar
                    </button>
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
                        text-white                        
                        ">
                          {login ? "Login" : "Criar Conta"}
                    </button>
                </div>              
        </form>
        
      ) 
      }
       
    </div>
    
  )
}

export default Form