import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assests/logo/custom-coding-programming-development-svgrepo-com.svg'
import { AuthContext } from '../../Contexts/AuthContext';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  
  console.log(user)

  const handleLogOut = () => {
     logOut()
     .then(() => {})
     .catch(err => console.error(err))
  }

  return (
    <div className='shadow-lg'>
        <nav className="navbar bg-base-100 container w-11/12 mx-auto">
           <div className="flex-1">
           <Link to='/'><img className='logo' src={logo} alt=""/></Link>
           <Link to='/'><h1 className='font-bold text-2xl ml-6 text-emerald-500'>PROGRAMMOLOGY</h1></Link>
           </div>
           <ul className=' gap-x-8'>
             <li><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-cyan-400 border-rounded shadow-cyan-300 rounded py-1 px-5' to='/'>Home</Link></li>
             <li><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-cyan-400 border-rounded shadow-cyan-300 rounded py-1 px-5' to='/courses'>Courses</Link></li>
             <li><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-cyan-400 border-rounded shadow-cyan-300 rounded py-1 px-5' to='/blog'>Blog</Link></li>
             <li><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-cyan-400 border-rounded shadow-cyan-300 rounded py-1 px-5' to='/faq'>Faq</Link></li>
             { user?.uid ? 
               <button onClick={handleLogOut} className='font-bold shadow-lg hover:bg-sky-700 text-white bg-cyan-400 border-rounded shadow-cyan-300 rounded py-1 px-5'><FontAwesomeIcon icon={faSignOutAlt}/>Logout</button>
               :
               <>
                <li><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-cyan-400 border-rounded shadow-cyan-300 rounded py-1 px-5' to='/signin'>SignIn</Link></li>
                <li><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-cyan-400 border-rounded shadow-cyan-300 rounded py-1 px-5' to='/login'>Login</Link></li> 
               </>
             }
             <li><input type="checkbox" className="toggle" checked/></li>
           </ul>
           <div className='dropdown dropdown-end ml-2'>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               <div className="w-10 rounded-full">
                <img title={user?.displayName} src={user?.photoURL ? user.photoURL : "https://i.pinimg.com/280x280_RS/e6/06/f4/e606f4dabac2abc63f4bdb0a91a85250.jpg"} alt=''/>
               </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li><Link className="justify-between">Profile<span className="badge">New</span></Link></li>
                <li><Link>Settings</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
             </ul>
           </div>
        </nav>
    </div>
  )
}

export default Header;