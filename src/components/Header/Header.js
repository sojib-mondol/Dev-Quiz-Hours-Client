import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='rounded md:flex text-left justify-between my-4 '>
            <div >
                <h2 className='ml-5  text-3xl font-semibold	text-teal-500'>Dev-Quiz Hours</h2>
            </div>
            <div className='font-semibold ml-4  pl-1 	text-teal-600	text-lg	'>
                <Link className='mr-5 hover:text-sky-700' to='/'>Topic</Link>
                <Link className='mr-5 hover:text-sky-700' to='/statistics'>Statistics</Link>
                <Link className='mr-5 hover:text-sky-700' to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;