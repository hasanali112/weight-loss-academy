import React, { createContext,  useEffect,  useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const[loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userUpdate = (name, photo)=>{
        setLoading(true)
      return updateProfile (auth.currentUser,{
        displayName: name, photoURL: photo
      })
    }

    const userLogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, current =>{
            console.log(current)
            setUser(current)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
       
    },[])



    const authInfo = {
       user,
       loading,
       createUser,
       loginUser,
       userUpdate,
       userLogOut 
    }



    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;