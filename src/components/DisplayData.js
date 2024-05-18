import React, {useEffect, useState} from "react";
import axios from 'axios';
import useAuth from "../components/hooks/useAuth";
import CaseListModal from "./Common/Modal/CaseListModal";
import DisplayCivilData from "./DisplayCivilData";
import { BASE_URL } from "./Common/Arrays";

const SHOW_CRIMINAL_CASES_URL = BASE_URL.concat('criminalCases/');
const SHOW_SESS_TY1_URL = BASE_URL.concat('criminalCases/sessionsTy1/');
const SHOW_SESS_TY2_URL = BASE_URL.concat('criminalCases/sessionsTy2/');
const SHOW_CRL_APPL_URL = BASE_URL.concat('criminalCases/crlAppl/');
const SHOW_CRL_REVN_URL = BASE_URL.concat('criminalCases/crlRevn/');
const SHOW_SPL_NDPS_URL = BASE_URL.concat('criminalCases/splNDPS/');
const SHOW_SPL_ELEC_URL = BASE_URL.concat('criminalCases/splElec/');
const SHOW_SPL_POCSO_URL = BASE_URL.concat('criminalCases/splPOCSO/');
const SHOW_SPL_PNC_URL =  BASE_URL.concat('criminalCases/splPnC/');
const SHOW_SPL_CASE_URL = BASE_URL.concat('criminalCases/splCase/');
const SHOW_SPL_CHILD_URL = BASE_URL.concat('criminalCases/splChild/');
const SHOW_MISC_CASE_URL = BASE_URL.concat('criminalCases/miscCase/');
const SHOW_MISC_CRIMINAL_URL = BASE_URL.concat('criminalCases/miscCriminal/');
const SHOW_SPL_LG_URL = BASE_URL.concat('criminalCases/splLandGrabbing/');
const SHOW_SPL_WH_URL = BASE_URL.concat('criminalCases/splWitchHunting/');

const SHOW_CRIMINAL_OLD = BASE_URL.concat('criminalCases/oldPending/');
const SHOW_SESS_TY1_OLD = BASE_URL.concat('criminalCases/oldPending/sessTy1Old/');
const SHOW_SESS_TY2_OLD = BASE_URL.concat('criminalCases/oldPending/sessionsTy2Old/');
const SHOW_CA_OLD = BASE_URL.concat('criminalCases/oldPending/caOld/');
const SHOW_CRL_REVN_OLD = BASE_URL.concat('criminalCases/oldPending/crlRevnOld/');
const SHOW_SPL_NDPS_OLD = BASE_URL.concat('criminalCases/oldPending/splNDPS/');
const SHOW_SPL_ELEC_OLD = BASE_URL.concat('criminalCases/oldPending/splElec/');
const SHOW_SPL_POCSO_OLD = BASE_URL.concat('criminalCases/oldPending/splPOC/');
const SHOW_SPL_PNC_OLD = BASE_URL.concat('criminalCases/oldPending/splPNC/');
const SHOW_SPL_CASE_OLD = BASE_URL.concat('criminalCases/oldPending/splCase/');
const SHOW_SPL_CHILD_OLD = BASE_URL.concat('criminalCases/oldPending/splChild/');
const SHOW_MISC_CASE_OLD = BASE_URL.concat('criminalCases/oldPending/miscCase/');
const SHOW_BAIL_APP_OLD = BASE_URL.concat('criminalCases/oldPending/bailApp/');
const SHOW_SPL_LG_OLD = BASE_URL.concat('criminalCases/oldPending/splLG/');
const SHOW_SPL_WH_OLD = BASE_URL.concat('criminalCases/oldPending/splWH/');

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

    const [sessTy1Records, setSessTy1Records] = useState([]);
    const [sessTy1ShowModal, setSessTy1ShowModal] = useState(false);
    const [sessTy2Records, setSessTy2Records] = useState([]);
    const [sessTy2ShowModal, setSessTy2ShowModal] = useState(false);
    const [crlApplRecords, setCrlApplRecords] = useState([]);
    const [crlApplShowModal, setCrlApplShowModal] = useState(false);
    const [crlRevnRecords, setCrlRevnRecords] = useState([]);
    const [crlRevnShowModal, setCrlRevnShowModal] = useState(false);
    const [splNDPSRecords, setSplNDPSRecords] = useState([]);
    const [splNDPSShowModal, setSplNDPSShowModal] = useState(false);
    const [splElecRecords, setSplElecRecords] = useState([]);
    const [splElecShowModal, setSplElecShowModal] = useState(false);
    const [splPOCSORecords, setSplPOCSORecords] = useState([]);
    const [splPOCSOShowModal, setSplPOCSOShowModal] = useState(false);
    const [splPnCRecords, setSplPnCRecords] = useState([]);
    const [splPnCShowModal, setSplPnCShowModal] = useState(false);
    const [splCaseRecords, setSplCaseRecords] = useState([]);
    const [splCaseShowModal, setSplCaseShowModal] = useState(false);
    const [splChildRecords, setSplChildRecords] = useState([]);
    const [splChildShowModal, setSplChildShowModal] = useState(false);
    const [miscCaseRecords, setMiscCaseRecords] = useState([]);
    const [miscCaseShowModal, setMiscCaseShowModal] = useState(false);
    const [bailAppRecords, setBailAppRecords] = useState([]);
    const [bailAppShowModal, setBailAppShowModal] = useState(false);
    const [splLGRecords, setSplLGRecords] = useState([]);
    const [splLGShowModal, setSplLGShowModal] = useState(false);
    const [splWHRecords, setSplWHRecords] = useState([]);
    const [splWHShowModal, setSplWHShowModal] = useState(false);

    const [totalOldPending, setTotalOldPending] = useState(0);

    const [totalSessTy1Old, setTotalSessTy1Old] = useState(0);
    const [sessTy1OldRecords, setSessTy1OldRecords] = useState([]);
    const [sessTy1OldShowModal, setSessTy1OldShowModal] = useState(false);

    const [totalSessTy2Old, setTotalSessTy2Old] = useState(0);
    const [sessTy2OldRecords, setSessTy2OldRecords] = useState([]);
    const [sessTy2OldShowModal, setSessTy2OldShowModal] = useState(false);

    const [totalCAOld, setTotalCAOld] = useState(0);
    const [crlApplOldRecords, setCrlApplOldRecords] = useState([]);
    const [crlApplOldModal, setCrlApplOldModal] = useState(false);

    const [totalCrlRevnOld, setTotalCrlRevnOld] = useState(0);
    const [crlRevnOldRecords, setCrlRevnOldRecords] = useState([]);
    const [crlRevnOldModal, setCrlRevnOldModal] = useState(false);

    const [totalSplNDPSOld, setTotalSplNDPSOld] = useState(0);
    const [splNDPSOldRecords, setSplNDPSOldRecords] = useState([]);
    const [splNDPSOldModal, setSplNDPSOldModal] = useState(false);

    const [totalSplElecOld, setTotalSplElecOld] = useState(0);
    const [splElecOldRecords, setSplElecOldRecords] = useState([]);
    const [splElecOldModal, setSplElecOldModal] = useState(false);

    const [totalSplPOCOld, setTotalSplPOCOld] = useState(0);
    const [splPOCSOOldRecords, setSplPOCSOOldRecords] = useState([]);
    const [splPOCSOOldModal, setSplPOCSOOldModal] = useState(false);

    const [totalSplPnCOld, setTotalSplPnCOld] = useState(0);
    const [splPnCOldRecords, setSplPnCOldRecords] = useState([]);
    const [splPnCOldModal, setSplPnCOldModal] = useState(false);

    const [totalSplCaseOld, setTotalSplCaseOld] = useState(0);
    const [splCaseOldRecords, setSplCaseOldRecords] = useState([]);
    const [splCaseOldModal, setSplCaseOldModal] = useState(false);

    const [totalSplChildOld, setTotalSplChildOld] = useState(0);
    const [splChildOldRecords, setSplChildOldRecords] = useState([]);
    const [splChildOldModal, setSplChildOldModal] = useState(false);

    const [totalMiscCaseOld, setTotalMiscCaseOld] = useState(0);
    const [miscCaseOldRecords, setMiscCaseOldRecords] = useState([]);
    const [miscCaseOldModal, setMiscCaseOldModal] = useState(false);

    const [totalBailAppOld, setTotalBailAppOld] = useState(0);
    const [bailAppOldRecords, setBailAppOldRecords] = useState([]);
    const [bailAppOldModal, setBailAppOldModal] = useState(false);

    const [totalSplLGOld, setTotalSplLGOld] = useState(0);
    const [splLGOldRecords, setSplLGOldRecords] = useState([]);
    const [splLGOldModal, setSplLGOldModal] = useState(false);

    const [totalSplWHOld, setTotalSplWHOld] = useState(0);
    const [splWHOldRecords, setSplWHOldRecords] = useState([]);
    const [splWHOldModal, setSplWHOldModal] = useState(false);

    useEffect(()=>{
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
                    setSessTy1Records(response.data);
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
                    setSessTy2Records(response.data);
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
                    setCrlApplRecords(response.data);
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
                    setCrlRevnRecords(response.data);
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
                    setSplNDPSRecords(response.data);
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
                    setSplElecRecords(response.data);
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
                    setSplPOCSORecords(response.data);
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
                    setSplPnCRecords(response.data);
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
                    setSplCaseRecords(response.data);
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
                    setSplChildRecords(response.data);
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
                    setMiscCaseRecords(response.data);
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
                    setBailAppRecords(response.data);
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
                    setSplLGRecords(response.data);
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
          const showOldPending = async () => {
            try {
                await axios.get(SHOW_CRIMINAL_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalOldPending(response.data.length);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldPendingSessTy1 = async () => {
            try {
                await axios.get(SHOW_SESS_TY1_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSessTy1Old(response.data.length);
                    setSessTy1OldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldPendingSessTy2 = async () => {
            try {
                await axios.get(SHOW_SESS_TY2_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){ 
                    setTotalSessTy2Old(response.data.length);
                    setSessTy2OldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldCrlAppl = async () => {
            try {
                await axios.get(SHOW_CA_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalCAOld(response.data.length);
                    setCrlApplOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldCrlRevn = async () => {
            try {
                await axios.get(SHOW_CRL_REVN_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalCrlRevnOld(response.data.length);
                    setCrlRevnOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldSplNDPS = async () => {
            try {
                await axios.get(SHOW_SPL_NDPS_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSplNDPSOld(response.data.length);
                    setSplNDPSOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldSplElec = async () => {
            try {
                await axios.get(SHOW_SPL_ELEC_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSplElecOld(response.data.length);
                    setSplElecOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldSplPOC = async () => {
            try {
                await axios.get(SHOW_SPL_POCSO_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSplPOCOld(response.data.length);
                    setSplPOCSOOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldPnC = async () => {
            try {
                await axios.get(SHOW_SPL_PNC_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSplPnCOld(response.data.length);
                    setSplPnCOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldSplCase = async () => {
            try {
                await axios.get(SHOW_SPL_CASE_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSplCaseOld(response.data.length);
                    setSplCaseOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldSplChild= async () => {
            try {
                await axios.get(SHOW_SPL_CHILD_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSplChildOld(response.data.length);
                    setSplChildOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldMiscCase = async () => {
            try {
                await axios.get(SHOW_MISC_CASE_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalMiscCaseOld(response.data.length);
                    setMiscCaseOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldBailApp = async () => {
            try {
                await axios.get(SHOW_BAIL_APP_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalBailAppOld(response.data.length);
                    setBailAppOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldSplLG = async () => {
            try {
                await axios.get(SHOW_SPL_LG_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSplLGOld(response.data.length);
                    setSplLGOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
          const showOldSplWH = async () => {
            try {
                await axios.get(SHOW_SPL_WH_OLD.concat(auth.nameOfCourt),{
                    headers: {
                        Authorization : `Bearer ${auth.jwtToken}`
                    }
                }).then(function(response){
                    setTotalSplWHOld(response.data.length);
                    setSplWHOldRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
          };
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
        showOldPending();
        showOldPendingSessTy1();
        showOldPendingSessTy2();
        showOldCrlAppl();
        showOldCrlRevn();
        showOldSplNDPS();
        showOldSplElec();
        showOldSplPOC();
        showOldPnC();
        showOldSplCase();
        showOldSplChild();
        showOldMiscCase();
        showOldBailApp();
        showOldSplLG();
        showOldSplWH();
    },[auth.jwtToken, auth.nameOfCourt])
    
      
    return(
        <>
        <h1 className="dark:text-fuchsia-300 pt-4 pb-4 font-extrabold text-2xl text-stone-700 text-center">Court Name : {auth.nameOfCourt}</h1>
            <div className="lg:flex lg:pl-20 lg:pr-20">
            <div className="rounded basis-1/2">
                    <table className="text-stone-600 dark:text-stone-300 text-base table-auto w-full">
                        <thead>
                            <tr className="[&>*]:p-2 bg-gray-300 dark:bg-slate-800">
                                <td colSpan="4" className="font-bold text-xl mb-2 text-stone-800 dark:text-cyan-300">Criminal Cases at a Glance</td>
                            </tr>
                            <tr className="[&>*]:p-2 bg-gray-200 dark:bg-slate-700">
                                <td colSpan='3' className="border-r border-neutral-300 dark:border-slate-600">Pending cases</td>
                                <td>Old Pending cases</td>
                            </tr>
                        </thead>
                        <tbody className="[&>*:nth-child(odd)]:bg-neutral-300 [&>*:nth-child(even)]:bg-neutral-100 dark:[&>*:nth-child(odd)]:bg-gray-800 dark:[&>*:nth-child(even)]:bg-gray-700">
                        <tr className="[&>*]:p-2">
                            <td>Total Cases</td>
                            <td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600">{totalCriminal} no{totalCriminal <= 1 ? '' : 's'}</td>
                            <td>{totalOldPending} no{totalOldPending <= 1 ? '' : 's'}</td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Sessions Cases (Ty1)</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSessTy1 === 0 ? true : false} onClick={()=>setSessTy1ShowModal(true)}>{totalSessTy1} no{totalSessTy1 <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSessTy1Old === 0 ? true : false} onClick={()=>setSessTy1OldShowModal(true)}>{totalSessTy1Old} no{totalSessTy1Old <=1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Sessions Cases (Ty2)</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSessTy2 === 0 ? true : false} onClick={()=>setSessTy2ShowModal(true)}>{totalSessTy2} no{totalSessTy2 <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSessTy2Old === 0 ? true : false} onClick={()=>setSessTy2OldShowModal(true)}>{totalSessTy2Old} no{totalSessTy2Old <=1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Criminal Appeal</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalCrlAppl === 0 ? true : false} onClick={()=>setCrlApplShowModal(true)}>{totalCrlAppl} no{totalCrlAppl <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalCAOld === 0 ? true : false} onClick={()=>setCrlApplOldModal(true)}>{totalCAOld} no{totalCAOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Criminal Revision</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalCrlRevn === 0 ? true : false} onClick={()=>setCrlRevnShowModal(true)}>{totalCrlRevn} no{totalCrlRevn <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalCrlRevnOld === 0 ? true : false} onClick={()=>setCrlRevnOldModal(true)}>{totalCrlRevnOld} no{totalCrlRevnOld <=1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Special NDPS</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSplNDPS === 0 ? true : false} onClick={()=>setSplNDPSShowModal(true)}>{totalSplNDPS} no{totalSplNDPS <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSplNDPSOld === 0 ? true : false} onClick={()=>setSplNDPSOldModal(true)}>{totalSplNDPSOld} no{totalSplNDPSOld <=1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Special Electricity</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSplElec === 0 ? true : false} onClick={()=>setSplElecShowModal(true)}>{totalSplElec} no{totalSplElec <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSplElecOld === 0 ? true : false} onClick={()=>setSplElecOldModal(true)}>{totalSplElecOld} no{totalSplElecOld <=1 ? '' : 's'}</button></td>
                        </tr> 
                        <tr className="[&>*]:p-2">
                            <td>Special POCSO</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSplPOCSO === 0 ? true : false} onClick={()=>setSplPOCSOShowModal(true)}>{totalSplPOCSO} no{totalSplPOCSO <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSplPOCOld === 0 ? true : false} onClick={()=>setSplPOCSOOldModal(true)}>{totalSplPOCOld} no{totalSplPOCOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Special P & C</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSplPnC === 0 ? true : false} onClick={()=>setSplPnCShowModal(true)}>{totalSplPnC} no{totalSplPnC <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSplPnCOld === 0 ? true : false} onClick={()=>setSplPnCOldModal(true)}>{totalSplPnCOld} no{totalSplPnCOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Special Case</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSplCase === 0 ? true : false} onClick={()=>setSplCaseShowModal(true)}>{totalSplCase} no{totalSplCase <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSplCaseOld === 0 ? true : false} onClick={()=>setSplCaseOldModal(true)}>{totalSplCaseOld} no{totalSplCaseOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Special Child</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSplChild === 0 ? true : false} onClick={()=>setSplChildShowModal(true)}>{totalSplChild} no{totalSplChild <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSplChildOld === 0 ? true : false} onClick={()=>setSplChildOldModal(true)}>{totalSplChildOld} no{totalSplChildOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Misc Case</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscCase === 0 ? true : false} onClick={()=>setMiscCaseShowModal(true)}>{totalMiscCase} no{totalMiscCase <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalMiscCaseOld === 0 ? true : false} onClick={()=>setMiscCaseOldModal(true)}>{totalMiscCaseOld} no{totalMiscCaseOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Misc Criminal</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscCriminal === 0 ? true : false} onClick={()=>setBailAppShowModal(true)}>{totalMiscCriminal} no{totalMiscCriminal <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalBailAppOld === 0 ? true : false} onClick={()=>setBailAppOldModal(true)}>{totalBailAppOld} no{totalBailAppOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Special Land Grabbing</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSplLG === 0 ? true : false} onClick={()=>setSplLGShowModal(true)}>{totalSplLG} no{totalSplLG <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSplLGOld === 0 ? true : false} onClick={()=>setSplLGOldModal(true)}>{totalSplLGOld} no{totalSplLGOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        <tr className="[&>*]:p-2">
                            <td>Special Witch Hunting</td><td>:</td>
                            <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalSplWH === 0 ? true : false} onClick={()=>setSplWHShowModal(true)}>{totalSplWH} no{totalSplWH <= 1 ? '' : 's'}</button></td>
                            <td><button disabled={totalSplWHOld === 0 ? true : false} onClick={()=>setSplWHOldModal(true)}>{totalSplWHOld} no{totalSplWHOld <= 1 ? '' : 's'}</button></td>
                        </tr>
                        </tbody>
                    </table>
                    
                    {sessTy1ShowModal && <CaseListModal closeModal={()=>setSessTy1ShowModal(false)} caseRecords={sessTy1Records}/>}
                    {sessTy2ShowModal && <CaseListModal closeModal={()=>setSessTy2ShowModal(false)} caseRecords={sessTy2Records}/>}
                    {crlApplShowModal && <CaseListModal closeModal={()=>setCrlApplShowModal(false)} caseRecords={crlApplRecords}/>}
                    {crlRevnShowModal && <CaseListModal closeModal={()=>setCrlRevnShowModal(false)} caseRecords={crlRevnRecords}/>}
                    {splNDPSShowModal && <CaseListModal closeModal={()=>setSplNDPSShowModal(false)} caseRecords={splNDPSRecords}/>}
                    {splElecShowModal && <CaseListModal closeModal={()=>setSplElecShowModal(false)} caseRecords={splElecRecords}/>}
                    {splPnCShowModal && <CaseListModal closeModal={()=>setSplPnCShowModal(false)} caseRecords={splPnCRecords}/>}
                    {splPOCSOShowModal && <CaseListModal closeModal={()=>setSplPOCSOShowModal(false)} caseRecords={splPOCSORecords}/>}
                    {splCaseShowModal && <CaseListModal closeModal={()=>setSplCaseShowModal(false)} caseRecords={splCaseRecords}/>}
                    {splChildShowModal && <CaseListModal closeModal={()=>setSplChildShowModal(false)} caseRecords={splChildRecords}/>}
                    {miscCaseShowModal && <CaseListModal closeModal={()=>setMiscCaseShowModal(false)} caseRecords={miscCaseRecords} />}
                    {bailAppShowModal && <CaseListModal closeModal={()=>setBailAppShowModal(false)} caseRecords={bailAppRecords} />}
                    {splLGShowModal && <CaseListModal closeModal={()=>setSplLGShowModal(false)} caseRecords={splLGRecords} />}
                    {splWHShowModal && <CaseListModal closeModal={()=>setSplWHShowModal(false)} caseRecords={splWHRecords} />}
                    {sessTy1OldShowModal && <CaseListModal closeModal={()=>setSessTy1OldShowModal(false)} caseRecords={sessTy1OldRecords} />}
                    {sessTy2OldShowModal && <CaseListModal closeModal={()=>setSessTy2OldShowModal(false)} caseRecords={sessTy2OldRecords} />}
                    {crlApplOldModal && <CaseListModal closeModal={()=>setCrlApplOldModal(false)} caseRecords={crlApplOldRecords} />}
                    {crlRevnOldModal && <CaseListModal closeModal={()=>setCrlRevnOldModal(false)} caseRecords={crlRevnOldRecords} />}
                    {splNDPSOldModal && <CaseListModal closeModal={()=>setSplNDPSOldModal(false)} caseRecords={splNDPSOldRecords} />}
                    {splElecOldModal && <CaseListModal closeModal={()=>setSplElecOldModal(false)} caseRecords={splElecOldRecords} />}
                    {splPOCSOOldModal && <CaseListModal closeModal={()=>setSplPOCSOOldModal(false)} caseRecords={splPOCSOOldRecords} />}
                    {splPnCOldModal && <CaseListModal closeModal={()=>setSplPnCOldModal(false)} caseRecords={splPnCOldRecords} />}
                    {splCaseOldModal && <CaseListModal closeModal={()=>setSplCaseOldModal(false)} caseRecords={splCaseOldRecords} />}
                    {splChildOldModal && <CaseListModal closeModal={()=>setSplChildOldModal(false)} caseRecords={splChildOldRecords} />}
                    {miscCaseOldModal && <CaseListModal closeModal={()=>setMiscCaseOldModal(false)} caseRecords={miscCaseOldRecords} />}
                    {bailAppOldModal && <CaseListModal closeModal={()=>setBailAppOldModal(false)} caseRecords={bailAppOldRecords} />}
                    {splLGOldModal && <CaseListModal closeModal={()=>setSplLGOldModal(false)} caseRecords={splLGOldRecords} />}
                    {splWHOldModal && <CaseListModal closeModal={()=>setSplWHOldModal(false)} caseRecords={splWHOldRecords} />}
            </div>

            <div className="rounded dark:bg-slate-800 basis-1/2 ml-8">
                <DisplayCivilData />
            </div>
        </div>
        </>
    );
}
export default DisplayData;