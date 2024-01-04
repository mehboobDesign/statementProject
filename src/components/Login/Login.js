import React, {useRef, useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from '../../api/axios';
import useAuth from "../hooks/useAuth";

// const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LOGIN_URL = '/api/v1/auth/authenticate';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/'; 


    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [pwd,setPwd] = useState();
    const [errMsg, setErrMsg] = useState('');

    useEffect(()=>{
        userRef.current.focus();
    },[]);
    
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
            // const v1 = EMAIL_REGEX.test(user);
            // const v2 = PWD_REGEX.test(pwd);

            // console.log(v1); console.log(v2);

            // if(!v1 || !v2) {
            //     setErrMsg("Invalid Entry");
            //     return;
            // }

            axios.post(LOGIN_URL, {
                email: user,
                password: pwd
              })
              .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem('item',response.data.token);
                setUser('');
                setPwd('');
                //setSuccess(true);
              })
              .catch(function (error) {
                console.log(error);
              });

            //   try {
            //     const response = await axios.post(LOGIN_URL,
            //         {
            //             email: user,
            //             password: pwd
            //         }
            //     );
            //     console.log(JSON.stringify(response?.data));
            //     //console.log(JSON.stringify(response));
            //     const jwtToken = response?.data?.token;
            //     setAuth({user, pwd, jwtToken});
            //     setUser('');
            //     setPwd('');
            //     navigate( from, { replace: true});

            //   } catch(err) {
            //     if(!err?.response) {
            //         setErrMsg('No Server Response');
            //     } else if (err?.response?.status === 403) {
            //         setErrMsg('Bad Credientials');
            //     } else if(err?.response?.status === 401) {
            //         setErrMsg('Unauthorized');
            //     } else {
            //         setErrMsg('Login Failed');
            //     }
            //     errorRef.current.focus();
            //   }
       
        
    }
    return(
        
       
        <div className="flex h-screen items-center justify-center">
        <form className="w-96 p-4" onSubmit={handleSubmit}>
        <p className={errMsg ? "text-red-500" : "hidden"} ref={errorRef} aria-live="assertive">{errMsg}</p>
            <h1 className="text-4xl font-bold dark:text-gray-400 text-orange-600">Login</h1>
            <div className="grid pt-2">
                <label htmlFor="username" className="mb-2">
                    <span className="dark:text-gray-400 text-stone-700">Username:</span>
                </label>
                <input
                    className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-gray-400 focus:outline-none"
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e)=>setUser(e.target.value)}
                    value={user}
                    required
                />
            </div>
            <div className="grid pt-2">
                <label htmlFor="username" className="mb-2">
                    <span className="dark:text-gray-400 text-stone-700">Password:</span>
                </label>
                <input
                    className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-gray-400 focus:outline-none"
                    type="password"
                    id="password"
                    onChange={(e)=> setPwd(e.target.value)}
                    value={pwd}
                    required
                />
            </div>
            <div className="grid mt-4">
                <button className="border bg-white text-stone-700 hover:bg-amber-500 hover:border-amber-500 rounded-lg p-2 disabled:cursor-not-allowed">Sign In</button>
            </div>
            <p className="mt-2 text-white">Not registered yet!, <Link to="/register" className="text-lime-500">Click here</Link> to register.</p>
        </form>
    </div>  
        
       
    );
}

export default Login;