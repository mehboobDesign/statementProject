import React, {useRef, useState, useEffect} from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const API_BASE_REGISTER_URL = 'http://localhost:5050/api/v1/auth/register';



const Register = () => {
    const userRef = useRef();
    const errorRef = useRef();

    const [firstname, setFirstname] = useState('');
    const [validfirstname, setValidfirstname] = useState(false);
    const [firstnameFocus, setFirstnameFocus] = useState(false);

    const [lastname, setLastname] = useState('');
    const [validlastname, setValidlastname] = useState(false);
    const [lastnameFocus, setLastnameFocus] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd,setPwd] = useState();
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState();
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/login'; 

    useEffect(()=>{
        userRef.current.focus();
    },[]);
    useEffect(()=>{
        const result = USER_REGEX.test(firstname);
        console.log(result);
        console.log(firstname);
        setValidfirstname(result);
    },[firstname]);
    useEffect(()=>{
        const result = USER_REGEX.test(lastname);
        setValidlastname(result);
    }, [lastname]);
    useEffect(()=>{
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    },[email]);
    useEffect(()=>{
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        console.log(match);
        setValidMatch(match);
    },[pwd, matchPwd]);
    useEffect(()=>{
        setErrMsg('');
    },[firstname,lastname,email,pwd,matchPwd]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(firstname);
        const v2 = USER_REGEX.test(lastname);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PWD_REGEX.test(pwd)
        if(!v1 || !v2 || !v3 || !v4) {
            setErrMsg("Invalid Entry");
            return;
        }
        axios.post(API_BASE_REGISTER_URL, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: pwd
          })
          .then(function (response) {
            console.log(response);
            setSuccess(true);
            navigate( from, { replace: true});
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return(
        <section className="flex h-screen items-center justify-center">
            <p ref={errorRef} className={errMsg ? "text-red-400" : "text-white"} aria-live="assertive">{errMsg}</p>
           
            <form className="w-96 p-4" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold dark:text-gray-400 text-orange-600 ">Register</h1>
                <div className="grid pt-2">
                    <label htmlFor="firstname" className="mb-2">
                        <span className="dark:text-gray-400 text-stone-700">First Name:</span>
                        <span className={validfirstname ? "text-green-400" : "hidden"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validfirstname || !firstname ? "hidden" : "text-red-400"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-gray-400 focus:outline-none"
                        type="text"
                        id="firstname"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e)=>setFirstname(e.target.value)}
                        required
                        aria-invalid={validfirstname ? "false" : "true"}
                        aria-describedby="firstnamenote"
                        onFocus={()=>setFirstnameFocus(true)}
                        onBlur={()=>setFirstnameFocus(false)}
                    />
                    <p id="firstnamenote" className={firstnameFocus && firstname && !validfirstname
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters. 
                            Must begin with a letter. 
                            Letters, numbers, underscores, hyphens allowed.
                    </p>
                 </div>
                 <div className="grid mt-2">
                    <label htmlFor="lastname" className="mb-2">
                        <span className="dark:text-gray-400 text-stone-700">Last Name:</span>
                        <span className={validlastname ? "text-green-400" : "hidden"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validlastname || !lastname ? "hidden" : "text-red-400"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-gray-400 focus:outline-none"
                        type="text"
                        id="lastname"
                        autoComplete="off"
                        onChange={(e)=>setLastname(e.target.value)}
                        required
                        aria-invalid={validlastname ? "false" : "true"}
                        aria-describedby="lastnamenote"
                        onFocus={()=>setLastnameFocus(true)}
                        onBlur={()=>setLastnameFocus(false)}
                    />
                    <p id="lastnamenote" className={lastnameFocus && lastname && !validlastname
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters. 
                            Must begin with a letter. 
                            Letters, numbers, underscores, hyphens allowed.
                    </p>
                 </div>
                 <div className="grid mt-2">
                    <label htmlFor="email" className="mb-2">
                        <span className="dark:text-gray-400 text-stone-700">Email(Username):</span>
                        <span className={validEmail ? "text-green-400" : "hidden"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validEmail || !email ? "hidden" : "text-red-400"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-gray-400 focus:outline-none"
                        type="text"
                        id="email"
                        autoComplete="off"
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailnote"
                        onFocus={()=>setEmailFocus(true)}
                        onBlur={()=>setEmailFocus(false)}
                    />
                    <p id="lastnamenote" className={emailFocus && email && !validEmail
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            must be a valid email(eg:xxxx@xx.com)
                    </p>
                 </div>
                 <div className="grid mt-2">
                 <label htmlFor="password" className="mb-2">
                    <span className="dark:text-gray-400 text-stone-700">Password:</span>
                    <span className={validPwd ? "text-green-400" : "hidden"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPwd || !pwd ? "hidden" : "text-red-400"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                 </label>
                 <input
                    className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-gray-400 focus:outline-none"
                    type="password"
                    id="password"
                    onChange={(e)=> setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={()=>setPwdFocus(true)}
                    onBlur={()=>setPwdFocus(false)}
                 />
                 <p id="pwdnote" className={pwdFocus && !validPwd ? "text-red-400" : "hidden"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters. 
                    Must include uppercase and lowercase letters, a number and a special character.
                    Allowed special characters: <span aria-label="exclamation mark">!</span> 
                    <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                 </p>
                 </div>
                 <div className="grid mt-2">
                    <label htmlFor="confirm_pwd" className="mb-2">
                        <span className="dark:text-gray-400 text-stone-700">Confirm Password:</span>
                        <span className={validMatch && matchPwd ? "text-green-400" : "hidden"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validMatch || !matchPwd ? "invisible" : "text-red-400"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-gray-400 focus:outline-none"
                        type="password"
                        id="confirm_pwd"
                        onChange={(e)=> setMatchPwd(e.target.value)}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={()=>setMatchFocus(true)}
                        onBlur={()=>setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                    </p>
                </div>
                 <div className="grid mt-4">
                    <button className="border bg-white text-stone-700 hover:bg-amber-500 hover:border-amber-500 rounded-lg p-2 disabled:cursor-not-allowed" disabled={!validfirstname || !validPwd || !validMatch ? true : false}>Sign Up</button>
                 </div>
                 <p className="text-white">Already registered! <Link to="/">Click here</Link></p>
            </form>
        </section>
        
    );
}

export default Register;