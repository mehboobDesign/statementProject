import React, {useState, useEffect} from "react";
import useAuth from "../hooks/useAuth";
import { BASE_URL } from "../Common/Arrays";
import axios from 'axios';
import ZFormatPdfModal from "../PdfReport/ZFormatPdfModal";

const MONTHLY_OPENING_BALANCE_OLD_PENDING = BASE_URL.concat('monthlyOpeningBalanceOfOldPending/');
const MONTHLY_ADDITION_OLD_PENDING = BASE_URL.concat('monthlyAdditionOfOldPending/');
const MONTHLY_TRANSFER_OLD_PENDING = BASE_URL.concat('monthlyTransferOfOldPending/');
const CIVIL_OLD_MONTHLY_DISPOSED = BASE_URL.concat('civilOldDisposed/monthly/');
const CRIMINAL_OLD_MONTHLY_DISPOSED = BASE_URL.concat('criminalOldDisposed/monthly/');
const CIVIL_OLD_PENDING = BASE_URL.concat('civilCases/oldPending/');
const CRIMINAL_OLD_PENDING = BASE_URL.concat('criminalCases/oldPending/');

const ZFormat = ({monthValue,month,year}) => { 

    const { auth } = useAuth();
    const [openingOldPending, setOpeningOldPending] = useState(0);
    const [additionOldPending, setAdditionOldPending] = useState(0);
    const [transferOldPending, setTransferOldPending] = useState(0);
    const [civilOldMonthlyDisposed, setCivilOldMonthlyDisposed] = useState(0);
    const [criminalOldMonthlyDisposed, setCriminalOldMonthlyDisposed] = useState(0);
    const [oldMonthlyDisposed, setOldMonthlyDisposed] = useState(0);
    const [civilOldPending, setCivilOldPending] = useState(0);
    const [criminalOldPending, setCriminalOldPending] = useState(0);
    const [oldPending, setOldPending] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
   

    useEffect(()=>{
        const getOpeningOldPending = async () => {
            try {
                await axios.get(MONTHLY_OPENING_BALANCE_OLD_PENDING
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year-5), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setOpeningOldPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getAdditionOldPending = async () => {
            try {
                await axios.get(MONTHLY_ADDITION_OLD_PENDING
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setAdditionOldPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTransferOldPending = async () => {
            try {
                await axios.get(MONTHLY_TRANSFER_OLD_PENDING
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setTransferOldPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCivilOldMonthlyDisposed = async () => {
            try {
                await axios.get(CIVIL_OLD_MONTHLY_DISPOSED
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCivilOldMonthlyDisposed(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCriminalOldMonthlyDisposed = async () => {
            try {
                await axios.get(CRIMINAL_OLD_MONTHLY_DISPOSED
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCriminalOldMonthlyDisposed(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCivilOldPending = async () => {
            try {
                await axios.get(CIVIL_OLD_PENDING
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCivilOldPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCriminalOldPending = async () => {
            try {
                await axios.get(CRIMINAL_OLD_PENDING
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCriminalOldPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        getOpeningOldPending();
        getAdditionOldPending();
        getTransferOldPending();
        getCivilOldMonthlyDisposed();
        getCriminalOldMonthlyDisposed();
        getCivilOldPending();
        getCriminalOldPending();
    },[auth.jwtToken,auth.nameOfCourt,monthValue,year]);

    useEffect(()=>{
        setOldMonthlyDisposed(civilOldMonthlyDisposed+criminalOldMonthlyDisposed);
    },[civilOldMonthlyDisposed,criminalOldMonthlyDisposed]);

    useEffect(()=>{
        setOldPending(civilOldPending+criminalOldPending);
    },[civilOldPending,criminalOldPending]);
    
    return(
        <>
        <table className="text-stone-600 border border-cyan-50 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="7">FORMAT Z</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="7">DISTRICT-WISE & COURT-WISE MONTHLY REPORT IN COMPLIANCE WITH ORDER 
                    NO. 24 DATED 24-04-2013 FOR DISPOSAL OF 5 YEARS OR MORE OLD PENDING CASES</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="4">DISTRICT: GOALPARA</td>
                    <td colSpan="4">MONTH: {month}, {year}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>Sl No</td>
                    <td>Court Name</td>
                    <td>Pendency of 5 years or more old cases at beginning of the month</td>
                    <td>Addition of 5 years or more old cases during the month of {month}, {year}</td>
                    <td>Transferred out during the month (if any)</td>
                    <td>Disposal of 5 years or more old cases during the month</td>
                    <td>Pendency at the end of the month of {month}, {year}</td>
                </tr>
            </thead>
            <tbody>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>1</td>
                    <td>{auth.nameOfCourt}</td>
                    <td>{openingOldPending}</td>
                    <td>{additionOldPending}</td>
                    <td>{transferOldPending}</td>
                    <td>{oldMonthlyDisposed}</td>
                    <td>{oldPending}</td>
                </tr>
            </tbody>
        </table>
        <button onClick={()=>setModalOpen(true)} className="text-stone-600 dark:text-stone-300 border border-stone-400 mt-2 mb-6 p-2 hover:bg-orange-400 hover:text-stone-50">Generate PDF</button>
            {modalOpen && <ZFormatPdfModal closeModal={()=>setModalOpen(false)} month={month} year={year} courtName = {auth.nameOfCourt}
            openingOldPending={openingOldPending} additionOldPending={additionOldPending} transferOldPending={transferOldPending}
            oldMonthlyDisposed={oldMonthlyDisposed} oldPending={oldPending}/>}
        </>
    )

}

export default ZFormat;