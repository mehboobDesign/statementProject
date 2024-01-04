import React from 'react';
import DisplayData from './DisplayData';
import Search from './Search';
import Navbar from './Navbar';

const Home =() => {
  return (
    <>
        <Navbar/>
        <Search />
        <DisplayData/>
    </>
    
  )
}

export default Home