import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Home.css';


const Home = () => {
    const courses = useLoaderData()

    return (
        <div className='home'>
            <section className='banner my-1 w-11/12 mx-auto shadow-lg'>
                <div className='w-3/6 flex flex-col py-32 gap-y-20'>
                   <div className='border-b-2 border-red-500'>
                    <h1 className='text-4xl font-extrabold text-emerald-500'>PROGRAMMOLOGY</h1>
                    <p className='font-extrabold'>An Excelence Coding Acedemy</p>
                   </div> 
                   <div className='border-b-2 border-red-500'>
                    <h1 className='text-4xl font-extrabold text-emerald-500'>Practical Guidence</h1>
                    <p className='font-extrabold'>Instruction Based Tasks</p>
                   </div> 
                   <div className='border-b-2 border-red-500'>
                    <h1 className='text-4xl font-extrabold text-emerald-500'>Industry Leading Technology</h1>
                    <p className='font-extrabold'>Placement Grunted</p>
                   </div> 
                </div>
                <div className=' w-3/6'></div>
            </section>

            <section className='courses-section w-11/12 my-16 mx-auto flex flex-wrap justify-between'>
               {
                courses.map(course => <Course key={course.id} course={course}/>)
               }
            </section>
        </div>
    )
}

export default Home;