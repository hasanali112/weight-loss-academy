import React, { createContext,  useEffect,  useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const[loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

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


    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, current =>{
            console.log(current)
            setUser(current)
            if(current){
                axios.post('http://localhost:5000/jwt', {email: current.email})
                .then(data=>{
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
           
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
       userLogOut,
       googleSignIn 
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