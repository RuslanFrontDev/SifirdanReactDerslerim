import React from 'react'
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const {setUser} = useAuth();
  return (
    <div>Profile
      <button onClick={()=>setUser(false)}>Cixis et</button>
    </div>
  )
}

export default Profile