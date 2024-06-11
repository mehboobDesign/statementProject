import React, {useState, useEffect} from "react";
import useAuth from "../hooks/useAuth";
import { BASE_URL } from "../Common/Arrays";
import axios from 'axios';
import YearwiseBreakupPdfModal from "../PdfReport/YearwiseBreakupPdfModal";

const UPTO_ONE_CIVIL = BASE_URL.concat('uptoOneCivil/');
const UPTO_ONE_CRIMINAL = BASE_URL.concat('uptoOneCriminal/');
const ONE_TO_TWO_CIVIL = BASE_URL.concat('oneToTwoCivil/');
const ONE_TO_TWO_CRIMINAL = BASE_URL.concat('oneToTwoCriminal/');
const TWO_TO_THREE_CIVIL = BASE_URL.concat('twoToThreeCivil/');
const TWO_TO_THREE_CRIMINAL = BASE_URL.concat('twoToThreeCriminal/');
const THREE_TO_FIVE_CIVIL = BASE_URL.concat('threeToFiveCivil/');
const THREE_TO_FIVE_CRIMINAL = BASE_URL.concat('threeToFiveCriminal/');
const FIVE_TO_TEN_CIVIL = BASE_URL.concat('fiveToTenCivil/');
const FIVE_TO_TEN_CRIMINAL = BASE_URL.concat('fiveToTenCriminal/');
const TEN_TO_FIFTEEN_CIVIL = BASE_URL.concat('tenToFifteenCivil/');
const TEN_TO_FIFTEEN_CRIMINAL = BASE_URL.concat('tenToFifteenCriminal/');
const MORE_FIFTEEN_CIVIL = BASE_URL.concat('moreThanFifteenCivil/');
const MORE_FIFTEEN_CRIMINAL = BASE_URL.concat('moreThanFifteenCriminal/');
const TOTAL_CIVIL_PENDING = BASE_URL.concat('civilCases/');
const TOTAL_CRIMINAL_PENDING = BASE_URL.concat('criminalCases/');

const YearwiseBreakup = ({monthValue,month,year}) => {

    const { auth } = useAuth();
    const [upto1yrOldCivil, setUpto1yrOldCivil] = useState(0);
    const [upto1yrOldCriminal, setUpto1yrOldCriminal] = useState(0);
    const [oneToTwoCivil, setOneToTwoCivil] = useState(0);
    const [oneToTwoCriminal, setOneToTwoCriminal] = useState(0);
    const [twoToThreeCivil, setTwoToThreeCivil] = useState(0);
    const [twoToThreeCriminal, setTwoToThreeCriminal] = useState(0);
    const [threeToFiveCivil, setThreeToFiveCivil] = useState(0);
    const [threeToFiveCriminal, setThreeToFiveCriminal] = useState(0);
    const [fiveToTenCivil, setFiveToTenCivil] = useState(0);
    const [fiveToTenCriminal, setFiveToTenCriminal] = useState(0);
    const [tenToFifteenCivil, setTenToFifteenCivil] = useState(0);
    const [tenToFifteenCriminal, setTenToFifteenCriminal] = useState(0);
    const [fifteenCivil, setFifteenCivil] = useState(0);
    const [fifteenCriminal, setFifteenCriminal] = useState(0);
    const [totalCivil, setTotalCivil] = useState(0);
    const [totalCriminal, setTotalCriminal] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(()=>{
        const getUptoOneYearCivil = async () => {
            try {
                await axios.get(UPTO_ONE_CIVIL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) { console.log(response);
                    setUpto1yrOldCivil(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getUptoOneYearCriminal = async () => {
            try {
                await axios.get(UPTO_ONE_CRIMINAL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setUpto1yrOldCriminal(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getOneToTwoCivil = async () => {
            try {
                await axios.get(ONE_TO_TWO_CIVIL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setOneToTwoCivil(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getOneToTwoCriminal = async () => {
            try {
                await axios.get(ONE_TO_TWO_CRIMINAL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setOneToTwoCriminal(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTwoToThreeCivil = async () => {
            try {
                await axios.get(TWO_TO_THREE_CIVIL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTwoToThreeCivil(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTwoToThreeCriminal = async () => {
            try {
                await axios.get(TWO_TO_THREE_CRIMINAL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTwoToThreeCriminal(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getThreeToFiveCivil = async () => {
            try {
                await axios.get(THREE_TO_FIVE_CIVIL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setThreeToFiveCivil(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getThreeToFiveCriminal = async () => {
            try {
                await axios.get(THREE_TO_FIVE_CRIMINAL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setThreeToFiveCriminal(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getFiveToTenCivil = async () => {
            try {
                await axios.get(FIVE_TO_TEN_CIVIL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setFiveToTenCivil(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getFiveToTenCriminal = async () => {
            try {
                await axios.get(FIVE_TO_TEN_CRIMINAL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setFiveToTenCriminal(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTenToFifteenCivil = async () => {
            try {
                await axios.get(TEN_TO_FIFTEEN_CIVIL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTenToFifteenCivil(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTenToFifteenCriminal = async () => {
            try {
                await axios.get(TEN_TO_FIFTEEN_CRIMINAL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTenToFifteenCriminal(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getFifteenCivil = async () => {
            try {
                await axios.get(MORE_FIFTEEN_CIVIL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setFifteenCivil(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getFifteenCriminal = async () => {
            try {
                await axios.get(MORE_FIFTEEN_CRIMINAL.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setFifteenCriminal(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTotalCivil = async () => {
            try {
                await axios.get(TOTAL_CIVIL_PENDING.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTotalCivil(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const getTotalCriminal = async () => {
            try {
                await axios.get(TOTAL_CRIMINAL_PENDING.concat(auth.nameOfCourt)
                , {
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response) {
                    setTotalCriminal(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
        };
        getUptoOneYearCivil();
        getUptoOneYearCriminal();
        getOneToTwoCivil();
        getOneToTwoCriminal();
        getTwoToThreeCivil();
        getTwoToThreeCriminal();
        getThreeToFiveCivil();
        getThreeToFiveCriminal();
        getFiveToTenCivil();
        getFiveToTenCriminal();
        getTenToFifteenCivil();
        getTenToFifteenCriminal();
        getFifteenCivil();
        getFifteenCriminal();
        getTotalCivil();
        getTotalCriminal();
    },[auth.jwtToken, auth.nameOfCourt, monthValue, year]);

    return(
        <>
        <table className="text-stone-600 border border-cyan-50 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td colSpan="12">Yearwise Break up for the Month of {month}, {year} </td>
                    <td colSpan="10">{auth.nameOfCourt}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td colSpan = "2" className='border border-cyan-50'>Upto 1 Year</td>
                    <td colSpan = "2" className='border border-cyan-50'>More than 1 & less than 2 Years</td>
                    <td colSpan = "2" className='border border-cyan-50'>More than 2 & less than 3 Years</td>
                    <td colSpan = "2" className='border border-cyan-50'>More than 3 & less than 5 Years</td>
                    <td colSpan = "2" className='border border-cyan-50'>More than 5 & less than 10 Years</td>
                    <td colSpan = "2" className='border border-cyan-50'>More than 10 & less than 15 Years</td>
                    <td colSpan = "2" className='border border-cyan-50'>More than 15 Years</td>
                    <td colSpan = "2" className='border border-cyan-50'>Total</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                </tr>
            </thead>
            <tbody>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>{upto1yrOldCivil}</td>
                    <td>{upto1yrOldCriminal}</td>
                    <td>{oneToTwoCivil}</td>
                    <td>{oneToTwoCriminal}</td>
                    <td>{twoToThreeCivil}</td>
                    <td>{twoToThreeCriminal}</td>
                    <td>{threeToFiveCivil}</td>
                    <td>{threeToFiveCriminal}</td>
                    <td>{fiveToTenCivil}</td>
                    <td>{fiveToTenCriminal}</td>
                    <td>{tenToFifteenCivil}</td>
                    <td>{tenToFifteenCriminal}</td>
                    <td>{fifteenCivil}</td>
                    <td>{fifteenCriminal}</td>
                    <td>{totalCivil}</td>
                    <td>{totalCriminal}</td>
                </tr>  
            </tbody>
        </table>
        <button onClick={()=>setModalOpen(true)} className="text-white border border-stone-400 mt-2 mb-6 p-2 hover:bg-stone-400">Generate Yearwise Breakup PDF</button>
            {modalOpen && <YearwiseBreakupPdfModal closeModal={()=>setModalOpen(false)} month={month} year={year} courtName = {auth.nameOfCourt} upto1yrOldCivil={upto1yrOldCivil}
            upto1yrOldCriminal={upto1yrOldCriminal} oneToTwoCivil={oneToTwoCivil} 
            oneToTwoCriminal={oneToTwoCriminal} twoToThreeCivil={twoToThreeCivil} 
            twoToThreeCriminal={twoToThreeCriminal} threeToFiveCivil={threeToFiveCivil} threeToFiveCriminal={threeToFiveCriminal}
            fiveToTenCivil={fiveToTenCivil} fiveToTenCriminal={fiveToTenCriminal} 
            tenToFifteenCivil={tenToFifteenCivil} tenToFifteenCriminal={tenToFifteenCriminal} fifteenCivil={fifteenCivil}
            fifteenCriminal={fifteenCriminal} totalCivil={totalCivil}
            totalCriminal={totalCriminal} />}
        </>
    )

}

export default YearwiseBreakup;