import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Home.css';


const Home = () => {
    const courses = useLoaderData()

    return (
        <div className='home'>
            <section className='banner my-1'>
                <div className='w-11/12 mx-auto flex flex-col py-24 gap-y-16'>
                   <div className='border-b-2'>
                    <h1 className='text-4xl font-extrabold text-sky-600'>PROGRAMMOLOGY</h1>
                    <p className='font-extrabold'>An Excelence Coding Acedemy</p>
                   </div> 
                   <div className='border-b-2'>
                    <h1 className='text-4xl font-extrabold text-sky-600'>Practical Guidence</h1>
                    <p className='font-extrabold'>Instruction Based Tasks</p>
                   </div> 
                   <div className='border-b-2'>
                    <h1 className='text-4xl font-extrabold text-sky-600'>Industry Leading Technology</h1>
                    <p className='font-extrabold'>Placement Grunted</p>
                   </div> 
                </div>
            </section>
            <section className='courses-section flex'>
               {
                courses.map(course => <Course key={course.id} course={course}/>)
               }
            </section>
        </div>
    )
}

export default Home;