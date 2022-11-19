import React from 'react'
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import Loading from '../components/Loading'
import useLoading from '../hooks/useLoading'

const UserPage = () => {
  const { loading } = useLoading()
  return (
    <div>
      {
        loading ? 
        (<Loading />) : 
        (
          <>
            <Header />
            <h1>UserPage</h1>
            <PageFooter />
          </>
        )
      }
    </div>
  )
}

export default UserPage