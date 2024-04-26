import React , {useState, useEffect} from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import { faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectComponent from "../components/Common/SelectComponent";
import {courtName,caseTypeArr,criminalCaseCategoryArr,civilCaseCategoryArr} from '../components/Common/Arrays';
import InputComponent from "../components/Common/InputComponent";
import {CASE_NUMBER_REGEX, CHAR_REGEX, SEC_REGEX, DATE_REGEX} from "../components/Common/ValidationConstants"
import useAuth from "../components/hooks/useAuth";
import axios from 'axios';
import Swal from "sweetalert2";

const ADD_CASE_URL = 'http://localhost:5050/api/v1/cases';
const date = new Date();

const SelectLayout = () => {

    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/pendingList'; 

    const [nameOfCourt, setNameOfCourt] = useState('Choose Court');
    const [validCourtName, setValidCourtName] = useState(false);
    const [courtNameFocus, setCourtNameFocus] = useState(false);

    const [caseType, setCaseType] = useState('Choose Case Type');
    const [validCaseType, setValidCaseType] = useState(false);
    const [caseTypeFocus, setCaseTypeFocus] = useState(false);

    const [caseCategory, setCaseCategory] = useState('Choose Case Category');
    const [validCaseCategory, setValidCaseCategory] = useState(false);
    const [caseCategoryFocus, setCaseCategoryFocus] = useState(false);

    const [caseNumber, setCaseNumber] = useState('');
    const [validCaseNumber, setValidCaseNumber] = useState(false);
    const [caseNumberFocus, setCaseNumberFocus] = useState(false);

    const [firstPartyName, setFirstPartyName] = useState('');
    const [validFirstPartyName, setValidFirstPartyName] = useState(false);
    const [firstPartyNameFocus, setFirstPartyNameFocus] = useState(false);

    const [secondPartyName, setSecondPartyName] = useState('');
    const [validSecondPartyName, setValidSecondPartyName] = useState(false);
    const [secondPartyNameFocus, setSecondPartyNameFocus] = useState(false);

    const [section, setSection] = useState('');
    const [validSection, setValidSection] = useState(false);
    const [sectionFocus, setSectionFocus] = useState(false);

    const [registrationDate, setRegistrationDate] = useState('');
    const [validRegistrationDate, setValidRegiatrationDate] = useState(false);
    const [registrationDateFocus, setRegistrationDateFocus] = useState(false);

    useEffect(()=>{
        if(nameOfCourt === "Choose Court") {
            setCourtNameFocus(true);
            setValidCourtName(false);
        }
        else {
            setCourtNameFocus(false);
            setValidCourtName(true);
        }
    },[nameOfCourt]);

    useEffect(()=>{
        if(caseType === "Choose Case Type") {
            setCaseTypeFocus(true);
            setValidCaseType(false);
        } else {
            setCaseTypeFocus(false);
            setValidCaseType(true);
        }  
    },[caseType]);

    useEffect(()=>{
        if(caseCategory === "Choose Case Category") {
            setCaseCategoryFocus(true);
            setValidCaseCategory(false);
        } else {
            setCaseCategoryFocus(false);
            setValidCaseCategory(true);
        }
    },[caseCategory]);

    useEffect(()=> {
        const result = CASE_NUMBER_REGEX.test(caseNumber)
        setValidCaseNumber(result);
    }, [caseNumber]);

    useEffect(()=> {
        const result = CHAR_REGEX.test(firstPartyName);
        setValidFirstPartyName(result);
    }, [firstPartyName]);

    useEffect(()=> {
        const result = CHAR_REGEX.test(secondPartyName);
        setValidSecondPartyName(result);
    }, [secondPartyName]);

    useEffect(()=>{
        const result = SEC_REGEX.test(section)
            setValidSection(result);
    },[section]);

    useEffect(()=>{
        const result = DATE_REGEX.test(registrationDate)
            setValidRegiatrationDate(result); 
            age(registrationDate);
    }, [registrationDate]);

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


    const submitData = async (e) => {
        e.preventDefault();
            if(validCourtName && validCaseType && validCaseCategory && 
                validCaseNumber && validFirstPartyName && validSecondPartyName 
                && validSection && validRegistrationDate){
            const data = {
                registrationDate: registrationDate,
                caseCategory: caseCategory,
                caseNumber: caseNumber,
                caseType: caseType,
                courtName: nameOfCourt,
                firstPartyName: firstPartyName,
                secondPartyName: secondPartyName,
                sections:section,
                ageOfCase:year+" Year "+month+" Month "+day+" Day"
            }
            try {
                const response = await axios.post(ADD_CASE_URL, data,
                    {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                          }    
                    });
                console.log(JSON.stringify(response?.data));
                Swal.fire({
                    title: "Data saved successfully",
                    text: "Want to add another data?",
                    icon: "success",
                    allowOutsideClick: false,
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes"
                  }).then((result) => {
                    if (result.isConfirmed) {
                    navigate( from, { replace: true});
                     
                    }
                  });

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
    return (
        <>
        <form className="pl-10 pr-10" onSubmit={submitData}> 
            <div className="grid mt-6 mb-6">
                <SelectComponent 
                id="courtName" 
                defaultValue = "Choose Court"
                values={courtName} 
                onChange={event => setNameOfCourt(event.target.value)}
                ariaInvalid={validCourtName ? "false" : "true"}
                ariaDescribedby="courtNameNote"
                onFocus={()=>setCourtNameFocus(true)}
                />
                    <p id="courtNameNote" className={courtNameFocus
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Please select a court to further procced.
                    </p>
            </div>     
            <div className="grid mt-6 mb-6 ">
                <SelectComponent 
                    id= "caseType" 
                    defaultValue = "Choose Case Type" 
                    values={caseTypeArr} 
                    onChange={event => setCaseType(event.target.value)}
                    ariaInvalid={validCaseType ? "false" : "true"}
                    ariaDescribedby="caseTypeNote"
                    onFocus={()=>setCaseTypeFocus(true)} 
                    />
                    <p id="caseTypeNote" className={ caseTypeFocus
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Please select a case type to further procced.
                    </p>
            </div>
            { (caseType === 'Civil' || caseType === 'Criminal') &&
                <div className="grid mt-6 mb-6">
                    <SelectComponent 
                        id="caseCategory" 
                        defaultValue="Choose Case Category" 
                        values={caseType==='Civil'? civilCaseCategoryArr:criminalCaseCategoryArr}
                        onChange={event=> setCaseCategory(event.target.value)}
                        ariaInvalid={validCaseCategory ? "false" : "true"}
                        ariaDescribedby="caseCategoryNote"
                        onFocus={()=>setCaseCategoryFocus(true)} 
                        />
                        <p id="caseCategoryNote" className={ caseCategoryFocus
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Please select a case category to further procced.
                    </p>
                </div>
            }
            
            {
                (caseType === 'Civil' || caseType === 'Criminal') && 
                <>
                    <div className="grid mt-6 mb-6">
                        <InputComponent
                            id="caseNumber" 
                            placeholder="Enter case number(00/0000)" 
                            onChange={event => setCaseNumber(event.target.value)}
                            required
                            ariaInvalid={validCaseNumber ? "false" : "true"}
                            ariaDescribedby="caseNumberNote"
                            onFocus={()=>setCaseNumberFocus(true)}
                            /> 
                        <p id="caseNumberNote" className={caseNumberFocus && caseNumber && !validCaseNumber
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Case number should be numeric of 00/0000 format.
                        </p>
                    </div>
                    <div className="grid mt-6 mb-6">
                        <InputComponent 
                            id="firstPartyName"
                            placeholder="Enter First Party Name" 
                            onChange={event => setFirstPartyName(event.target.value)}
                            required
                            ariaInvalid={validFirstPartyName ? "false" : "true"}
                            ariaDescribedby="firstPartyNameNote"
                            onFocus={()=>setFirstPartyNameFocus(true)}
                            /> 
                        <p id="firstPartyNameNote" className={firstPartyNameFocus && firstPartyName && !validFirstPartyName
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Party name should be in text.
                        </p>
                    </div>
                    <div className="grid mt-6 mb-6">
                        <InputComponent 
                            id="secondPartyName"
                            placeholder="Enter Second Party Name" 
                            onChange={event => setSecondPartyName(event.target.value)} 
                            required
                            ariaInvalid={validSecondPartyName ? "false" : "true"}
                            ariaDescribedby="secondPartyNameNote"
                            onFocus={()=>setSecondPartyNameFocus(true)}
                            />
                        <p id="secondPartyNameNote" className={secondPartyNameFocus && secondPartyName && !validSecondPartyName
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Party name should be in text.
                        </p> 
                    </div>
                    <div className="grid mt-6 mb-6">
                        <InputComponent 
                            id="section"
                            placeholder="Enter Section" 
                            onChange={event => setSection(event.target.value)}
                            required
                            ariaInvalid={validSection ? "false" : "true"}
                            ariaDescribedby="sectionNote"
                            onFocus={()=>setSectionFocus(true)}
                            /> 
                        <p id="sectionNote" className={sectionFocus && section && !validSection
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Donot accept spacial characters and first letter is always be number or text.
                        </p> 
                    </div>
                    <div className="grid mt-6 mb-6">
                        <InputComponent 
                            id="registrationDate"
                            placeholder="Registration Date" 
                            onChange={event => setRegistrationDate(event.target.value)}
                            required
                            ariaInvalid={validRegistrationDate ? "false" : "true"}
                            ariaDescribedby="registrationDateNote"
                            onFocus={()=>setRegistrationDateFocus(true)}
                            /> 
                        <p id="registrationDateNote" className={registrationDateFocus && registrationDate && !validRegistrationDate
                        ? "text-red-400" : "hidden"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            Only accept DD/MM/YYYY format eg. 01/05/1992
                        </p> 
                    </div>
                </>
            }       
    <button type="submit" 
        className="text-white bg-slate-800 pt-2 pb-2 pl-6 pr-6 rounded-lg hover:bg-slate-700"
        >Add</button>
        {/* <button onClick={()=>age()}>Check</button> */}
</form>
</>
    );
}
export default SelectLayout;




 