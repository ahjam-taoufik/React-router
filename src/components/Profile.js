import React from 'react';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const auth=useAuth()
    const navigate=useNavigate()

    const handleLogOut=()=>{
      auth.logout()
      navigate('/')
    }


  return (
       <div>
         <h1>Welcome {auth.user}</h1>
         <button onClick={handleLogOut}>Logout</button>
       </div>)
       ;
};


