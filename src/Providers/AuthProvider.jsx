import React, { useContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

export const AuthContext = useContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)






    


    const authInfo = {
       user
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