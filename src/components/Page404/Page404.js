import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='m-5'>
            <h2 className='mt-2 text-3xl font-semibold	text-gray-500'>404 page not found. Please go back to<Link  to='/'> <span className='text-blue-600 hover:text-lime-500'>Home.</span></Link></h2>
        </div>
    );
};

export default Page404;