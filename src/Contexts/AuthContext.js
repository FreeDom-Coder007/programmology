import React from 'react';
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';
import { useState } from 'react';


export const auth = getAuth(app)
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const Login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const GoogleProvider = new GoogleAuthProvider()
    const FaceBookProvider = new FacebookAuthProvider()
    const GithubProvider = new GithubAuthProvider()

    const authValues = { user, setUser, createUser, Login, GoogleProvider, FaceBookProvider, GithubProvider}

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;