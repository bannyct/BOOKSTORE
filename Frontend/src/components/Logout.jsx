import React from 'react'
import { useAuth } from '../context/AuthProvider'; 
import toast from 'react-hot-toast'
function Logout() {
  const [authuser,setAuthUser]=useAuth()
  const handleLogout=()=>{
    try {
      setAuthUser({
        ...authuser,
        user:null,
      });
      localStorage.removeItem("users")
      toast.success("Logout successfully");
      setTimeout(()=>{window.location.reload();
      },3000)
    } catch (error) {
      toast.error("Eroor:"+error)
      setTimeout(()=>{},3000);
    }
  };
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>
        Logout
        </button>
    </div>
  )
}

export default Logout