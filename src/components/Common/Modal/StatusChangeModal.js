import React, { useState, useEffect} from "react";
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import {  useNavigate, useLocation } from "react-router-dom";
// import { CHAR_REGEX_COURT_NAME, CHAR_REGEX_CASE_CAT, 
//     CASE_NUMBER_REGEX, SEC_REGEX, ONLY_CHAR_REGEX, DATE_REGEX } from "../ValidationConstants";
import Swal from "sweetalert2";
import SelectComponent from "../SelectComponent";

const GET_CASESBYID_URL = 'http://localhost:5050/api/v1/cases/';
const UPDATE_CASE_STATUS_URL = 'http://localhost:5050/api/v1/cases/updateStatus/';


const StatusChangeModal = ({closeModal, dataId}) => {

    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/pendingList'; 

    const [caseId, setCaseId] = useState();
    const [caseCategory, setCaseCategory] = useState(); 
    const [caseNumber, setCaseNumber] = useState();
    const [caseSection, setCaseSection] = useState();
    const [registrationDate, setRegistrationDate] = useState();
    const [status, setStatus] = useState('');
    const [statusCategory, setStatusCategory] = useState('');
    const [disposedType, setDisposedType] = useState('');
    const [disposeTransferDate, setDisposeTransferDate] = useState('');
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    
    useEffect(()=>{
        const showData = async () => { 
            await axios.get(GET_CASESBYID_URL.concat(dataId), {
              headers: {
                Authorization : `Bearer ${auth.jwtToken}`
              }
            }   
            )
            .then(function (response) { 
                setCaseId(response.data.id);
                setCaseCategory(response.data.caseCategory);
                setCaseNumber(response.data.caseNumber);
                setCaseSection(response.data.sections);
                setRegistrationDate(response.data.registrationDate);
                setStatus(response.data.status); 
            })
          };
        if(dataId) {
            showData();  
        }
        
    },[dataId,auth.jwtToken])
    useEffect(()=>{
        const age = (registrationDate, disposeTransferDate) => {
            const DisposeTransferDay = disposeTransferDate.substring(0,2);
            const regDay = registrationDate.substring(0,2);
            const DisposeTransferMonth = disposeTransferDate.substring(3,5);
            const regMonth = registrationDate.substring(3,5);
            const DisposeTransferYear = disposeTransferDate.substring(6,10);
            const regYear = registrationDate.substring(6,10);
            
             if(DisposeTransferDay < regDay) {
                const calculateDay = (30 + DisposeTransferDay) - regDay;
                setDay(calculateDay);
                if(DisposeTransferMonth < regMonth) {
                    const calculateMonth = (12 + (DisposeTransferMonth - 1)) - regMonth;
                    const calculateYear = (DisposeTransferYear - 1) - regYear;
                    setMonth(calculateMonth);
                    setYear(calculateYear);
                } else {
                    const calculateMonth = (DisposeTransferMonth - 1) - regMonth;
                    const calculateYear = DisposeTransferYear - regYear;
                    setMonth(calculateMonth);
                    setYear(calculateYear);
                }
             } else {
                const calculateDay = DisposeTransferDay - regDay;
                setDay(calculateDay);
                if(DisposeTransferMonth < regMonth) {
                    const calculateMonth = (12 + (DisposeTransferMonth)) - regMonth;
                    const calculateYear = (DisposeTransferYear - 1) - regYear;
                    setMonth(calculateMonth);
                    setYear(calculateYear);
                } else {
                    const calculateMonth = (DisposeTransferMonth) - regMonth;
                    const calculateYear = DisposeTransferYear - regYear;
                    setMonth(calculateMonth);
                    setYear(calculateYear);
                }
             } 
            };
            if(disposeTransferDate) {
                age(registrationDate,disposeTransferDate);
            }
    },[registrationDate,disposeTransferDate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(disposeTransferDate) {   
            const data = {
                ageOfCase: year+" Year "+month+" Month "+day+" Day",
                status: statusCategory,
                disposedType: disposedType,
                disposeTransferDate: disposeTransferDate,
            }
            try {
                const response = await axios.put(UPDATE_CASE_STATUS_URL.concat(dataId), data,
                    {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }    
                    });
                console.log(JSON.stringify(response?.data));
                navigate( from, { replace: true});
                closeModal();
            } catch(err) {
                console.log(err);
            }
        } else {
            Swal.fire({
                title: "Please fill up the fields!",
                icon: "warning",
                confirmButtonColor:"#3085d6",
                confirmButtonText:"OK"
            })
        }    
    }
    
    return(
        <>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                            <div className="bg-white dark:bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start pt-2">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="font-semibold text-xl leading-6 text-gray-900 dark:text-slate-300" id="modal-title">Assam</h3>
                                            <div className="mt-2">
                                                <table className="table-auto text-stone-600 dark:text-white">
                                                    <thead>
                                                    <tr className="border">
                                                        <th className="px-2 py-2 border">Case Id</th>
                                                        <th className="px-2 py-2 border">Case Number</th>
                                                        <th className="px-2 py-2 border">Sections</th>
                                                        <th className="px-2 py-2 border">Registration Date</th>
                                                        <th className="px-2 py-2 border">Status</th>
                                                        {(statusCategory === 'Disposed' || statusCategory === 'Transfer') &&
                                                         <>
                                                            <th className="px-2 py-2 border">Disposed Type</th>
                                                            <th className="px-2 py-2 border">Disposed/Transfer Date</th>
                                                         </>
                                                        }
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="px-2 py-2 border">{caseId}</td>
                                                        <td className="px-2 py-2 border">{caseCategory} {caseNumber}</td>
                                                        <td className="px-2 py-2 border">{caseSection}</td>
                                                        <td className="px-2 py-2 border">{registrationDate}</td>
                                                        <td className="px-2 py-2 border">
                                                            <SelectComponent
                                                                defaultValue={status}
                                                                values={status === 'Pending' ? ['Disposed','Transfer'] : ['']}
                                                                onChange={event=> setStatusCategory(event.target.value)}
                                                            />
                                                        </td>
                                                        {(statusCategory === 'Disposed' || statusCategory === 'Transfer') &&
                                                        <>
                                                            <td className="px-2 py-2 border">
                                                                <SelectComponent 
                                                                values = {['Contested','Uncontested']}
                                                                onChange={event=>setDisposedType(event.target.value)}
                                                                />
                                                            </td>
                                                            <td className="px-2 py-2 border">
                                                                <input 
                                                                className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                                                type="text"
                                                                id="disposedTransferDate"
                                                                autoComplete="off"
                                                                onChange={(e)=>setDisposeTransferDate(e.target.value)}
                                                                required
                                                                />
                                                            </td>
                                                         </>
                                                        }
                                                    </tr>
                                                    </tbody> 
                                                </table>
                                                <div className="py-3 sm:flex sm:flex-row-reverse">
                                                    <button type="button" className=" hover:bg-red-400 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto" onClick={closeModal}>Cancel</button>&nbsp;
                                                    <button type="button" className=" hover:bg-red-400 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto" onClick={handleSubmit}>Change Status</button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
        </div>
    </>
    );
}

export default StatusChangeModal;