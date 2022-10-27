import React from 'react';
import { FaUser, FaAsymmetrik, FaHighlighter, FaQuestion } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import Course2 from '../../components/Course2/Course2';
import './Course.css'

const Courses = () => {
    const courses = useLoaderData()

    return (
        <section className='courses-section flex gap-x-3 py-10 my-1 w-11/12 mx-auto shadow-lg'>
            <div className="side-nav py-2 px-4 w-2/6">
              <h1 className='text-center text-2xl font-bold'>Sections</h1>  
              <ul className='flex flex-col gap-y-12'>
                <li><Link className='border-b-2 text-lg font-semibold flex items-center hover:bg-emerald-500 hover:text-white rounded px-4' to='/'><FaUser className=' mr-3'/>Home</Link></li>
                <li><Link className='border-b-2 text-lg font-semibold flex items-center hover:bg-emerald-500 hover:text-white rounded px-4' to='/courses'><FaAsymmetrik className=' mr-3'/>Courses</Link></li>
                <li><Link className='border-b-2 text-lg font-semibold flex items-center hover:bg-emerald-500 hover:text-white rounded px-4' to='/blog'><FaHighlighter className=' mr-3'/>Blog</Link></li>
                <li><Link className='border-b-2 text-lg font-semibold flex items-center hover:bg-emerald-500 hover:text-white rounded px-4' to='faq'><FaQuestion className=' mr-3'/>Faq</Link></li>
              </ul>  
            </div>

            <div className="courses grid grid-cols-2 gap-y-10 w-4/6">
               { courses.map(course => <Course2 key={course.id} course={course}/>) }
            </div>
        </section>
    )
}

export default Courses;