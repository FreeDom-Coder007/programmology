import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import './SignIn.css';
import { auth } from '../../Contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const { setUser, createUser, updateUserProfile, GoogleProvider, FaceBookProvider, GithubProvider} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target 
        const fullName = form.fullName.value 
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        const confirmPass = form.confirmPass.value
    
        if(password !== confirmPass){
           setError(" Password didn't match ")
        }
        else{
          toast.success('Successfuly Created an account', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: true,
            theme: 'dark',
            });
        }

        createUser(email,password)
        .then(result => {
            const user = result.user
            setUser(user)
            handleUpdateUserProfile(fullName,photoURL)
            navigate('/')
        })
        .catch(err => console.error(err))
    }

    const handleUpdateUserProfile = (fullName,photoURL) => {
       const profile = {
          displayName: fullName,
          photoURL: photoURL
       }

       updateUserProfile(profile)
       .then(() => {})
       .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
        .then(result => {
            const user = result.user
            setUser(user)
        })
        .catch(err => console.error(err))
    }

    const handleFacebookSignIn = () => {
        signInWithPopup(auth,FaceBookProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            setUser(user)
        })
        .catch(err => console.error(err))
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth,GithubProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            setUser(user)
            navigate('/')
        })
        .catch(err => console.error(err))
    }

    return (
        <section>
             <form onSubmit={handleSubmit} className='w-3/12 mx-auto my-14 border rounded-3xl shadow-md shadow-cyan-300'>
                <h1 className='text-2xl font-semibold text-center my-6'>Sign In</h1>
                <div className="form-control w-full max-w-xs mx-auto mb-4">
                  <label className='font-semibold' htmlFor="fullName">Full Name:</label>
                  <input type="text" placeholder="Type here" name='fullName' className="input input-bordered input-accent w-full max-w-xs" required/>
                </div>
                <div className="form-control w-full max-w-xs mx-auto mb-4">
                  <label className='font-semibold' htmlFor="photoURL">PhotoURL:</label>
                  <input type="text" placeholder="Type here" name='photoURL' className="input input-bordered input-accent w-full max-w-xs" required/>
                </div>
                <div className="form-control w-full max-w-xs mx-auto mb-4">
                  <label className='font-semibold' htmlFor="email">Email:</label>
                  <input type="email" placeholder="Type here" name='email' className="input input-bordered input-accent w-full max-w-xs" required/>
                </div>
                <div className="form-control w-full max-w-xs mx-auto mb-4">
                  <label className='font-semibold' htmlFor="password">Password:</label>
                  <input type="password" placeholder="Type here" name='password' className="input input-bordered input-accent w-full max-w-xs" required/>
                </div>
                <div className="form-control w-full max-w-xs mx-auto mb-4">
                  <label className='font-semibold' htmlFor="confirmPass">Confirm Password:</label>
                  <input type="password" placeholder="Type here" name='confirmPass' className="input input-bordered input-accent w-full max-w-xs" required/>
                  <p className='text-red-500 mt-2 text-center font-semibold'>{error}</p>
                </div>
                <button type='submit' className="btn-accent block mx-auto my-4 px-8 py-2 rounded-lg text-white ">SignIn</button>
                <p className='text-center mb-5'>didn't have a account? <Link to='/login' className='text text-emerald-500'>SignIn</Link></p>
                <div className="button-container">
                   <button onClick={handleGoogleSignIn} className="google-btn flex items-center justify-between my-2 py-2 mx-auto outline-1 border hover:bg-emerald-500 hover:text-white"><FcGoogle className='ml-2 text-2xl'/><span className="mr-24 font-semibold">SignIn with Google</span></button>  
                   <button onClick={handleFacebookSignIn} className="facebook-btn flex items-center justify-between my-2 mx-auto py-2 outline-1 border hover:bg-emerald-500 hover:text-white"><FaFacebook className='ml-2 text-2xl text-blue-600'/><span className="mr-24 font-semibold">Continue with Facebook</span></button>    
                   <button onClick={handleGithubSignIn} className="facebook-btn flex items-center justify-between my-2 mx-auto py-2 outline-1 border hover:bg-emerald-500 hover:text-white"><FaGithub className='ml-2 text-2xl'/> <span className="mr-24 font-semibold">Continue with GitHub</span></button>
                </div>
             </form>
             <ToastContainer/>
        </section>
    )
}

export default SignUp;