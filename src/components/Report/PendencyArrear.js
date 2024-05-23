import React, {useEffect, useState} from "react";
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import { BASE_URL } from "../Common/Arrays";

const OPENING_CIVIL_CASES = BASE_URL.concat('civilOpeningBalance/');
const OPENING_CRIMINAL_CASES = BASE_URL.concat('criminalOpeningBalance/');
const CIVIL_INSTITUTION = BASE_URL.concat('civilInstitution/');
const CRIMINAL_INSTITUTION = BASE_URL.concat('criminalInstitution/');
const CIVIL_DISPOSED = BASE_URL.concat('civilDisposed/transfer/');
const CRIMINAL_DISPOSED = BASE_URL.concat('criminalDisposed/transfer/');

const PendencyArrear = ({monthValue,month,year}) => { 
    const { auth } = useAuth();
    const [totalCivilPending, setTotalCivilPending] = useState(0);
    const [totalCriminalPending, setTotalCriminalPending] = useState(0);
    const [totalPending, setTotalPending] = useState(0);
    const [civilInstitution, setCivilInstitution] = useState(0);
    const [criminalInstitution, setCriminalInstitution] = useState(0);
    const [totalInstitution, setTotalInstitution] = useState(0);
    const [civilDisposed, setCivilDisposed] = useState(0);
    const [criminalDisposed, setCriminalDisposed] = useState(0);
    const [totalDisposed, setTotalDisposed] = useState(0);
    const [civilClosingBalance, setCivilClosingBalance] = useState(0);
    const [criminalClosingBalance, setCriminalClosingBalance] = useState(0);
    const [closingBalance, setClosingBalance] = useState(0);

    useEffect(()=>{
        const getCivilPendingList = async () => {
            try {
                await axios.get(OPENING_CIVIL_CASES
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { console.log(response);
                    setTotalCivilPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCriminalPendingList = async () => {
            try {
                await axios.get(OPENING_CRIMINAL_CASES
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { console.log(response);
                    setTotalCriminalPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCivilInstitution = async () => {
            try { 
                await axios.get(CIVIL_INSTITUTION.concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                            headers: {
                                Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                    )
                    .then(function (response) {
                    setCivilInstitution(response.data.length);
                    })
                } catch(err) {
                    console.log(err);
            }
        };
        const getCriminalInstitution = async () => {
            try { 
                await axios.get(CRIMINAL_INSTITUTION.concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                            headers: {
                                Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                    )
                    .then(function (response) {
                    setCriminalInstitution(response.data);
                    })
                } catch(err) {
                    console.log(err);
            }
        };
        const getCivilDisposed = async () => {
            try { 
                await axios.get(CIVIL_DISPOSED.concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                            headers: {
                                Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                    )
                    .then(function (response) {
                    setCivilDisposed(response.data.length);
                    })
                } catch(err) {
                    console.log(err);
            }
        };
        const getCriminalDisposed = async () => {
            try { 
                await axios.get(CRIMINAL_DISPOSED.concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                            headers: {
                                Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                    )
                    .then(function (response) {
                    setCriminalDisposed(response.data.length);
                    })
                } catch(err) {
                    console.log(err);
            }
        };
        getCivilPendingList();
        getCriminalPendingList();
        getCivilInstitution();
        getCriminalInstitution();
        getCivilDisposed();
        getCriminalDisposed();
    },[auth.jwtToken,auth.nameOfCourt,monthValue,year]);

    useEffect(()=>{
        const getTotalOpeningPending = () => {
            setTotalPending(totalCivilPending + totalCriminalPending)
        }
        const getTotalInstitution =() => {
            setTotalInstitution(civilInstitution + criminalInstitution)
        };
        const getTotalDisposed =() => {
            setTotalDisposed(civilDisposed + criminalDisposed)
        }; 
        const getCivilClosingBalance = () => {
            setCivilClosingBalance((totalCivilPending + civilInstitution) - civilDisposed)
        };
        const getCriminalClosingBalance = () => {
            setCriminalClosingBalance((totalCriminalPending + criminalInstitution) - criminalDisposed)
        };
        const getClosingBalance = () => {
            setClosingBalance(civilClosingBalance + criminalClosingBalance)
        };
        getTotalOpeningPending();
        getTotalInstitution();
        getTotalDisposed();
        getCivilClosingBalance();
        getCriminalClosingBalance();
        getClosingBalance();
    },[civilInstitution,criminalInstitution,civilDisposed,criminalDisposed, 
        civilClosingBalance,criminalClosingBalance, totalCivilPending, totalCriminalPending]);

    return(
        <>
        <table className="text-stone-600 border border-cyan-50 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td colSpan="12">Pendency Arrear for the Month of {month}, {year}</td>
                    <td colSpan="10">{auth.nameOfCourt}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td colSpan = "3" className='border border-cyan-50'>Opening Balance</td>
                    <td colSpan = "3" className='border border-cyan-50'>Institution during the month of {month}, {year}</td>
                    <td colSpan = "3" className='border border-cyan-50'>Disposal during the month of {month}, {year}</td>
                    <td colSpan = "3" className='border border-cyan-50'>Closing Balance at the end of the Month of {month}, {year}</td>
                    <td colSpan = "3" className='border border-cyan-50'>% increase or decrease in pendency vis-a-vis previuos month ( + denotes increase) ( - denotes decrease)</td>
                    <td colSpan = "3" className='border border-cyan-50'> Disposed of cases which are more than 5 year old</td>
                    <td colSpan = "3" className='border border-cyan-50'> Pendency of case which are more than 5 years old at the end of the month of {month}, {year}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Total</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Total</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Total</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Total</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Total</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Total</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Total</td>
                </tr>
            </thead>
            <tbody>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>{totalCivilPending}</td>
                    <td>{totalCriminalPending}</td>
                    <td>{totalPending}</td>
                    <td>{civilInstitution}</td>
                    <td>{criminalInstitution}</td>
                    <td>{totalInstitution}</td>
                    <td>{civilDisposed}</td>
                    <td>{criminalDisposed}</td>
                    <td>{totalDisposed}</td>
                    <td>{civilClosingBalance}</td>
                    <td>{criminalClosingBalance}</td>
                    <td>{closingBalance}</td>
                </tr>
                
            </tbody>
        </table>
        </>
    );
}

export default PendencyArrear;