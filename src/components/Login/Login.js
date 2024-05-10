import React, {useRef, useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { courtName } from '../Common/Arrays';
import SelectComponent from '../Common/SelectComponent';
import { faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    const [pwd,setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const [nameOfCourt, setNameOfCourt] = useState('Choose Court');
    const [validCourtName, setValidCourtName] = useState(false);
    const [courtNameFocus, setCourtNameFocus] = useState(false);

    useEffect(()=>{
        if(nameOfCourt === "Choose Court") {
            setCourtNameFocus(true);
            setValidCourtName(false);
        }
        else {
            setCourtNameFocus(false);
            setValidCourtName(true);
        }
    },[nameOfCourt]);

    useEffect(()=>{
        userRef.current.focus();
    },[]);
    
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd]);
    const handleSubmit = async (e) => {
        e.preventDefault();
              try {
                const response = await axios.post(LOGIN_URL,
                    {
                        email: user,
                        password: pwd
                    }
                );
                console.log(JSON.stringify(response?.data));
                //console.log(JSON.stringify(response));
                const jwtToken = response?.data?.token;
                setAuth({user, pwd, jwtToken, nameOfCourt});
                setUser('');
                setPwd('');
                navigate( from, { replace: true});

              } catch(err) {
                if(!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err?.response?.status === 403) {
                    setErrMsg('Bad Credientials');
                } else if(err?.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
                errorRef.current.focus();
              }
       
        
    }
    return(
        <div className="flex h-screen items-center justify-center">
        <form className="w-96 p-4" onSubmit={handleSubmit}>
        <p className={errMsg ? "text-red-500" : "hidden"} ref={errorRef} aria-live="assertive">{errMsg}</p>
            <h1 className="text-4xl font-bold dark:text-gray-400 text-orange-600">Login</h1>
            <div className="grid pt-2">
                <div className="mb-2">
                    <SelectComponent 
                    id="courtName" 
                    defaultValue = "Choose Court"
                    values={courtName} 
                    onChange={event => setNameOfCourt(event.target.value)}
                    ariaInvalid={validCourtName ? "false" : "true"}
                    ariaDescribedby="courtNameNote"
                    onFocus={()=>setCourtNameFocus(true)}
                    />
                        <p id="courtNameNote" className={courtNameFocus
                            ? "text-red-400" : "hidden"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                                Please select a court to further procced.
                        </p>
                </div>    
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
                <label htmlFor="password" className="mb-2">
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