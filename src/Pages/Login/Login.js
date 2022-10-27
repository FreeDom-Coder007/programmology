import React, { useState } from 'react';
import { useContext } from 'react';
import { auth, AuthContext } from '../../Contexts/AuthContext';
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [error, setError] = useState('')
    const {setUser,Login,GoogleProvider, FaceBookProvider, GithubProvider} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value
        
        Login(email,password)
        .then(result => {
            const userInfo = result.user
            console.log(userInfo)
            setUser(userInfo)
            form.reset()
            navigate(from, {replace: true}) 
        })
        .catch(err => {
            setError(err)
        })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))
    }

    const handleFacebookSignIn = () => {
        signInWithPopup(auth,FaceBookProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth,GithubProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))
    }

    return (
        <section>
        <form onSubmit={handleLogin} className='w-3/12 mx-auto my-14 border shadow-md shadow-cyan-300 rounded-3xl'>
           <h1 className='text-2xl font-semibold text-center my-6'>Login</h1>
           <div className="form-control w-full max-w-xs mx-auto mb-4">
             <label className='font-semibold' htmlFor="email">Email:</label>
             <input type="email" placeholder="Type here" name='email' className="input input-bordered input-accent w-full max-w-xs" required/>
           </div>
           <div className="form-control w-full max-w-xs mx-auto mb-4">
             <label className='font-semibold' htmlFor="password">Password:</label>
             <input type="password" placeholder="Type here" name='password' className="input input-bordered input-accent w-full max-w-xs" required/>
           </div>
           <p className='text-center text-red-500 font-semibold'> {error} </p>
           <button type='submit' className="btn-accent block mx-auto my-4 px-8 py-2 rounded-lg text-white ">Login</button>
           <p className='text-center mb-5'>Alredy have an account? <Link to='/signin' className='text text-emerald-500'>SignIn</Link></p>
           <div className="button-container">
              <button onClick={handleGoogleSignIn} className="google-btn flex items-center justify-between my-2 py-2 mx-auto outline-1 border hover:bg-emerald-500 hover:text-white"><FcGoogle className='ml-2 text-2xl'/><span className="mr-24 font-semibold">SignIn with Google</span></button>  
              <button onClick={handleFacebookSignIn} className="facebook-btn flex items-center justify-between my-2 mx-auto py-2 outline-1 border hover:bg-emerald-500 hover:text-white"><FaFacebook className='ml-2 text-2xl text-blue-600'/><span className="mr-24 font-semibold">Continue with Facebook</span></button>    
              <button onClick={handleGithubSignIn} className="facebook-btn flex items-center justify-between my-2 mx-auto py-2 outline-1 border hover:bg-emerald-500 hover:text-white"><FaGithub className='ml-2 text-2xl'/> <span className="mr-24 font-semibold">Continue with GitHub</span></button>
           </div>
        </form>
        <ToastContainer/>
   </section>
    );
};


export default Login;