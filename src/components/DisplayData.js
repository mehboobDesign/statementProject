import React, {useEffect, useState} from "react";
import axios from 'axios';
import useAuth from "../components/hooks/useAuth";
import CaseListModal from "./Common/Modal/CaseListModal";

const SHOW_CRIMINAL_CASES_URL = 'http://localhost:5050/api/v1/cases/criminalCases/';
const SHOW_SESS_TY1_URL = 'http://localhost:5050/api/v1/cases/criminalCases/sessionsTy1/';
const SHOW_SESS_TY2_URL = 'http://localhost:5050/api/v1/cases/criminalCases/sessionsTy2/';
const SHOW_CRL_APPL_URL = 'http://localhost:5050/api/v1/cases/criminalCases/crlAppl/';
const SHOW_CRL_REVN_URL = 'http://localhost:5050/api/v1/cases/criminalCases/crlRevn/';
const SHOW_SPL_NDPS_URL = 'http://localhost:5050/api/v1/cases/criminalCases/splNDPS/';
const SHOW_SPL_ELEC_URL = 'http://localhost:5050/api/v1/cases/criminalCases/splElec/';
const SHOW_SPL_POCSO_URL = 'http://localhost:5050/api/v1/cases/criminalCases/splPOCSO/';
const SHOW_SPL_PNC_URL =  'http://localhost:5050/api/v1/cases/criminalCases/splPnC/';
const SHOW_SPL_CASE_URL = 'http://localhost:5050/api/v1/cases/criminalCases/splCase/';
const SHOW_SPL_CHILD_URL = 'http://localhost:5050/api/v1/cases/criminalCases/splChild/';
const SHOW_MISC_CASE_URL = 'http://localhost:5050/api/v1/cases/criminalCases/miscCase/';
const SHOW_MISC_CRIMINAL_URL = 'http://localhost:5050/api/v1/cases/criminalCases/miscCriminal/';
const SHOW_SPL_LG_URL = 'http://localhost:5050/api/v1/cases/criminalCases/splLandGrabbing/';
const SHOW_SPL_WH_URL = 'http://localhost:5050/api/v1/cases/criminalCases/splWitchHunting/';

const DisplayData = () => {
    const { auth } = useAuth();

    const [totalCriminal, setTotalCriminal] = useState(0);
    const [totalSessTy1, setTotalSessTy1] = useState(0);
    const [totalSessTy2, setTotalSessTy2] = useState(0);
    const [totalCrlAppl, setTotalCrlAppl] = useState(0);
    const [totalCrlRevn, setTotalCrlRevn] = useState(0);
    const [totalSplNDPS, setTotalSplNDPS] = useState(0);
    const [totalSplElec, setTotalSplElec] = useState(0);
    const [totalSplPOCSO, setTotalSplPOCSO] = useState(0);
    const [totalSplPnC, setTotalSplPnC] = useState(0);
    const [totalSplCase, setTotalSplCase] = useState(0);
    const [totalSplChild, setTotalSplChild] = useState(0);
    const [totalMiscCase, setTotalMiscCase] = useState(0);
    const [totalMiscCriminal, setTotalMiscCriminal] = useState(0);
    const [totalSplLG, setTotalSplLG] = useState(0);
    const [totalSplWH, setTotalSplWH] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const [splWHRecords, setSplWHRecords] = useState([]);

    const [totalCivil, setTotalCivil] = useState(0);
    useEffect(()=>{
        showCriminalCases(); 
        showSessionsTy1Cases();
        showSessionsTy2Cases();
        showCrlAppl();
        showCrlRevn();
        showSplNDPS();
        showSplElectricity();
        showSplPOCSO();
        showSplPnC();
        showSplCase();
        showSplChild();
        showMiscCase();
        showMiscCriminal();
        showSplLG();
        showSplWH();
        // eslint-disable-next-line
    },[])
    const showCriminalCases = async () => { 
        try {
            await axios.get(SHOW_CRIMINAL_CASES_URL
                .concat(auth.nameOfCourt), {
              headers: {
                Authorization : `Bearer ${auth.jwtToken}`
              }
            }   
            )
            .then(function (response) {
                setTotalCriminal(response.data.length);
                
            })
        } catch (err) {
            console.log(err);
        }
        
      };
      const showSessionsTy1Cases = async () => {
        try {
            await axios.get(SHOW_SESS_TY1_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSessTy1(response.data.length);
            })
        } catch (err) {
            console.log(err);
        }
      };
      const showSessionsTy2Cases = async () => {
        try {
            await axios.get(SHOW_SESS_TY2_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSessTy2(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showCrlAppl = async () => {
        try {
            await axios.get(SHOW_CRL_APPL_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalCrlAppl(response.data.length);
            })
        } catch (err) {
            console.log(err);
        }
      };
      const showCrlRevn = async () => {
        try {
            await axios.get(SHOW_CRL_REVN_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalCrlRevn(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showSplNDPS = async () => {
        try {
            await axios.get(SHOW_SPL_NDPS_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSplNDPS(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showSplElectricity = async () => {
        try {
            await axios.get(SHOW_SPL_ELEC_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSplElec(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showSplPOCSO = async () => {
        try {
            await axios.get(SHOW_SPL_POCSO_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSplPOCSO(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showSplPnC = async () => {
        try {
            await axios.get(SHOW_SPL_PNC_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSplPnC(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showSplCase = async () => {
        try {
            await axios.get(SHOW_SPL_CASE_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSplCase(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showSplChild = async () => {
        try {
            await axios.get(SHOW_SPL_CHILD_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSplChild(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showMiscCase = async () => {
        try {
            await axios.get(SHOW_MISC_CASE_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalMiscCase(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showMiscCriminal = async () => {
        try {
            await axios.get(SHOW_MISC_CRIMINAL_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalMiscCriminal(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showSplLG = async () => {
        try {
            await axios.get(SHOW_SPL_LG_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSplLG(response.data.length);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showSplWH = async () => {
        try {
            await axios.get(SHOW_SPL_WH_URL.concat(auth.nameOfCourt),{
                headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                }
            }).then(function(response){
                setTotalSplWH(response.data.length);
                setSplWHRecords(response.data);
            })
        } catch(err) {
            console.log(err);
        }
      };
      const showCaseList = () => {
        setModalOpen(true);
      }
    return(
        <>
        <h1 className="dark:text-fuchsia-300 pt-4 pb-4 font-extrabold text-2xl text-stone-700 text-center">Court Name : {auth.nameOfCourt}</h1>
            <div className="lg:flex lg:pl-48 lg:pr-48">
            <div className="rounded bg-orange-300 dark:bg-slate-800 basis-1/2">
                <div className="px-6 py-6">
                    <div className="font-bold text-xl mb-2 text-stone-800 dark:text-cyan-300">Criminal Cases at a Glance</div>
                    <table className="text-stone-600 dark:text-stone-300 text-base table-auto w-full">
                        <tr className=" bg-gray-700">
                            <td className="p-2">Total Criminal Cases</td>
                            <td>:</td>
                            <td>{totalCriminal} no{totalCriminal <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-600">
                            <td className="p-2">Sessions Cases (Ty1)</td><td>:</td><td>{totalSessTy1} no{totalSessTy1 <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="p-2">Sessions Cases (Ty2)</td><td>:</td><td>{totalSessTy2} no{totalSessTy2 <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-600">
                            <td className="p-2">Criminal Appeal</td><td>:</td><td>{totalCrlAppl} no{totalCrlAppl <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="p-2">Criminal Revision</td><td>:</td><td>{totalCrlRevn} no{totalCrlRevn <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-600">
                            <td className="p-2">Special NDPS</td><td>:</td><td>{totalSplNDPS} no{totalSplNDPS <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="p-2">Special Electricity</td><td>:</td><td>{totalSplElec} no{totalSplElec <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-600">
                            <td className="p-2">Special POCSO</td><td>:</td><td>{totalSplPOCSO} no{totalSplPOCSO <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="p-2">Special P & C</td><td>:</td><td>{totalSplPnC} no{totalSplPnC <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-600">
                            <td className="p-2">Special Case</td><td>:</td><td>{totalSplCase} no{totalSplCase <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="p-2">Special Child</td><td>:</td>
                            <td><button>{totalSplChild} no{totalSplChild <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="bg-gray-600">
                            <td className="p-2">Misc Case</td><td>:</td>
                            <td><button>{totalMiscCase} no{totalMiscCase <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="p-2">Misc Criminal</td><td>:</td>
                            <td><button>{totalMiscCriminal} no{totalMiscCriminal <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="bg-gray-600">
                            <td className="p-2">Special Land Grabbing</td><td>:</td>
                            <td><button>{totalSplLG} no{totalSplLG <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="p-2">Special Witch Hunting</td><td>:</td>
                            <td><button onClick={()=>showCaseList()}>{totalSplWH} no{totalSplWH <= 1 ? '' : 's'}</button></td>
                        </tr>
                    </table>
                    {modalOpen && <CaseListModal closeModal={()=>setModalOpen(false)} caseRecords={splWHRecords} />}
                    
                </div>
            </div>

            <div className="rounded bg-blue-400 dark:bg-slate-800 basis-1/2 ml-4">
                <div className="px-6 py-6">
                    <div className="font-bold text-xl mb-2 text-stone-800 dark:text-pink-500">Civil Cases at a Glance</div>
                    <table className="text-stone-600 dark:text-blue-500 text-base table-auto w-full">
                        <tr className="">
                            <td className="p-2">Total Civil Cases</td>
                            <td>:</td>
                            <td>{totalCivil} no{totalCivil === 1 ? '' : 's'}</td>
                        </tr>
                        <tr>
                            <td className="p-2">Title Appeal</td><td>:</td><></>
                        </tr>
                        <tr>
                            <td className="p-2">Money Appeal</td><td>:</td><></>
                        </tr>
                        <tr>
                            <td className="p-2">Misc Civil Appeal</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Misc Appeal</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Misc Succession</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Misc Guardianship</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Title Suit(Probate)</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Title Suit(D)</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Title Suit(M)</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Title Suit(R)</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Land Acquisition</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Misc(j)</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Consumer Act. Cases</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Money Execution Cases</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Misc Probate</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Misc T</td><td>:</td>
                        </tr>
                        <tr>
                            <td className="p-2">Misc Revocation</td><td>:</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}
export default DisplayData;