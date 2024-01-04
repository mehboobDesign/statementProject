import React from 'react';
import SelectLayout from '../layout/SelectLayout';
import Navbar from './Navbar';

const AddCase =() => {
  return (
    <>
    <Navbar/>
     <div className='pl-72 pr-72'>
        <h1 className='text-cyan-900 text-3xl pt-4 dark:text-cyan-500'>Add Case Here</h1>
        <SelectLayout/>
    </div>
    </>
   
  )
}

export default AddCase