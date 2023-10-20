import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { setUser} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const loginHandle = ()=>{
    setUser({
      user:"ruslan"
    })
    navigate( location?.state?.return_url || '/')
  }
  return (
    <div>
      <button onClick={loginHandle}>Giris et</button>
    </div>
  )
}

export default Login