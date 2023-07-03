import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';


const Logout = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const handleLogout=()=>{
        signOut();
    }
  return (
    <button onClick={handleLogout}>
       Logout
    </button>
  )
}

export default Logout