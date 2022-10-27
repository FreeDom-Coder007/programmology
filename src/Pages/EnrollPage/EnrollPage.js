import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaPen,FaPlayCircle,FaQuestionCircle } from "react-icons/fa";

const EnrollPage = () => {
    const course = useLoaderData()
    console.log(course)

    return (
        <section className='enroll-section py-8'>
            <div className='course-header border-t rounded w-8/12 mx-auto'>
                <img className='w-11/12 mx-auto' src={course.image} alt="" />
            </div>
            <div className="course-body w-8/12 mx-auto pb-4 border-b-2 border-black">
                <h1 className='text-center w-11/12 mx-auto my-8 py-2 rounded text-3xl text-emerald-500 font-extrabold border-4 border-cyan-400'>{course.title}</h1>
                <p className='text-3xl font-semibold'>{course.info}</p>
            </div>
            <div className='w-8/12 flex flex-col mx-auto py-2'>
                <h1 className='text-2xl font-bold mb-4'>About Course</h1>
                <div className='flex items-center my-4 text-2xl font-semibold bg-gray-800 text-emerald-500 w-1/3 py-2 px-3 rounded-lg'><FaPlayCircle className='mr-2'/><span>80 class</span></div>
                <div className='flex items-center my-4 text-2xl font-semibold bg-gray-800 text-emerald-500 w-1/3 py-2 px-3 rounded-lg'><FaPen className='mr-2'/><span>50 Assignment</span></div>
                <div className='flex items-center my-4 text-2xl font-semibold bg-gray-800 text-emerald-500 w-1/3 py-2 px-3 rounded-lg'><FaQuestionCircle className='mr-2'/>500 quizes</div>
            </div>
            <div className='text-center my-5'>
              <button className='btn btn-glass'>Add to Cart</button>
            </div>
        </section>
    )
}

export default EnrollPage;