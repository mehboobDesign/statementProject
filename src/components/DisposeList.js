import React from 'react';
//import axios from '../api/axios';
import axios from 'axios';
import useAuth from './hooks/useAuth';

const GET_URL = 'http://localhost:5050/api/v1/demo/demo-controller';





const DisposedList = () => {
  const { auth } = useAuth();

  // axios.interceptors.request.use(
  //   config => {
  //     config.headers.authorization = `Bearer ${auth.jwtToken}`;
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // )

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

  // const getData = async () => {
  //   try {
  //     const result = await axios.get(GET_URL);
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
   
  // }

  

  return (
    <div className='text-cyan-50'>
      <button onClick={getData}>Get</button>
    </div>
  )
}

export default DisposedList