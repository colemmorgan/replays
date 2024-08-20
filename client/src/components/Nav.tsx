import React from 'react';
import { Link } from 'react-router-dom';

type NavProps = {
    
};

const Nav:React.FC<NavProps> = () => {
    
    return (
        <nav className='flex gap-4 py-6 px-8'>
            <Link to={""}>Home</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
    )
}
export default Nav;