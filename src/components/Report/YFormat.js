import React, {useState, useEffect} from "react";
import useAuth from "../hooks/useAuth";
import { BASE_URL } from "../Common/Arrays";
import axios from 'axios';
import XFormatPdfModal from "../PdfReport/XFormatPdfModal";

const SESSIONS_TY1_OLD_CASES = BASE_URL.concat('criminalCases/oldPending/sessTy1Old/');
const SESSIONS_TY2_OLD_CASES = BASE_URL.concat('criminalCases/oldPending/sessionsTy2Old/');
const RAPE_OLD_CASES = BASE_URL.concat('criminalCases/oldPendingRape/');
const CRIMINAL_APPEALS_OLD_CASES = BASE_URL.concat('criminalCases/oldPending/caOld/');
const CRIMINAL_REVISION_OLD_CASES = BASE_URL.concat('criminalCases/oldPending/crlRevnOld/');
const NDPS_ACT_OLD_CASES = BASE_URL.concat('criminalCases/oldPending/splNDPS/');
const ELEC_ACT_OLD_CASES = BASE_URL.concat('criminalCases/oldPending/splElec/');
const PENDING_CRL_OLD_CASES = BASE_URL.concat('criminalCases/oldPending/');
const MISC_J_OLD_CASES = BASE_URL.concat('civilCases/oldPending/miscJ/');
const TITLE_APPEALS_OLD_CASES = BASE_URL.concat('civilCases/oldPending/titleAppeal/');
const MONEY_APPEALS_OLD_CASES = BASE_URL.concat('civilCases/oldPending/moneyAppeal/');
const MISC_CIVIL_APPL_OLD_CASES = BASE_URL.concat('civilCases/oldPending/miscCivilAppeal/');
const SUCCESSION_OLD_CASES = BASE_URL.concat('civilCases/oldPending/miscSuccession/');
const GUARDIANSHIP_OLD_CASES = BASE_URL.concat('civilCases/oldPending/miscGuardianship/');
const MISC_CASE_OLD_PROBATE = BASE_URL.concat('civilCases/oldPending/miscProbate/');
const TITLE_SUIT_OLD_P = BASE_URL.concat('civilCases/oldPending/titleSuitP/');
const TITLE_SUIT_OLD_D = BASE_URL.concat('civilCases/oldPending/titleSuitD/');
const TITLE_SUIT_OLD_M = BASE_URL.concat('civilCases/oldPending/titleSuitM/');
const TITLE_SUIT_OLD_R = BASE_URL.concat('civilCases/oldPending/titleSuitR/');
const CIVIL_OLD_PENDING_CASES = BASE_URL.concat('civilCases/oldPending/');

const YFormat = ({currDate,monthValue,month,year}) => { 

    const { auth } = useAuth();
    const [sessTy1, setSessTy1] = useState(0);
    const [sessTy2, setSessTy2] = useState(0);
    const [rapeCases, setRapeCases] = useState(0);
    const [sessTy2AfterRape, setSessTy2AfterRape] = useState(0);
    const [crlAppl, setCrlAppl] = useState(0);
    const [crlRevn, setCrlRevn] = useState(0);
    const [ndpsAct, setNdpsAct] = useState(0);
    const [electricity, setElectricity] = useState(0);
    const [crlPending, setCrlPending] = useState(0);
    const [otherCrlCases, setOtherCrlCases] = useState(0);
    const [miscJ, setMiscJ] = useState(0);
    const [titleAppeals, setTitleAppeals] = useState(0);
    const [moneyAppeals, setMoneyAppeals] = useState(0);
    const [miscCivilAppl, setMiscCivilAppl] = useState(0);
    const [succession, setSuccession] = useState(0);
    const [guardianship, setGuardianship] = useState(0);
    const [miscCaseProbate, setMiscCaseProbate] = useState(0);
    const [titleSuitP, setTitleSuitP] = useState(0);
    const [titleSuitD, setTitleSuitD] = useState(0);
    const [titleSuitM, setTitleSuitM] = useState(0);
    const [titleSuitR, setTitleSuitR] = useState(0);
    const [titleSuitMatri, setTitleSuitMatri] = useState(0);
    const [civilPending, setCivilPending] = useState(0);
    const [otherCivilCases, setOtherCivilCases] = useState(0);
    const [totalCases, setTotalCases] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [yFormat, setYFormat] = useState(false);

    useEffect(()=> {
        const getSessTy1PendingList = async () => {
            try {
                await axios.get(SESSIONS_TY1_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setSessTy1(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getSessTy2PendingList = async () => {
            try {
                await axios.get(SESSIONS_TY2_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setSessTy2(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getRapeCasesPendingList = async () => {
            try {
                await axios.get(RAPE_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setRapeCases(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCrlApplPendingList = async () => {
            try {
                await axios.get(CRIMINAL_APPEALS_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCrlAppl(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCrlRevnPendingList = async () => {
            try {
                await axios.get(CRIMINAL_REVISION_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCrlRevn(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getNDPSCasesPendingList = async () => {
            try {
                await axios.get(NDPS_ACT_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setNdpsAct(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getElectricityPendingCaseList = async () => {
            try {
                await axios.get(ELEC_ACT_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setElectricity(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTotalCrlPending = async () => {
            try {
                await axios.get(PENDING_CRL_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setCrlPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getMiscJPendingList = async () => {
            try {
                await axios.get(MISC_J_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setMiscJ(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTitleAppealPendingList = async () => {
            try {
                await axios.get(TITLE_APPEALS_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setTitleAppeals(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getMoneyAppealPendingList = async () => {
            try {
                await axios.get(MONEY_APPEALS_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setMoneyAppeals(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getMiscCivilAppealPendingList = async () => {
            try {
                await axios.get(MISC_CIVIL_APPL_OLD_CASES
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setMiscCivilAppl(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getSuccessionCaseList = async () => {
            try {
                await axios.get(SUCCESSION_OLD_CASES.concat(auth.nameOfCourt), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setSuccession(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getGuardianshipCaseList = async () => {
            try {
                await axios.get(GUARDIANSHIP_OLD_CASES.concat(auth.nameOfCourt), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setGuardianship(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getMiscCaseProbateCaseList = async () => {
            try {
                await axios.get(MISC_CASE_OLD_PROBATE.concat(auth.nameOfCourt), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setMiscCaseProbate(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTitleSuitProbateCaseList = async () => {
            try {
                await axios.get(TITLE_SUIT_OLD_P.concat(auth.nameOfCourt), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTitleSuitP(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTitleSuitDCaseList = async () => {
            try {
                await axios.get(TITLE_SUIT_OLD_D.concat(auth.nameOfCourt), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTitleSuitD(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTitleSuitMCaseList = async () => {
            try {
                await axios.get(TITLE_SUIT_OLD_M.concat(auth.nameOfCourt), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTitleSuitM(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTitleSuitRCaseList = async () => {
            try {
                await axios.get(TITLE_SUIT_OLD_R.concat(auth.nameOfCourt), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTitleSuitR(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getCivilPendingCases = async () => {
            try {
                await axios.get(CIVIL_OLD_PENDING_CASES.concat(auth.nameOfCourt), {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setCivilPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        getSessTy1PendingList();
        getSessTy2PendingList();
        getRapeCasesPendingList();
        getCrlApplPendingList();
        getCrlRevnPendingList();
        getNDPSCasesPendingList();
        getElectricityPendingCaseList();
        getTotalCrlPending();
        getMiscJPendingList();
        getTitleAppealPendingList();
        getMoneyAppealPendingList();
        getMiscCivilAppealPendingList();
        getSuccessionCaseList();
        getGuardianshipCaseList();
        getMiscCaseProbateCaseList();
        getTitleSuitProbateCaseList();
        getTitleSuitDCaseList();
        getTitleSuitMCaseList();
        getTitleSuitRCaseList();
        getCivilPendingCases();
    }, [auth.jwtToken,auth.nameOfCourt]);

    useEffect(()=>{
        setOtherCrlCases(crlPending - (sessTy1+sessTy2+crlAppl+crlRevn+ndpsAct+electricity));
        setTitleSuitMatri(titleSuitD+titleSuitM+titleSuitR)
    },[crlPending,sessTy1,sessTy2,crlAppl,crlRevn,ndpsAct,electricity,titleSuitD,titleSuitM,titleSuitR]);

    useEffect(()=>{
        setOtherCivilCases(civilPending - (miscJ+titleAppeals+moneyAppeals+miscCivilAppl+succession
            +guardianship+miscCaseProbate+titleSuitP+titleSuitMatri))
    },[civilPending,miscJ,titleAppeals,moneyAppeals,miscCivilAppl,succession
        ,guardianship,miscCaseProbate,titleSuitP,titleSuitMatri]);
    
    useEffect(()=>{
        setTotalCases(crlPending+civilPending);
    },[crlPending,civilPending]);

    useEffect(()=>{
        setSessTy2AfterRape(sessTy2-rapeCases);
    },[sessTy2,rapeCases]);
    const modalEvent = () => {
        setModalOpen(false);
        setYFormat(true);
    };
    return(
        <>
        <table className="text-stone-600 border border-cyan-50 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="12">FORMAT Y</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="12">STATEMENT REGARDING MONTH-WISE, COURT-WISE & CATEGORY-WISE PENDENCY OF 5 YEARS OR MORE OLD CASES IN THE  
                    SUB-ORDINATE COURTS FOR THE MONTH OF {month}, {year}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="6">STATE:ASSAM</td>
                    <td colSpan="6">DISTRICT:GOALPARA</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td rowSpan="2">Sl. No.</td>
                    <td rowSpan="2" className="w-80">Category of Cases</td>
                    <td colSpan="9">In the Court of</td>
                    <td rowSpan="2">Category-wise total pendency as on {currDate}/{monthValue}/{year}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 [&>*]:w-28'>
                    <td>Dist. & Sess. Judge</td>
                    <td>Addl. Dist. & Sess. Judge</td>
                    <td>Civil Judge (Sr. Div.) & Asstt. Sess. Judge</td>
                    <td>Civil Judge (Jr. Div.) No. 1 -cum- JMFC</td>
                    <td>Civil Judge (Jr. Div.) No. 2 -cum- JMFC</td>
                    <td>CJM</td>
                    <td>Addl. CJM</td>
                    <td>SDJM(S)</td>
                    <td>JMFC</td>
                </tr>
            </thead>
            <tbody>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>1</td>
                    <td>Sessions Case Type - I</td>
                    <td>{sessTy1}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>2</td>
                    <td>Sessions Case Type - II</td>
                    <td>{sessTy2AfterRape}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>3</td>
                    <td>NDPS Act Cases</td>
                    <td>{ndpsAct}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>4</td>
                    <td>Criminal Appeals</td>
                    <td>{crlAppl}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>5</td>
                    <td>Criminal Revisions</td>
                    <td>{crlRevn}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>6</td>
                    <td>Cases under Electricity Act</td>
                    <td>{electricity}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>7</td>
                    <td>Cases of rape against women</td>
                    <td>{rapeCases}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>8</td>
                    <td>Warrant procedure IPC Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>9</td>
                    <td>Summons procedure IPC Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>10</td>
                    <td>Food Adulteration Act Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>11</td>
                    <td>Essential Commodities Act Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>12</td>
                    <td>Cases u/s 125 Cr.P.C.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>13</td>
                    <td>Cases under Domestic Violence Act</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>14</td>
                    <td>N.I. Act Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>15</td>
                    <td>M.V. Act Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>16</td>
                    <td>Excise Act Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>17</td>
                    <td>Juvenlle Act Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>18</td>
                    <td>Forest Act Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>19</td>
                    <td>Wildlife Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>20</td>
                    <td>Cinematography/Copyright Act Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>21</td>
                    <td>Other Criminal Cases not covered above</td>
                    <td>{otherCrlCases}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td colSpan="2">SUB-TOTAL(A)</td>
                    <td>{crlPending}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>22</td>
                    <td>Title Suit</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>23</td>
                    <td>Money Suit</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>24</td>
                    <td>Misc. (J) Cases</td>
                    <td>{miscJ}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>25</td>
                    <td>Title Execution Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>26</td>
                    <td>Title Appeals</td>
                    <td>{titleAppeals}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>27</td>
                    <td>Money Appeals</td>
                    <td>{moneyAppeals}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>28</td>
                    <td>Misc. Civil Appeals</td>
                    <td>{miscCivilAppl}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>29</td>
                    <td>MACT Cases</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>30</td>
                    <td>Succession Cases</td>
                    <td>{succession}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>31</td>
                    <td>Guardianship Cases</td>
                    <td>{guardianship}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>32</td>
                    <td>Misc. Case (Probate)</td>
                    <td>{miscCaseProbate}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>33</td>
                    <td>Title Suit (Probate)</td>
                    <td>{titleSuitP}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>34</td>
                    <td>Title Suit (Matrimonial)</td>
                    <td>{titleSuitMatri}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>35</td>
                    <td>Other Civil Cases not covered above</td>
                    <td>{otherCivilCases}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td colSpan="2">SUB-TOTAL(B)</td>
                    <td>{civilPending}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td colSpan="2">GRAND-TOTAL(A+B)</td>
                    <td>{totalCases}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <button onClick={()=>setModalOpen(true)} className="text-stone-600 dark:text-stone-300 border border-stone-400 mt-2 mb-6 p-2 hover:bg-orange-400 hover:text-stone-50">Generate PDF</button>
            {modalOpen && <XFormatPdfModal yFormat={yFormat} closeModal={()=>modalEvent()} currDate={currDate} month={month} year={year} monthValue={monthValue}
            sessTy1={sessTy1} sessTy2AfterRape={sessTy2AfterRape} ndpsAct={ndpsAct} crlAppl={crlAppl} crlRevn={crlRevn}
            electricity={electricity} rapeCases={rapeCases} otherCrlCases={otherCrlCases} crlPending={crlPending}
            miscJ={miscJ} titleAppeals={titleAppeals} moneyAppeals={moneyAppeals} miscCivilAppl={miscCivilAppl}
            succession={succession} guardianship={guardianship} miscCaseProbate={miscCaseProbate}
            titleSuitP={titleSuitP} titleSuitMatri={titleSuitMatri} otherCivilCases={otherCivilCases}
            civilPending={civilPending} totalCases={totalCases}/>}
        </>
    )

}

export default YFormat;