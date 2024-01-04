import React from 'react';
//import { Link } from 'react-router-dom';


const Navigationbar = () => {
    return(
        <>
        <nav className='w-full h-14 bg-slate-900 text-cyan-50 flex justify-between px-4 items-center sticky top-0 z-20'>
          <div className="text-2xl font-bold">Easy Data</div>
          <ul className='md:flex font-normal'>
            <li className='m-[10px] cursor-pointer px-2 py-2 hover:bg-slate-600'>Dispose Case</li>
            <li className='m-[10px] cursor-pointer px-2 py-2 hover:bg-slate-600'>Pending Case</li>
            <li className='m-[10px] cursor-pointer px-2 py-2 hover:bg-slate-600'>Generate Report</li>
          </ul>
         
          <div className='hidden md:block px-2 py-2'>Welcome Mr. M. Alam</div>
          <div className='md:hidden cursor-pointer'>
            <span className='text-4xl'>&#8801;</span>
          </div>
        </nav>
        </>
    );
}

export default Navigationbar;