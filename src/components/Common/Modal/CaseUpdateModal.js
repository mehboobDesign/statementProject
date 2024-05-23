import React, { useState, useEffect} from "react";
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import {  useNavigate, useLocation } from "react-router-dom";
import { CHAR_REGEX_COURT_NAME, CHAR_REGEX_CASE_CAT, 
    CASE_NUMBER_REGEX, SEC_REGEX, ONLY_CHAR_REGEX, DATE_REGEX } from "../ValidationConstants";
import Swal from "sweetalert2";
import SelectComponent from "../SelectComponent";

const GET_CASESBYID_URL = 'http://localhost:5050/api/v1/cases/';
const UPDATE_CASE_URL = 'http://localhost:5050/api/v1/cases/update/';
const date = new Date();


const CaseUpdateModal = ({closeModal, dataId}) => {

    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/pendingList'; 

    const [courtName, setCourtName] = useState('');
    const [validCourtName, setValidCourtName] = useState(false);
    const [courtNameFocus, setCourtNameFocus] = useState(false);

    const [caseType, setCaseType] = useState('');
    const [validCaseType, setValidCaseType] = useState(false);
    const [caseTypeFocus, setCaseTypeFocus] = useState(false);

    const [caseCategory, setCaseCategory] = useState('');
    const [validCaseCategory, setValidCaseCategory] = useState(false);
    const [caseCategoryFocus, setCaseCategoryFocus] = useState(false);

    const [caseNumber, setCaseNumber] = useState('');
    const [validCaseNumber, setValidCaseNumber] = useState(false);
    const [caseNumberFocus, setCaseNumberFocus] = useState(false);

    const [sections, setSections] = useState('');
    const [validSections, setValidSections] = useState(false);
    const [sectionsFocus, setSectionsFocus] = useState(false);

    const [firstParty, setFirstParty] = useState('');
    const [validFirstParty, setValidFirstParty] = useState(false);
    const [firstPartyFocus, setFirstPartyFocus] = useState(false);

    const [secondParty, setSecondParty] = useState('');
    const [validSecondParty, setValidSecondParty] = useState(false);
    const [secondPartyFocus, setSecondPartyFocus] = useState(false);

    const [registrationDate, setRegistrationDate] = useState('');
    const [validRegistrationDate, setValidRegiatrationDate] = useState(false);
    const [registrationDateFocus, setRegistrationDateFocus] = useState(false);

    const [status, setStatus] = useState('');
    const [statusCategory, setStatusCategory] = useState('');
    const [disposedType, setDisposedType] = useState('');
    const [disposeTransferDate, setDisposeTransferDate] = useState('');

    useEffect(()=> {
        const result = CHAR_REGEX_COURT_NAME.test(courtName);
        setValidCourtName(result);
    }, [courtName]);

    useEffect(()=> {
        if(caseType === "Criminal" || caseType === "Civil"){
            setValidCaseType(true);
        } else
            setValidCaseType(false);
    }, [caseType]);

    useEffect(()=>{
        const result = CHAR_REGEX_CASE_CAT.test(caseCategory);
        setValidCaseCategory(result);
    },[caseCategory]);

    useEffect(()=>{
        const result = CASE_NUMBER_REGEX.test(caseNumber);
        setValidCaseNumber(result);
    },[caseNumber]);

    useEffect(()=>{
        const result = SEC_REGEX.test(sections);
        setValidSections(result);
    },[sections]);

    useEffect(()=>{
        const result = ONLY_CHAR_REGEX.test(firstParty);
        setValidFirstParty(result);
    },[firstParty]);

    useEffect(()=>{
        const result = ONLY_CHAR_REGEX.test(secondParty);
        setValidSecondParty(result);
    },[secondParty]);

    useEffect(()=>{
        const result = DATE_REGEX.test(registrationDate);
        setValidRegiatrationDate(result);
        age(registrationDate);
    },[registrationDate]);
    
    useEffect(()=>{
        if(dataId) {
            showData();  
        }
        // eslint-disable-next-line 
    },[dataId])

      const showData = async () => { 
        await axios.get(GET_CASESBYID_URL.concat(dataId), {
          headers: {
            Authorization : `Bearer ${auth.jwtToken}`
          }
        }   
        )
        .then(function (response) {
            setCourtName(response.data.courtName);
            setCaseType(response.data.caseType);
            setCaseCategory(response.data.caseCategory);
            setCaseNumber(response.data.caseNumber);
            setSections(response.data.sections);
            setFirstParty(response.data.firstPartyName);
            setSecondParty(response.data.secondPartyName);
            setRegistrationDate(response.data.registrationDate);
            setStatus(response.data.status);
            
        })
      };

    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();

    const age = (registrationDate) => {
            const currentDay = date.getDate();
            const regDay = registrationDate.substring(0,2);
            const currentMonth = date.getMonth() + 1;
            const regMonth = registrationDate.substring(3,5);
            const currentYear = date.getFullYear(); 
            const regYear = registrationDate.substring(6,10);
            
             if(currentDay < regDay) {
                const calculateDay = (30 + currentDay) - regDay;
                setDay(calculateDay);
                if(currentMonth < regMonth) {
                    const calculateMonth = (12 + (currentMonth - 1)) - regMonth;
                    const calculateYear = (currentYear - 1) - regYear;
                    setMonth(calculateMonth);
                    setYear(calculateYear);
                } else {
                    const calculateMonth = (currentMonth - 1) - regMonth;
                    const calculateYear = currentYear - regYear;
                    setMonth(calculateMonth);
                    setYear(calculateYear);
                }
             } else {
                const calculateDay = currentDay - regDay;
                setDay(calculateDay);
                if(currentMonth < regMonth) {
                    const calculateMonth = (12 + (currentMonth)) - regMonth;
                    const calculateYear = (currentYear - 1) - regYear;
                    setMonth(calculateMonth);
                    setYear(calculateYear);
                } else {
                    const calculateMonth = (currentMonth) - regMonth;
                    const calculateYear = currentYear - regYear;
                    setMonth(calculateMonth);
                    setYear(calculateYear);
                }
             }  
    }

      const handleSubmit = async (e) => {
        e.preventDefault();
        if(validCourtName && validCaseType && validCaseCategory && 
            validCaseNumber && validFirstParty && validSecondParty 
            && validSections && validRegistrationDate){
        const data = {
            registrationDate: registrationDate,
            caseCategory: caseCategory,
            caseNumber: caseNumber,
            caseType: caseType,
            courtName: courtName,
            firstPartyName: firstParty,
            secondPartyName: secondParty,
            sections:sections,
            ageOfCase:year+" Year "+month+" Month "+day+" Day",
            status:statusCategory,
            disposedType: disposedType,
            disposeTransferDate: disposeTransferDate,
        }
        try {
            const response = await axios.put(UPDATE_CASE_URL.concat(dataId), data,
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
            <div className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
             <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white dark:bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start pt-2">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-slate-700 sm:mx-0 sm:h-10 sm:w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-none dark:fill-slate-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 className="font-semibold text-xl leading-6 text-gray-900 dark:text-slate-300" id="modal-title">Update Case Details</h3>
                                <div className="mt-2">
                            <form onSubmit={handleSubmit} className="pt-3">
                                <input
                                    className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none"
                                    type="text"
                                    id="courtName"
                                    //defaultValue={courtName}
                                    value={courtName}
                                    autoComplete="off"
                                    onChange={(e)=>setCourtName(e.target.value)}
                                    required
                                    aria-invalid={validCourtName ? "false" : "true"}
                                    aria-describedby="courtNameNote"
                                    onFocus={()=>setCourtNameFocus(true)}
                                    onBlur={()=>setCourtNameFocus(false)}
                                />
                                <p id="courtNameNote" className={courtNameFocus && !validCourtName
                                    ? "text-red-400" : "hidden"}>
                                     Court Name should be of characters, no special characters are allowed except '&'. Also first letter should not be space.
                                </p>
                                <input
                                    className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                    type="text"
                                    id="caseType"
                                    defaultValue={caseType}
                                    autoComplete="off"
                                    onChange={(e)=>setCaseType(e.target.value)}
                                    required
                                    aria-invalid={validCaseType ? "false" : "true"}
                                    aria-describedby="caseTypeNote"
                                    onFocus={()=>setCaseTypeFocus(true)}
                                    onBlur={()=>setCaseTypeFocus(false)}
                                />
                                <p id="caseTypeNote" className={caseTypeFocus && !validCaseType
                                    ? "text-red-400" : "hidden"}>
                                     Case Type should Civil or Criminal
                                </p>
                                <input
                                    className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                    type="text"
                                    id="caseCategory"
                                    defaultValue={caseCategory}
                                    autoComplete="off"
                                    onChange={(e)=>setCaseCategory(e.target.value)}
                                    required
                                    aria-invalid={validCaseCategory ? "false" : "true"}
                                    aria-describedby="caseCategoryNote"
                                    onFocus={()=>setCaseCategoryFocus(true)}
                                    onBlur={()=>setCaseCategoryFocus(false)}
                                />
                                <p id="caseCategoryNote" className={caseCategoryFocus && !validCaseCategory
                                    ? "text-red-400" : "hidden"}>
                                     Case Category shuold not be blank.
                                </p>
                                <input
                                    className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                    type="text"
                                    id="caseNumber"
                                    defaultValue={caseNumber}
                                    autoComplete="off"
                                    onChange={(e)=>setCaseNumber(e.target.value)}
                                    required
                                    aria-invalid={validCaseNumber ? "false" : "true"}
                                    aria-describedby="caseNumberNote"
                                    onFocus={()=>setCaseNumberFocus(true)}
                                    onBlur={()=>setCaseNumberFocus(false)}
                                />
                                <p id="caseNumberNote" className={caseNumberFocus && !validCaseNumber
                                    ? "text-red-400" : "hidden"}>
                                     Case Number should be 0/0000 format
                                </p>
                                <input
                                    className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                    type="text"
                                    id="sections"
                                    defaultValue={sections}
                                    autoComplete="off"
                                    onChange={(e)=>setSections(e.target.value)}
                                    required
                                    aria-invalid={validSections ? "false" : "true"}
                                    aria-describedby="sectionsNote"
                                    onFocus={()=>setSectionsFocus(true)}
                                    onBlur={()=>setSectionsFocus(false)}
                                />
                                <p id="sectionsNote" className={sectionsFocus && !validSections
                                    ? "text-red-400" : "hidden"}>
                                     Sections should not be empty
                                </p> 
                                <input
                                    className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                    type="text"
                                    id="firstParty"
                                    defaultValue={firstParty}
                                    autoComplete="off"
                                    onChange={(e)=>setFirstParty(e.target.value)}
                                    required
                                    aria-invalid={validFirstParty ? "false" : "true"}
                                    aria-describedby="firstPartyNote"
                                    onFocus={()=>setFirstPartyFocus(true)}
                                    onBlur={()=>setFirstPartyFocus(false)}
                                />
                                <p id="firstPartyNote" className={firstPartyFocus && !validFirstParty
                                    ? "text-red-400" : "hidden"}>
                                     Characters only
                                </p>
                                <input
                                    className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                    type="text"
                                    id="secondParty"
                                    defaultValue={secondParty}
                                    autoComplete="off"
                                    onChange={(e)=>setSecondParty(e.target.value)}
                                    required
                                    aria-invalid={validSecondParty ? "false" : "true"}
                                    aria-describedby="firstSecondNote"
                                    onFocus={()=>setSecondPartyFocus(true)}
                                    onBlur={()=>setSecondPartyFocus(false)}
                                />
                                <p id="firstSecondNote" className={secondPartyFocus && !validSecondParty
                                    ? "text-red-400" : "hidden"}>
                                     Characters only
                                </p>
                                <input
                                    className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                    type="text"
                                    id="registrationDate"
                                    defaultValue={registrationDate}
                                    autoComplete="off"
                                    onChange={(e)=>setRegistrationDate(e.target.value)}
                                    required
                                    aria-invalid={validRegistrationDate ? "false" : "true"}
                                    aria-describedby="registrationDateNote"
                                    onFocus={()=>setRegistrationDateFocus(true)}
                                    onBlur={()=>setRegistrationDateFocus(false)}
                                />
                                <p id="firstSecondNote" className={registrationDateFocus && !validRegistrationDate
                                    ? "text-red-400" : "hidden"}>
                                     Registration Date of dd/mm/yyyy format
                                </p>
                                
                                <SelectComponent 
                                    defaultValue={status}
                                    values={status === 'Pending' ? ['Disposed','Transfer'] : ['']}
                                    onChange={event=> setStatusCategory(event.target.value)}
                                />
                                { (statusCategory === 'Disposed' || statusCategory === 'Transfer') && 
                                    <>
                                        <SelectComponent 
                                            defaultValue="Disposed Type"
                                            values = {['Contested','Uncontested']}
                                            onChange={event=>setDisposedType(event.target.value)}
                                        />
                                        <input 
                                            className="bg-slate-100 w-96 dark:bg-slate-700 p-2 rounded-lg text-gray-400 focus:outline-none mt-2"
                                            type="text"
                                            id="disposedDate"
                                            defaultValue='Disposed Date/Transfer Date'
                                            autoComplete="off"
                                            onChange={(e)=>setDisposeTransferDate(e.target.value)}
                                            required
                                            // aria-invalid={validRegistrationDate ? "false" : "true"}
                                            // aria-describedby="registrationDateNote"
                                            // onFocus={()=>setRegistrationDateFocus(true)}
                                            // onBlur={()=>setRegistrationDateFocus(false)}
                                        />
                                    </>
                                    
                                }
                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Update</button>
                                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={closeModal}>Cancel</button>
                                </div>
                            </form>
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

export default CaseUpdateModal;