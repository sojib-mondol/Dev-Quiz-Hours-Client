import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <dvi>
                <h2>Dev-Quiz Hours</h2>
            </dvi>
            <div>
                <Link to='/'>Topic</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;