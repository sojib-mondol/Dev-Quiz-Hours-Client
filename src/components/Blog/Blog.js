import React from 'react';

const Blog = () => {
    return (
        <div className='text-left mx-5 '>
            <div >
                <h2 className=' mt-2 text-3xl font-semibold	text-gray-500'>What is the perpose of react router?</h2>
                <p className='mt-1 text-base text-gray-600'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div >
                <h2 className=' mt-2 text-3xl font-semibold	text-gray-500'>How dies context API works?</h2>
                <p className='mt-1 text-base text-gray-600'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div >
                <h2 className=' mt-2 text-3xl font-semibold	text-gray-500'>What is useRef() hook?</h2>
                <p className='mt-1 text-base text-gray-600'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
            
        </div>
    );
};

export default Blog;