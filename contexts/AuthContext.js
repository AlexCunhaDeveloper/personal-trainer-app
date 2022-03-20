import { createContext, useState } from 'react'
import Router from 'next/router'
import {firebase, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,getAuth} from '../lib/firebase'



const AuthContext = createContext()

export function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    const auth = getAuth()

    const signincreate = (email, password) => {
        try {
        setLoading(true);
            
       return createUserWithEmailAndPassword(auth,email, password).then((response) => {
            setUser(response.user)
            Router.push('/dashboard')
        })
        }finally {
            setLoading(false)
        }
    }

     const signin = (email, password) => {
        try {
        setLoading(true);
            
       return signInWithEmailAndPassword(auth,email, password).then((response) => {
            setUser(response.user)
            Router.push('/dashboard')
        })
        }finally {
            setLoading(false)
        }
    }

    

    const signout = () => {
        try {
            Router.push('/')
            return signOut(signOut).then(() => setUser(false));
        }finally {
            setLoading(false)
        }
    }

    return <AuthContext.Provider  value={{
        user,
        loading,
        signin,
        signout
    }}>{children}
    </AuthContext.Provider>
        
        

  
}

export const AuthConsumer = AuthContext.Consumer
export default AuthContext