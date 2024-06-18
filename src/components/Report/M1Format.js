import React, {useState, useEffect} from "react";
import useAuth from "../hooks/useAuth";
import { BASE_URL } from "../Common/Arrays";
import axios from 'axios';
import M1FormatPdfModal from "../PdfReport/M1FormatPdfModal";

const SESSIONS_TY1_CASES = BASE_URL.concat('criminalCases/sessionsTy1/');
const SESSIONS_TY2_CASES = BASE_URL.concat('criminalCases/sessionsTy2/');
const CRIMINAL_APPEALS_CASES = BASE_URL.concat('criminalCases/crlAppl/');
const CRIMINAL_REVISION_CASES = BASE_URL.concat('criminalCases/crlRevn/');
const NDPS_ACT_CASES = BASE_URL.concat('criminalCases/splNDPS/');
const ELEC_ACT_CASES = BASE_URL.concat('criminalCases/splElec/');
const PENDING_CRL_CASES = BASE_URL.concat('criminalCases/');
const MISC_J_CASES = BASE_URL.concat('civilCases/miscJ/');
const TITLE_APPEALS_CASES = BASE_URL.concat('civilCases/titleAppeal/');
const MONEY_APPEALS_CASES = BASE_URL.concat('civilCases/moneyAppeal/');
const MISC_CIVIL_APPL_CASES = BASE_URL.concat('civilCases/miscCivilAppeal/');
const SUCCESSION_CASES = BASE_URL.concat('civilCases/miscSuccession/');
const GUARDIANSHIP_CASES = BASE_URL.concat('civilCases/miscGuardianship/');
const MISC_CASE_PROBATE = BASE_URL.concat('civilCases/miscProbate/');
const TITLE_SUIT_P = BASE_URL.concat('civilCases/titleSuitP/');
const TITLE_SUIT_D = BASE_URL.concat('civilCases/titleSuitD/');
const TITLE_SUIT_M = BASE_URL.concat('civilCases/titleSuitM/');
const TITLE_SUIT_R = BASE_URL.concat('civilCases/titleSuitR/');
const CIVIL_PENDING_CASES = BASE_URL.concat('civilCases/');

const M1Format = ({month,year}) => {
    const { auth } = useAuth();
    const [sessTy1, setSessTy1] = useState(0);
    const [sessTy2, setSessTy2] = useState(0);
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

    useEffect(()=> {
        const getSessTy1PendingList = async () => {
            try {
                await axios.get(SESSIONS_TY1_CASES
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
                await axios.get(SESSIONS_TY2_CASES
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
        const getCrlApplPendingList = async () => {
            try {
                await axios.get(CRIMINAL_APPEALS_CASES
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
                await axios.get(CRIMINAL_REVISION_CASES
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
                await axios.get(NDPS_ACT_CASES
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
                await axios.get(ELEC_ACT_CASES
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
                await axios.get(PENDING_CRL_CASES
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
                await axios.get(MISC_J_CASES
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
                await axios.get(TITLE_APPEALS_CASES
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
                await axios.get(MONEY_APPEALS_CASES
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
                await axios.get(MISC_CIVIL_APPL_CASES
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
                await axios.get(SUCCESSION_CASES.concat(auth.nameOfCourt), {
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
                await axios.get(GUARDIANSHIP_CASES.concat(auth.nameOfCourt), {
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
                await axios.get(MISC_CASE_PROBATE.concat(auth.nameOfCourt), {
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
                await axios.get(TITLE_SUIT_P.concat(auth.nameOfCourt), {
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
                await axios.get(TITLE_SUIT_D.concat(auth.nameOfCourt), {
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
                await axios.get(TITLE_SUIT_M.concat(auth.nameOfCourt), {
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
                await axios.get(TITLE_SUIT_R.concat(auth.nameOfCourt), {
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
                await axios.get(CIVIL_PENDING_CASES.concat(auth.nameOfCourt), {
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

    return(
        <>
        <table className="text-stone-600 border border-cyan-50 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="4">FORMAT M1</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="4">MONTHLY DISTRICT-WISE RETURN (COMPILED) IN REGARD TO DIFFERENT CATEGORY OF CASES PENDING AT THE END OF {month}, {year}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50 text-center'>
                    <td colSpan="2">STATE: ASSAM</td>
                    <td colSpan="2">DISTRICT: GOALPARA</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>Sl No.</td>
                    <td>Types of Cases</td>
                    <td>No. of cases pending</td>
                    <td>Remarks</td>
                </tr>
            </thead>
            <tbody>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>1</td>
                    <td>Sessions Case: Type - I</td>
                    <td>{sessTy1}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>2</td>
                    <td>Sessions Case: Type - II</td>
                    <td>{sessTy2}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>3</td>
                    <td>Criminal Appeals</td>
                    <td>{crlAppl}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>4</td>
                    <td>Criminal Revisions</td>
                    <td>{crlRevn}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>5</td>
                    <td>Warrant Procedure IPC cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>6</td>
                    <td>Summons Procedure IPC cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>7</td>
                    <td>Food Adulteration Act cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>8</td>
                    <td>NDPS Act cases</td>
                    <td>{ndpsAct}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>9</td>
                    <td>MACT cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>10</td>
                    <td>Cases under Electricity Act</td>
                    <td>{electricity}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>11</td>
                    <td>Essential Commodity Act cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>12</td>
                    <td>Cases u/s 125 Cr.P.C.</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>13</td>
                    <td>Cases under Domestic Violence Act</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>14</td>
                    <td>N.I. Act cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>15</td>
                    <td>M.V. Act cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>16</td>
                    <td>Excise Act cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>17</td>
                    <td>Juvenlle Justice Act cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>18</td>
                    <td>Other criminal cases not covered above</td>
                    <td>{otherCrlCases}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>19</td>
                    <td>Title Suits</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>20</td>
                    <td>Money Suit</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>21</td>
                    <td>Misc.(J) cases</td>
                    <td>{miscJ}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>22</td>
                    <td>Title Execution cases</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>23</td>
                    <td>Title Appeals</td>
                    <td>{titleAppeals}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>24</td>
                    <td>Money Appeals</td>
                    <td>{moneyAppeals}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>25</td>
                    <td>Misc. Civil Appeals</td>
                    <td>{miscCivilAppl}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>26</td>
                    <td>Succession cases</td>
                    <td>{succession}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>27</td>
                    <td>Guardianship cases</td>
                    <td>{guardianship}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>28</td>
                    <td>Misc. case (Probate)</td>
                    <td>{miscCaseProbate}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>29</td>
                    <td>Title Suit (Probate)</td>
                    <td>{titleSuitP}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>30</td>
                    <td>Title Suit (Matrimonial)</td>
                    <td>{titleSuitMatri}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>31</td>
                    <td>Other Civil cases not covered above</td>
                    <td>{otherCivilCases}</td>
                    <td></td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50  [&>*]:text-xl'>
                    <td colSpan="2">TOTAL</td>
                    <td>{totalCases}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <button onClick={()=>setModalOpen(true)} className="text-stone-600 dark:text-stone-300 border border-stone-400 mt-2 mb-6 p-2 hover:bg-orange-400 hover:text-stone-50">Generate M1 Format PDF</button>
            {modalOpen && <M1FormatPdfModal closeModal={()=>setModalOpen(false)} month={month} year={year} courtName = {auth.nameOfCourt} sessTy1={sessTy1}
            sessTy2={sessTy2} crlAppl={crlAppl} crlRevn={crlRevn} ndpsAct={ndpsAct} electricity={electricity} otherCrlCases={otherCrlCases}
            miscJ={miscJ} titleAppeals={titleAppeals} moneyAppeals={moneyAppeals} miscCivilAppl={miscCivilAppl}
            succession={succession} guardianship={guardianship} miscCaseProbate={miscCaseProbate} titleSuitP={titleSuitP}
            titleSuitMatri={titleSuitMatri} otherCivilCases={otherCivilCases} totalCases={totalCases}/>}
        </>
    )

}

export default M1Format;