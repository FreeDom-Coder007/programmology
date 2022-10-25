import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assests/logo/custom-coding-programming-development-svgrepo-com.svg'
import './Header.css'

const Header = () => {
  return (
    <div className='shadow-lg'>
        <nav className="navbar bg-base-100 container w-11/12 mx-auto">
           <div className="flex-1">
           <Link to='/'><img className='logo' src={logo} alt=""/></Link>
           <h1 className='font-bold text-2xl ml-6 text-emerald-500'>PROGRAMMOLOGY</h1>
           </div>
           <ul className=' gap-x-16'>
            <li ><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-red-400 rounded py-1 px-5' to='/'>Home</Link></li>
            <li ><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-red-400 rounded py-1 px-5' to='/courses'>Courses</Link></li>
            <li ><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-red-400 rounded py-1 px-5'>Blog</Link></li>
            <li ><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-red-400 rounded py-1 px-5'>Faq</Link></li>
            <li ><Link className='font-bold shadow-lg hover:bg-sky-700 text-white bg-red-400 rounded py-1 px-5'>Dark Mode</Link></li>
           </ul>
        </nav>
    </div>
  )
}

export default Header;