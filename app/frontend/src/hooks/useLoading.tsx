import React, {useState, useEffect} from 'react'


const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const loginPath = window.location.href.includes('login')
  const signinPath = window.location.href.includes('signin');
  const userPath = window.location.href.includes('user')  
  const threeSeconds = 3000

  useEffect(() => {
    if(loginPath || signinPath || userPath) {
        setLoading(true)
    }

    setTimeout(() => {
      setLoading(false)
    }, threeSeconds)
    }, [loginPath, signinPath, userPath])

  return {loading}
}

export default useLoading