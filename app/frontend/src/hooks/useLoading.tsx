import React, {useState, useEffect} from 'react'


const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const loginPath = window.location.href.includes('login')
  const signinPath = window.location.href.includes('signin');   
  const threeSeconds = 3000

  useEffect(() => {
    if(loginPath || signinPath ) {
        setLoading(true)
    }

    setTimeout(() => {
      setLoading(false)
    }, threeSeconds)
    }, [loginPath, signinPath])

  return {loading}
}

export default useLoading