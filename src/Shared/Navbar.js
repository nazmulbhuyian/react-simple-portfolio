import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-slate-800 p-8'>
            <div className=' lg:flex lg:justify-center max-w-[1440px] mx-auto bg-slate-800'>
                <div>
                    <h1>Nazmul Bhuyian</h1>
                </div>
                <div>
                    <Link className='font-medium lg:mx-8 mx-2 hover:text-emerald-500' to='/'>Home</Link>
                    <Link className='font-medium lg:mx-8 mx-2 hover:text-emerald-500' to='/about'>About Me</Link>
                    <Link to='/project' className='font-medium lg:mx-8 mx-2 hover:text-emerald-500'>Project</Link>
                    <Link to='/blog' className='font-medium lg:mx-8 mx-2 hover:text-emerald-500'>Blog</Link>
                    <Link to='/contract' className='font-medium hover:text-emerald-500 lg:mx-8 mx-2'>Contract</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;