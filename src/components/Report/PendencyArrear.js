import React, {useEffect, useState} from "react";
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import { BASE_URL } from "../Common/Arrays";
import PendencyPdfModal from "../PdfReport/PendencyPdfModal";

const OPENING_CIVIL_CASES = BASE_URL.concat('civilOpening/');
const OPENING_CRIMINAL_CASES = BASE_URL.concat('criminalOpening/');
const CIVIL_INSTITUTION = BASE_URL.concat('civilInstitution/');
const CRIMINAL_INSTITUTION = BASE_URL.concat('criminalInstitution/');
const CIVIL_DISPOSED = BASE_URL.concat('civilDisposed/transfer/');
const CRIMINAL_DISPOSED = BASE_URL.concat('criminalDisposed/transfer/');
const CIVIL_OLD_DISPOSED = BASE_URL.concat('civilOldDisposed/monthly/');
const CRIMINAL_OLD_DISPOSED = BASE_URL.concat('criminalOldDisposed/monthly/');
const CIVIL_OLD_PENDING = BASE_URL.concat('civilCases/oldPending/');
const CRIMINAL_OLD_PENDING = BASE_URL.concat('criminalCases/oldPending/');

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
    const [percentageCivil, setPercentageCivil] = useState(0);
    const [percentageCriminal, setPercentageCriminal] = useState(0);
    const [percentageTotal, setPercentageTotal] = useState(0);
    const [civilMonthlyOldDisposed, setCivilMonthlyOldDisposed] = useState(0);
    const [criminalMonthlyOldDisposed, setCriminalMonthlyOldDisposed] = useState(0);
    const [totalMonthlyOldDisposed, setTotalMonthlyOldDisposed] = useState(0);
    const [civilOldPending, setCivilOldPending] = useState(0);
    const [criminalOldPending, setCriminalOldPending] = useState(0);
    const [totalOldPending, setTotalOldPending] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);

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
                .then(function (response) { 
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
                .then(function (response) { 
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
        const getCivilOldDisposed = async () => {
            try {
                await axios.get(CIVIL_OLD_DISPOSED.concat(auth.nameOfCourt).concat('/')
                .concat(monthValue).concat('/').concat(year), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setCivilMonthlyOldDisposed(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCriminalOldDisposed = async () => {
            try {
                await axios.get(CRIMINAL_OLD_DISPOSED.concat(auth.nameOfCourt).concat('/')
                .concat(monthValue).concat('/').concat(year), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setCriminalMonthlyOldDisposed(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCivilOldPending = async () => {
            try {
                await axios.get(CIVIL_OLD_PENDING.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setCivilOldPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCriminalOldPending = async () => {
            try {
                await axios.get(CRIMINAL_OLD_PENDING.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setCriminalOldPending(response.data.length);
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
        getCivilOldDisposed();
        getCriminalOldDisposed();
        getCivilOldPending();
        getCriminalOldPending();
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
        const getInDePerCivil = () => {
            setPercentageCivil((((civilClosingBalance - totalCivilPending)/totalCivilPending)*100).toFixed(2))
        }
        const getInDePerCriminal = () => {
            setPercentageCriminal((((criminalClosingBalance - totalCriminalPending)/totalCriminalPending)*100).toFixed(2))
        }
        const getInDePerTotal = () => {
            setPercentageTotal((((closingBalance - totalPending)/totalPending)*100).toFixed(2))
        }
        const getTotalOldDisposed = () => {
            setTotalMonthlyOldDisposed(civilMonthlyOldDisposed + criminalMonthlyOldDisposed)
        }
        const getTotalOldPending = () => {
            setTotalOldPending(civilOldPending + criminalOldPending);
        }
        getTotalOpeningPending();
        getTotalInstitution();
        getTotalDisposed();
        getCivilClosingBalance();
        getCriminalClosingBalance();
        getClosingBalance();
        getInDePerCivil();
        getInDePerCriminal();
        getInDePerTotal();
        getTotalOldDisposed();
        getTotalOldPending()
    },[civilInstitution,criminalInstitution,civilDisposed,criminalDisposed, 
        civilClosingBalance,criminalClosingBalance, totalCivilPending, totalCriminalPending, closingBalance, 
        totalPending, civilMonthlyOldDisposed, criminalMonthlyOldDisposed, civilOldPending, criminalOldPending]);

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
                    <td>{percentageCivil}</td>
                    <td>{percentageCriminal}</td>
                    <td>{percentageTotal}</td>
                    <td>{civilMonthlyOldDisposed}</td>
                    <td>{criminalMonthlyOldDisposed}</td>
                    <td>{totalMonthlyOldDisposed}</td>
                    <td>{civilOldPending}</td>
                    <td>{criminalOldPending}</td>
                    <td>{totalOldPending}</td>
                </tr>
                
            </tbody>
        </table>
            <button onClick={()=>setModalOpen(true)} className="text-white border border-stone-400 mt-2 mb-6 p-2 hover:bg-stone-400">Generate Pendency Arrear PDF</button>
            {modalOpen && <PendencyPdfModal closeModal={()=>setModalOpen(false)} month={month} year={year} totalCivilPending={totalCivilPending}
            totalCriminalPending={totalCriminalPending} totalPending={totalPending} 
            civilInstitution={civilInstitution} criminalInstitution={criminalInstitution} 
            totalInstitution={totalInstitution} civilDisposed={civilDisposed} criminalDisposed={criminalDisposed}
            totalDisposed={totalDisposed} civilClosingBalance={civilClosingBalance} 
            criminalClosingBalance={criminalClosingBalance} closingBalance={closingBalance} percentageCivil={percentageCivil}
            percentageCriminal={percentageCriminal} percentageTotal={percentageTotal}
            civilMonthlyOldDisposed={civilMonthlyOldDisposed} criminalMonthlyOldDisposed={criminalMonthlyOldDisposed}
            totalMonthlyOldDisposed={totalMonthlyOldDisposed} civilOldPending={civilOldPending}
            criminalOldPending={criminalOldPending} totalOldPending={totalOldPending}/>}
        </>
    );
}

export default PendencyArrear;