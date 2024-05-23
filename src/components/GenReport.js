import React, {useState} from 'react';
import PendencyArrear from './Report/PendencyArrear';
import SelectComponent from './Common/SelectComponent';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                  'August', 'September', 'October', 'November', 'December'];
const years = ['2024', '2023'];


const GenReport =() => {
  const[month, setMonth] = useState();
  const [year, setYear] = useState();
  const [open,setOpen] = useState(false);
  const [monthValue, setMonthValue]=useState('');

  const conversionFormula = () => {
    monthToValueConversion(month);
    setOpen(true)
  }

  const monthToValueConversion = (month) => {
    switch(month) {
        case 'January' : setMonthValue('01'); break;
        case 'February' : setMonthValue('02'); break;
        case 'March' : setMonthValue('03'); break;
        case 'April' : setMonthValue('04'); break;
        case 'May' : setMonthValue("05"); break;
        case 'June' : setMonthValue("06"); break;
        case 'July' : setMonthValue("07"); break;
        case 'August' : setMonthValue("08"); break;
        case 'September' : setMonthValue("09"); break;
        case 'October': setMonthValue("10"); break;
        case 'November': setMonthValue("11"); break;
        case 'December': setMonthValue("12"); break;
        default : setMonthValue('0'); break;
    }
}
  return (
    <>
    <div className='pl-10 pr-10'>
      <div className ="flex w-auto mt-4 mb-4 justify-center">
        <div className=''>
          <SelectComponent 
              id="month" 
              defaultValue="Select Month" 
              values={months}
              onChange={event=> setMonth(event.target.value)}
              // ariaInvalid={validCaseCategory ? "false" : "true"}
              // ariaDescribedby="caseCategoryNote"
              // onFocus={()=>setCaseCategoryFocus(true)} 
            />
            {/* <p id="caseCategoryNote" className={ caseCategoryFocus
                ? "text-red-400" : "hidden"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                  Please select a case category to further procced.
                </p> */}
        </div>
        <div className='ml-4'>
            <SelectComponent
              id="year" 
              defaultValue="Select Year" 
              values={years}
              onChange={event=> setYear(event.target.value)}
              // ariaInvalid={validCaseCategory ? "false" : "true"}
              // ariaDescribedby="caseCategoryNote"
              // onFocus={()=>setCaseCategoryFocus(true)} 
            />
        </div> 
          <button onClick={()=>conversionFormula()} className='border rounded border-orange-600 
          px-4 py-2 ml-2 bg-orange-400 hover:bg-orange-600
           text-cyan-50'>Go</button>
      </div>
      {open && <PendencyArrear monthValue={monthValue} month={month} year={year}/>}
    </div>
    </>
    
  )
}

export default GenReport