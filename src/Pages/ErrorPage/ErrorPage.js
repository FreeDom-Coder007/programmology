import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='error-section py-32'>
            <div className='w-4/6 h-4/5 mx-auto'>
                <h1 className='text-center text-4xl font-extrabold text-red-500'>404:  Page not found...</h1>
            </div>
            <div className='text-center mt-10'>
                <Link  className="btn btn-wide border-none  bg-orange-300" to='/'>Back To Home Page</Link>
            </div>
        </section>
    );
};

export default ErrorPage;