import React from 'react';

const Faq = () => {
    return (
        <div className='faq-section w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold'>This Application Fetaures</h1>
            <ol className='my-7'>
                <li className='text-2xl font-bold'>1. User Can SignIn or Login with Email,Google,facebook,Github</li>
                <li className='text-2xl font-bold'>2. User Can log out</li>
                <li className='text-2xl font-bold'>3. User Can't go in course enrollment page without authentication</li>
                <li className='text-2xl font-bold'>4. This application has question answer page</li>
            </ol>
        </div>
    );
};

export default Faq;