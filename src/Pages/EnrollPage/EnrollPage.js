import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EnrollPage = () => {
    const course = useLoaderData()
    console.log(course)

    return (
        <section className='enroll-section py-8'>
            <div className='course-header border-t rounded w-8/12 mx-auto'>
                <img className='w-11/12 mx-auto' src={course.image} alt="" />
            </div>
            <div className="course-body w-8/12 mx-auto">
                <h1 className='text-center w-11/12 mx-auto my-8 py-2 rounded text-3xl text-emerald-500 font-extrabold border-4 border-cyan-400'>{course.title}</h1>
                <p className='ml-4 text-3xl font-semibold'>{course.info}</p>
            </div>
            <div className='text-center my-5'><button className="btn btn-active bg-cyan-400">Donwnload Course</button></div>
        </section>
    )
}

export default EnrollPage;