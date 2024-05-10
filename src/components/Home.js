import React from 'react';
import DisplayData from './DisplayData';
import useAuth from './hooks/useAuth';

const Home =() => {

  const { auth } = useAuth();
  console.log(auth.nameOfCourt);
  
  return (
    <>
        <DisplayData/>
    </>
    
  )
}

export default Home