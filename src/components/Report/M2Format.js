import React, {useState, useEffect} from "react";
import useAuth from "../hooks/useAuth";
import { BASE_URL } from "../Common/Arrays";
import axios from 'axios';
import M2FormatPdfModal from "../PdfReport/M2FormatPdfModal";

const CRIME_WOMEN_BALANCE = BASE_URL.concat('criminalCases/monthlyOpeningCrimeWomen/');
const CRIME_WOMEN_INSTITUTION = BASE_URL.concat('criminalCases/monthlyInstitutionCrimeWomen/');
const CRIME_WOMEN_DISPOSED = BASE_URL.concat('criminalCases/monthlyDisposedCrimeWomen/');
const RAPE_OPENING_BALANCE = BASE_URL.concat('criminalCases/monthlyPendingRape/');
const RAPE_INSTITUTION = BASE_URL.concat('criminalCases/monthlyInstitutionRape/');
const RAPE_DISPOSED = BASE_URL.concat('criminalCases/monthlyDisposedRape/');
const SPL_POCSO_BALANCE = BASE_URL.concat('criminalCases/monthlyOpeningSplPOCSO/');
const SPL_POCSO_INSTITUTION = BASE_URL.concat('criminalCases/monthlyInstitutionSplPOCSO/');
const SPL_POCSO_DISPOSED = BASE_URL.concat('criminalCases/monthlyDisposedSplPOCSO/');

const M2Format = ({monthValue,month,year}) => {

    const { auth } = useAuth();
    const [openingWomenCrime, setOpeningWomenCrime] = useState(0);
    const [insCrimeWomen, setInsCrimeWomen] = useState(0);
    const [disposedCrimeWomen, setDisposedCrimeWomen] = useState(0);
    const [crimeWomenPending, setCrimeWomenPending] = useState(0);
    const [openingRape, setOpeningRape] = useState(0);
    const [institutionRape, setInstitutionRape] = useState(0);
    const [disposedRape, setDisposedRape] = useState(0);
    const [rapePending, setRapePending] = useState(0);
    const [splPOCSOBalance, setSplPOCSOBalance] = useState(0);
    const [insSplPocso, setInsSplPocso] = useState(0);
    const [disposedSplP, setDisposedSplP] = useState(0);
    const [splPCasesPending, setSplPCasesPending] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(()=>{
        const getOpeningWomenCrimeList = async () => {
            try {
                await axios.get(CRIME_WOMEN_BALANCE
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setOpeningWomenCrime(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getInstitutionWomenCrimeList = async () => {
            try {
                await axios.get(CRIME_WOMEN_INSTITUTION
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setInsCrimeWomen(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getDisposedWomenCrimeList = async () => {
            try {
                await axios.get(CRIME_WOMEN_DISPOSED
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setDisposedCrimeWomen(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getOpeningRapeCasesList = async () => {
            try {
                await axios.get(RAPE_OPENING_BALANCE
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setOpeningRape(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getInstituteRapeCasesList = async () => {
            try {
                await axios.get(RAPE_INSTITUTION
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setInstitutionRape(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getDisposedRapeCasesList = async () => {
            try {
                await axios.get(RAPE_DISPOSED
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setDisposedRape(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
       
        const getSplPOCSOBalanceList = async () => {
            try {
                await axios.get(SPL_POCSO_BALANCE
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setSplPOCSOBalance(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getSplPOCSOInstitutionList = async () => {
            try {
                await axios.get(SPL_POCSO_INSTITUTION
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setInsSplPocso(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getSplPOCSODisposedList = async () => {
            try {
                await axios.get(SPL_POCSO_DISPOSED
                    .concat(auth.nameOfCourt).concat('/').concat(monthValue).concat('/').concat(year), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setDisposedSplP(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        getOpeningWomenCrimeList();
        getInstitutionWomenCrimeList();
        getDisposedWomenCrimeList();
        getOpeningRapeCasesList();
        getInstituteRapeCasesList();
        getDisposedRapeCasesList();
        getSplPOCSOBalanceList();
        getSplPOCSOInstitutionList();
        getSplPOCSODisposedList();
    },[auth.jwtToken,auth.nameOfCourt,monthValue,year]);

    useEffect(()=>{
        setRapePending((openingRape + institutionRape) - disposedRape);
        setCrimeWomenPending((openingWomenCrime+insCrimeWomen)-disposedCrimeWomen);
    },[openingRape,institutionRape,disposedRape,openingWomenCrime,insCrimeWomen,disposedCrimeWomen]);

    useEffect(()=>{
        setSplPCasesPending((splPOCSOBalance+insSplPocso)-disposedSplP);
    },[splPOCSOBalance,insSplPocso,disposedSplP]);
    
    return(
        <>
        <table className="text-stone-600 border border-cyan-50 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="5">FORMAT M2</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="5">STATEMENT REGARDING INSTITUTION, DISPOSAL AND PENDENCY OF CASES RELATING TO
                            CRIMES AGAINST WOMEN, JUVENILES & UNDER THE PREVENTION OF CORRUPTION ACT,
                            POCSO ACT AND UNDER COMMERCIAL COURTS AND CASES AGAINST MPS AND MLAS IN THE
                            GOALPARA_DISTRICT JUDICIARY FOR THE MONTH OF {month}, {year}</td>
                </tr>
                
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>Cases Relating to</td>
                    <td>Pendency at the beginning of the month</td>
                    <td>Institution during the month</td>
                    <td>Disposal during the month</td>
                    <td>Pendency at the end of the month</td>
                </tr>
            </thead>
            <tbody>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>Crime Against women(excluding Rape u/s 376IPC/POCSO)</td>
                    <td>{openingWomenCrime}</td>
                    <td>{insCrimeWomen}</td>
                    <td>{disposedCrimeWomen}</td>
                    <td>{crimeWomenPending}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>Juveniles</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>P.C. Act</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>POCSO</td>
                    <td>{splPOCSOBalance}</td>
                    <td>{insSplPocso}</td>
                    <td>{disposedSplP}</td>
                    <td>{splPCasesPending}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>Commercial Courts</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>MPs and MLAs</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>SC/ST (Prevention of Atrocities Act)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>Wild Life Protection Act 1972</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>Rape (U/S 376 IPC)</td>
                    <td>{openingRape}</td>
                    <td>{institutionRape}</td>
                    <td>{disposedRape}</td>
                    <td>{rapePending}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>TOTAL</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                
            </tbody>
        </table>
        <button onClick={()=>setModalOpen(true)} className="text-stone-600 dark:text-stone-300 border border-stone-400 mt-2 mb-6 p-2 hover:bg-orange-400 hover:text-stone-50">Generate M2 Format PDF</button>
            {modalOpen && <M2FormatPdfModal closeModal={()=>setModalOpen(false)} month={month} year={year} courtName = {auth.nameOfCourt}
            openingWomenCrime={openingWomenCrime} insCrimeWomen={insCrimeWomen} disposedCrimeWomen={disposedCrimeWomen}
            crimeWomenPending={crimeWomenPending} splPOCSOBalance={splPOCSOBalance} insSplPocso={insSplPocso}
            disposedSplP={disposedSplP} splPCasesPending={splPCasesPending} openingRape={openingRape}
            institutionRape={institutionRape} disposedRape={disposedRape} rapePending={rapePending}/>}
        </>
    )

}

export default M2Format;