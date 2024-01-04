import React , {useState, useEffect} from "react";
//import { Link } from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import SelectComponent from "../components/Common/SelectComponent";
import {courtName,caseTypeArr,criminalCaseCategoryArr,civilCaseCategoryArr} from '../components/Common/Arrays';
import InputComponent from "../components/Common/InputComponent";
import DatePic from "../components/Common/DatePic";
import {validateName,validateCaseNumber,validateBlankSpace,validateCustomDate, validateSelectionBox} from "../components/Common/ValidationRule";



const SelectLayout = () => {

    const [nameOfCourt, setNameOfCourt] = useState('');
    const [caseType, setCaseType] = useState('');
    const [caseCategory, setCaseCategory] = useState('');
    const [caseNumber, setCaseNumber] = useState('');
    const [firstParty, setFirstParty] = useState('');
    const [secondParty, setSecondParty] = useState('');
    const [section, setSection] = useState('');
    const [changeDate, setChangeDate] = useState('');


    const [errors, setErrors] = useState({
        courtNameValidation: '',
        caseTypeValidation: '',
        caseCategoryValidation: '',
        caseNumberValidation:'',
        firstPartyValidation:'',
        secondPartyValidation:'',
        sectionValidation:'',
        dateValidation:'',
    });

    useEffect(()=>{
        validateForm(nameOfCourt,caseType,caseCategory,caseNumber,firstParty,secondParty,section,changeDate)
    },[nameOfCourt,caseType,caseCategory,caseNumber,firstParty,secondParty,section,changeDate]);

    const validateForm = (nameOfCourt,caseType,caseCategory,caseNumber, firstParty, secondParty, section,changeDate) => {
        setErrors({...errors, courtNameValidation: validateSelectionBox(nameOfCourt),
            caseTypeValidation: validateSelectionBox(caseType),
            caseCategoryValidation: validateSelectionBox(caseCategory),
            caseNumberValidation: validateCaseNumber(caseNumber),
            firstPartyValidation:validateName(firstParty), secondPartyValidation: validateName(secondParty),
            sectionValidation:validateBlankSpace(section),dateValidation:validateCustomDate(changeDate),
        })
    };

    const handleDateChange = (newValue) => {
        setChangeDate(newValue);
    }

    

    const submitData = (e) => {
        e.preventDefault();
       
        console.log(errors);
        
        if( !errors.courtNameValidation
            && !errors.caseTypeValidation
            && !errors.caseCategoryValidation
            && !errors.caseNumberValidation 
            && !errors.firstPartyValidation 
            && !errors.secondPartyValidation 
            && !errors.sectionValidation 
            && !errors.dateValidation){
            console.log(nameOfCourt);
            console.log(caseType);
            console.log(caseCategory);
            console.log(caseNumber);
            console.log(firstParty);
            console.log(secondParty);
            console.log(section);
            console.log(changeDate.startDate);
        } else {
            alert('Plz fill up the form')
        }
        
       
        
    }
    return (
        <>
        {/* <hr className="mt-2 mb-2"/> */}
        <form className="pl-10 pr-10" onSubmit={submitData}> 
            <div className="grid mt-6 mb-6">
                {errors.courtNameValidation && <label className="text-red-500">Please select a court!</label>}
                <SelectComponent id="courtName" defaultValue = "Choose Court" values={courtName} onChange={event => setNameOfCourt(event.target.value)} />
            </div>     
            <div className="grid mt-6 mb-6 ">
                {errors.caseTypeValidation && <label className="text-red-500">Please select case type!</label>}
                <SelectComponent id= "caseType" defaultValue = "Choose Case Type" values={caseTypeArr} onChange={event => setCaseType(event.target.value)} />
            </div>
            { (caseType === 'Civil' || caseType === 'Criminal') &&
                <div className="grid mt-6 mb-6">
                    {errors.caseCategoryValidation && <label className="text-red-500">Please select a case category!</label>}
                    <SelectComponent id="caseCategory" defaultValue="Choose Case Category" values={caseType==='Civil'? civilCaseCategoryArr:criminalCaseCategoryArr} onChange={event=> setCaseCategory(event.target.value)}/>
                </div>
            }
            
            {
                (caseType === 'Civil' || caseType === 'Criminal') && 
                <>
                    <div className="grid mt-6 mb-6">
                        {errors.caseNumberValidation&&<label className="text-red-500">Case number should be in 000/0000 format</label>}
                        <InputComponent placeholder="Enter case number(00/0000)" onChange={event => setCaseNumber(event.target.value)} /> 
                    </div>
                    <div className="grid mt-6 mb-6">
                        {errors.firstPartyValidation && <p className="text-red-500">Please input valid name!</p>}
                        <InputComponent placeholder="Enter First Party Name" onChange={event => setFirstParty(event.target.value)} /> 
                    </div>
                    <div className="grid mt-6 mb-6">
                        {errors.secondPartyValidation && <label className="text-red-500">Please input valid name!</label>}
                        <InputComponent placeholder="Enter Second Party Name" onChange={event => setSecondParty(event.target.value)} /> 
                    </div>
                    <div className="grid mt-6 mb-6">
                        {errors.sectionValidation && <label className="text-red-500">Please input sections!</label>}
                        <InputComponent placeholder="Enter Section" onChange={event => setSection(event.target.value)}/> 
                    </div>
                    <div className="grid mt-6 mb-6">
                        {errors.dateValidation && <label className="text-red-500">Please input date</label>}
                        <DatePic onChange={handleDateChange} value={changeDate}/>
                    </div>
                </>
            }       
    <button type="submit" 
        className="text-white bg-slate-800 pt-2 pb-2 pl-6 pr-6 rounded-lg hover:bg-slate-700"
        >Add</button>
</form>
</>
    );
}



export default SelectLayout;




 // const[countries,setCountries] = useState(Array(['']));
    // const[inputValue, setInputValue] = useState("");
    // const[selected, setSelected] = useState("");
    // const[open,setOpen] = useState(false); 
    // useEffect(()=>{
    //     fetch("https://restcountries.com/v2/all?fields=name")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setCountries(data);
    //     });
    // },[]);
    // return (
    //     <div className="w-72 font-medium h-80">
    //         <div
    //             onClick={() => setOpen(!open)} 
    //             className={`bg-white w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}>
    //             {selected ? selected.length > 25 ? selected.substring(0,25) + '...' : selected  : 'Select Country'} 
    //             <FontAwesomeIcon icon={faCaretDown} size="xl" className={`${open && "rotate-180"}`} />
    //         </div>
    //         <ul className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"}`}>
    //             <div className="flex items-center px-2 sticky top-0 bg-white">
    //                 <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-gray-700" />
    //                 <input 
    //                     type="text" 
    //                     value={inputValue}
    //                     onChange={(e)=>setInputValue(e.target.value.toLowerCase())}
    //                     placeholder="Enter country name" 
    //                     className="placeholder:text-gray-700 p-2 outline-none" />
    //             </div>
    //             {countries.map((country,index)=>(
    //                  <li 
    //                     key={index} 
    //                     className={`p-2 text-sm hover:bg-sky-600 hover:text-white
    //                     ${country?.name?.toLowerCase()?.startsWith(inputValue)
    //                         ? "block"
    //                         : "hidden"
    //                     }`}
    //                     onClick={()=>{
    //                         if(country?.name?.toLowerCase() !== selected?.toLowerCase()) {
    //                             setSelected(country?.name)
    //                             setOpen(false);
    //                             setInputValue("");
    //                         }
    //                     }}
    //                     >
    //                     {country?.name}
    //                 </li>
    //             ))}
                
    //         </ul>
    //     </div>
    // );