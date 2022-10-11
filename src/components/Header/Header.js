import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' flex justify-between my-4 flex-col'>
            <dvi >
                <h2 className='ml-5 text-3xl font-semibold	text-teal-500	'>Dev-Quiz Hours</h2>
            </dvi>
            <div className='font-semibold ml-4	text-lg	'>
                <Link className='mr-5' to='/'>Topic</Link>
                <Link className='mr-5' to='/statistics'>Statistics</Link>
                <Link className='mr-5' to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;