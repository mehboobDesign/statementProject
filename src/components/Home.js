import React from 'react';
import DisplayData from './DisplayData';
import Search from './Search';

import axios from 'axios';
import useAuth from './hooks/useAuth';

const GET_URL = 'http://localhost:5050/api/v1/controller/test';


const Home =() => {

  const { auth } = useAuth();

  const getData = async () => {
    await axios.get(GET_URL, {
      headers: {
       
        Authorization : `Bearer ${auth.jwtToken}`
      }
    }   
    )
    .then(function (response) {
      console.log(response);
    })
  }
  
  return (
    <>
        <Search />
        <button onClick={getData}>Get</button>
        <DisplayData/>
    </>
    
  )
}

export default Home