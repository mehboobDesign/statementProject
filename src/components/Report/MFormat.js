import React, {useState, useEffect} from "react";
import useAuth from "../hooks/useAuth";
import { BASE_URL } from "../Common/Arrays";
import axios from 'axios';
import MFormatPdfModal from "../PdfReport/MFormatPdfModal";

const CIVIL_PENDING = BASE_URL.concat('civilOpening/');
const CRIMINAL_PENDING = BASE_URL.concat('criminalOpening/');
const CIVIL_INSTITUTION = BASE_URL.concat('civilInstitution/');
const CRIMINAL_INSTITUTION = BASE_URL.concat('criminalInstitution/');
const CONTESTED_MAIN = BASE_URL.concat('contestedMain/');
const UNCONTESTED_MAIN = BASE_URL.concat('uncontestedMain/');
const CONTESTED_MISC = BASE_URL.concat('contestedMisc/');
const UNCONTESTED_MISC = BASE_URL.concat('uncontestedMisc/');


const MFormat = ({monthValue,month,year}) => {
    const { auth } = useAuth();
    const [civilBegining, setCivilBegining] = useState(0);
    const [criminalBegining, setCriminalBegining] = useState(0);
    const [totalBegining, setTotalBegining] = useState(0);
    const [civilIns, setCivilIns] = useState(0);
    const [criminalIns, setCriminalIns] = useState(0);
    const [totalIns, setTotalIns] = useState(0);
    const [mainCaseContested, setMainCaseContested] = useState(0);
    const [mainCaseUncontested, setMainCaseUncontested] = useState(0);
    const [miscCaseContested, setMiscCaseContested] = useState(0);
    const [miscCaseUncontested, setMiscCaseUncontested] = useState(0);
    const [totalPending, setTotalPending] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(()=> {
        const getCivilPendingList = async () => {
            try {
                await axios.get(CIVIL_PENDING
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCivilBegining(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCriminalPendingList = async () => {
            try {
                await axios.get(CRIMINAL_PENDING
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCriminalBegining(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCivilInsList = async () => {
            try {
                await axios.get(CIVIL_INSTITUTION
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCivilIns(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCriminalInsList = async () => {
            try {
                await axios.get(CRIMINAL_INSTITUTION
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCriminalIns(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getContestedMainCaseList = async () => {
            try {
                await axios.get(CONTESTED_MAIN
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setMainCaseContested(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getUncontestedMainCaseList = async () => {
            try {
                await axios.get(UNCONTESTED_MAIN
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setMainCaseUncontested(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getContestedMiscCaseList = async () => {
            try {
                await axios.get(CONTESTED_MISC
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setMiscCaseContested(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getUncontestedMiscCaseList = async () => {
            try {
                await axios.get(UNCONTESTED_MISC
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setMiscCaseUncontested(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        getCivilPendingList();
        getCriminalPendingList();
        getCivilInsList();
        getCriminalInsList();
        getContestedMainCaseList();
        getUncontestedMainCaseList();
        getContestedMiscCaseList();
        getUncontestedMiscCaseList();
    }, [auth.jwtToken,auth.nameOfCourt,monthValue,year]);

    useEffect(()=>{
        setTotalBegining(civilBegining + criminalBegining);
        setTotalIns(civilIns + criminalIns);
        setTotalPending((totalBegining + totalIns) - 
                (mainCaseContested + mainCaseUncontested + miscCaseContested + miscCaseUncontested))
    },[civilBegining,criminalBegining,civilIns,criminalIns,
        totalBegining,totalIns,mainCaseContested,mainCaseUncontested,miscCaseContested,miscCaseUncontested])


    return(
        <>
        <table className="text-stone-600 border border-cyan-50 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td colSpan="4">FORMAT M</td>
                    <td colSpan="18">INFORMATION REGARDING PENDENCY, INSTITUTION AND DISPOSAL OF CASES DURING THE MONTH</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td colSpan="12">MONTH: {month}, {year}, DISTRICT: GOALPARA</td>
                    <td colSpan="10">{auth.nameOfCourt}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td rowSpan = "3" className='border border-cyan-50'>Sl No.</td>
                    <td rowSpan = "3" className='border border-cyan-50'>Name of the Court/Presiding Officer</td>
                    <td rowSpan = "3" className='border border-cyan-50'>Total cases pending at the beginning of the month</td>
                    <td rowSpan = "3" className='border border-cyan-50'>Institution during the month</td>
                    <td colSpan = "8" className='border border-cyan-50'>Disposal during the month</td>
                    <td rowSpan = "3" className='border border-cyan-50'>Pending at the end of the month of {month}, {year}</td>
                    <td rowSpan = "3" className='border border-cyan-50'>Remarks</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td colSpan = "4" className='border border-cyan-50'>Main Case</td>
                    <td colSpan = "4" className='border border-cyan-50'>Misc Case</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td colSpan = "2" className='border border-cyan-50'>Contested</td>
                    <td colSpan = "2" className='border border-cyan-50'>Uncontested</td>
                    <td colSpan = "2" className='border border-cyan-50'>Contested</td>
                    <td colSpan = "2" className='border border-cyan-50'>Uncontested</td>
                </tr>
            </thead>
            <tbody>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>1</td>
                    <td>{auth.nameOfCourt}</td>
                    <td>{totalBegining}</td>
                    <td>{totalIns}</td>
                    <td colSpan={2}>{mainCaseContested}</td>
                    <td colSpan={2}>{mainCaseUncontested}</td>
                    <td colSpan={2}>{miscCaseContested}</td>
                    <td colSpan={2}>{miscCaseUncontested}</td>
                    <td>{totalPending}</td>
                    <td></td>
                </tr>  
            </tbody>
        </table>
        <button onClick={()=>setModalOpen(true)} className="text-stone-600 dark:text-stone-300 border border-stone-400 mt-2 mb-6 p-2 hover:bg-orange-400 hover:text-stone-50">Generate M Format PDF</button>
            {modalOpen && <MFormatPdfModal closeModal={()=>setModalOpen(false)} month={month} year={year} courtName = {auth.nameOfCourt} totalBegining={totalBegining}
            totalIns={totalIns} mainCaseContested={mainCaseContested} 
            mainCaseUncontested={mainCaseUncontested} miscCaseContested={miscCaseContested} 
            miscCaseUncontested={miscCaseUncontested} totalPending={totalPending} />}
        </>
    )

}

export default MFormat;