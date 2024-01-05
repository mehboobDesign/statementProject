import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [toogle, setToogle] = useState(false);
    const openMenu = () => {
        setToogle(true);
    };
    const closeMenu = () => {
        setToogle(false);
    };
    const logout = () => {
      localStorage.clear();
      setToogle(false);
    }
    return(
        <>
        <nav className='w-full h-14 bg-slate-900 flex justify-between items-center sticky top-0 z-20 pt-8 pb-8 border-b-[0.1px] border-slate-800'>
          <div className="text-2xl font-bold px-4 text-lime-300">
          <Link to='/'>Easy Data</Link>
          </div>
          
          {toogle && <ul className='font-normal bg-slate-800 text-cyan-50 absolute top-16 right-0 w-60 flex flex-col items-start rounded-lg p-2 border-[0.1px] border-slate-800'>
            <li className='flex w-full justify-between'>
            <Link onClick={closeMenu} className='flex w-full justify-between hover:text-lime-300 hover:bg-slate-900 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-lime-300 border-l-4 p-4' to='disposedList'>Dispose Case</Link>
            </li>
            <li className='flex w-full justify-between'>
            <Link onClick={closeMenu} className='flex w-full justify-between hover:text-lime-300 hover:bg-slate-900 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-lime-300 border-l-4 p-4' to='pendingList'>Pending Case</Link>
            </li>
            <li className='flex w-full justify-between'>
            <Link onClick={closeMenu} className='flex w-full justify-between hover:text-lime-300 hover:bg-slate-900 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-lime-300 border-l-4 p-4' to='report'>Generate Report</Link>
            </li>
            <li className='flex w-full justify-between'>
            <Link onClick={closeMenu} className='flex w-full justify-between hover:text-lime-300 hover:bg-slate-900 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-lime-300 border-l-4 p-4' to='addCase'>Add Case</Link>
            </li>
            <li className='flex w-full justify-between'>
            <Link onClick={logout} className='flex w-full justify-between hover:text-lime-300 hover:bg-slate-900 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-lime-300 border-l-4 p-4' to='/'>Logout</Link>
            </li>
          </ul>}
         
         
          
          {/* <div className='hidden md:block px-2 py-2'>Welcome Mr. M. Alam</div> */}
          <div className='flex items-center justify-center rounded-full w-12 h-12 bg-slate-800 hover:bg-slate-700 mr-4'>
            {!toogle && <div onClick={openMenu}><FontAwesomeIcon className='text-lime-300 cursor-pointer' icon={faBars} size="lg" /></div>}
            {toogle && <div onClick={closeMenu}><FontAwesomeIcon className='text-lime-300 cursor-pointer' icon={faXmark} size="lg" /></div>}
          </div>
        </nav>
        </>
    );
}

export default Navbar;