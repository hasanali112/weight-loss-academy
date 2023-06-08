import React, { createContext,  useEffect,  useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userUpdate = (name, photo)=>{
      return updateProfile (auth.currentUser,{
        displayName: name, photoURL: photo
      })
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, current =>{
            console.log(current)
            setUser(current)
        })
        return ()=>{
            unSubscribe()
        }
       
    },[])



    const authInfo = {
       user,
       createUser,
       loginUser,
       userUpdate
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