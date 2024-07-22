import React, { createContext } from 'react'
export const AuthContext=createContent();
export default function AuthProvider({children}) {
 const initialAuthUser=createContent()
 const [authUser,setAuthUser]=useState(
    initialAuthUser?JSON.parse(initialAuthUser):undefined
 )
 return(
 <AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
 </AuthContext.Provider>
 )
}
export const useAuth=()=>useContent(AuthContext)