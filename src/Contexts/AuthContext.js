import React, { Profiler, useEffect } from 'react';
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';
import { useState } from 'react';


export const auth = getAuth(app)
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile) 
    }

    const Login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
         onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser) 
           console.log(currentUser)
           setLoading(false)
        })

    }, [])

    const GoogleProvider = new GoogleAuthProvider()
    const FaceBookProvider = new FacebookAuthProvider()
    const GithubProvider = new GithubAuthProvider()

    const authValues = { user, loading, setUser, createUser, Login, logOut, updateUserProfile, GoogleProvider, FaceBookProvider, GithubProvider}

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;