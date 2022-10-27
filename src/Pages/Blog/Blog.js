import React from 'react';

const Blog = () => {
    return (
        <section className='blog-section'>
           <div className='w-11/12 mx-auto'>
             <h1 className='text-5xl my-7 text-blue-500 font-extrabold'>Frequently Asked Questions</h1>

             <div className='border divide-slate-200 px-4'>
              <h1 className='underline text-3xl font-bold text-rose-600 mt-5 mb-2'>What is cors?</h1>
              <p className='text-blue-500 font-semibold text-lg py-8'>
                corse (cross-origin resourse sharing) is machanism <br/>
                that allowed restricted resourses on the web Pages. <br/>
                to be requested from another domain outside the domain<br/>
                from which the first resource was served.<br/>
                A web page may freely embed cross-origin images, stylesheets,<br/>
                scripts, iframes, and videos
              </p>
             </div>
             <div className='border divide-slate-200 px-4'>
              <h1 className='underline text-3xl font-bold text-rose-600 mt-5 mb-2'>Why use firebase? What other options have to implement authentication?</h1>
              <p className='text-blue-500 font-semibold text-lg py-8'>
               Firebase Authentication provides backend services, <br/> 
               easy-to-use software development kit, and ready-made UI libraries to authenticate users to your app.<br/> 
               It supports authentication using passwords, phone numbers, <br/>
               popular federated identity providers like Google, Facebook and Twitter, and many more.
              </p>
             </div>
             <div className='border divide-slate-200 px-4'>
              <h1 className='underline text-3xl font-bold text-rose-600 mt-5 mb-2'>How does the private route work?</h1>
              <p className='text-blue-500 font-semibold text-lg py-8'>
               The private route component is similar to the public route,<br/> 
               the only change is that<br/>
               (redirect URL and authenticate condition.)<br/> 
               If the user is not available, he will be redirected to the login page<br/>
               and the user can only access the authenticated routes If he is authenticated (Logged in).
              </p>
             </div>
             <div className='border divide-slate-200 px-4'>
              <h1 className='underline text-3xl font-bold text-rose-600 mt-5 mb-2'><span className='mr-2'>What is Node?</span> How does Node work?</h1>
              <p className='text-blue-500 font-semibold text-lg py-8'>
                Node.js is an open-source, cross-platform, <br/>
                back-end JavaScript runtime environment that runs <br/>
                on a JavaScript Engine and executes JavaScript code <br/> 
                outside a web browser, <br/>
                It is a used as backend service <br/>
                where javascript works on the server-side <br/>
                of the application. <br/>
                This way javascript is used on both frontend and backend.<br/> 
                Node. js runs on chrome v8 engine <br/>
                which converts javascript code into machine code,
              </p>
             </div>
           </div> 
        </section>
    )
}

export default Blog;