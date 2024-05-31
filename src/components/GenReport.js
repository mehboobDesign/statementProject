import React, {useState, useEffect} from 'react';
import PendencyArrear from './Report/PendencyArrear';

const date = new Date();

const GenReport =() => {
  const [open,setOpen] = useState(false);
  const [monthName, setMonthName]=useState('');
  const [currDate, setCurrDate] = useState('');
  const [currMonth, setCurrMonth] = useState('');
  const [currYear, setCurrYear] = useState('');

  useEffect(()=>{
    setCurrDate(date.getDate());
    setCurrMonth(date.getMonth() + 1);
    setCurrYear(date.getFullYear());
  },[]);

  const conversionFormula = () => {
    monthValueToMonthNameConversion(currMonth)
    setOpen(true)
  }

  const monthValueToMonthNameConversion = (currMonth) => {
    const stringCurrMonth = currMonth.toString();
    switch(stringCurrMonth) {
        case '1' : setMonthName('January'); break;
        case '2' : setMonthName('February'); break;
        case '3' : setMonthName('March'); break;
        case '4' : setMonthName('April'); break;
        case '5' : setMonthName("May"); break;
        case '6' : setMonthName("June"); break;
        case '7' : setMonthName("July"); break;
        case '8' : setMonthName("August"); break;
        case '9' : setMonthName("September"); break;
        case '10': setMonthName("October"); break;
        case '11': setMonthName("November"); break;
        case '12': setMonthName("December"); break;
        default : setMonthName('No'); break;
    }
}
  return (
    <>
    <div className='pl-10 pr-10'>
      <div className ="flex w-auto mt-4 mb-4 justify-center">
        <div className='text-stone-600  dark:text-stone-300'>
          Today: {currDate}/{currMonth.toString.length === 1 ? '0' : ''}{currMonth}/{currYear}
        </div>
        
          <button onClick={()=>conversionFormula()} className='border rounded border-orange-600 
          px-4 py-2 ml-2 bg-orange-400 hover:bg-orange-600
           text-cyan-50'>Go</button>
      </div>
      {open && <PendencyArrear monthValue={currMonth.toString.length === 1 ? '0'+currMonth : ''+currMonth} month={monthName} year={currYear}/>}
    </div>
    </>
    
  )
}

export default GenReport