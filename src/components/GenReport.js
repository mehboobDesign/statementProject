import React, {useState, useEffect, useRef} from 'react';
import PendencyArrear from './Report/PendencyArrear';
import YearwiseBreakup from './Report/YearwiseBreakup';
import MFormat from './Report/MFormat';
import M1Format from './Report/M1Format';
import M2Format from './Report/M2Format';
import XFormat from './Report/XFormat';

const reportArr = ['Pendency Arrear', 'Yearwise breakup', 'M Format', 'M1 Format', 'M2 Format', 'X Format', 
                'Y Format', 'Z Format'];

const date = new Date();

const GenReport =() => {
  const firstBtnRef = useRef();
  const [selectedTab, setSelectedTab] = useState(0);
  const [open,setOpen] = useState(false);
  const [monthName, setMonthName]=useState('');
  const [currDate, setCurrDate] = useState('');
  const [currMonth, setCurrMonth] = useState('');
  const [currYear, setCurrYear] = useState('');
  const [hideBtn, setHideBtn] = useState(false);

  useEffect(()=>{
    if(open)
    firstBtnRef.current.focus();
  },[open]);

  useEffect(()=>{
    setCurrDate(date.getDate());
    setCurrMonth(date.getMonth() + 1);
    setCurrYear(date.getFullYear());
  },[]);
  
  const conversionFormula = () => {
    monthValueToMonthNameConversion(currMonth)
    setOpen(true)
    setHideBtn(true)
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
          Today: {currDate.toString().length === 1 ? '0':''}{currDate}/{currMonth.toString().length === 1 ? '0' : ''}{currMonth}/{currYear}
        </div>
        
          <button onClick={()=>conversionFormula()} className={`border rounded border-orange-600 
          px-4 py-2 ml-2 bg-orange-400 hover:bg-orange-600 ${hideBtn ? 'hidden' : ''}
           text-cyan-50`}>Go</button>
      </div>
    </div>
    {open && <div className='flex justify-center items-center py-12'>
      <div className=' flex flex-col gap-y-2 w-full'>
        <div className="rounded-xl flex justify-between items-center gap-x-2 font-bold text-stone-600 dark:text-white">
          {reportArr.map((item,index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index} 
              onClick={()=>setSelectedTab(index)}
              className='outline-none w-full p-2 hover:bg-orange-400 rounded-xl text-center focus:ring-2 focus:bg-white focus:text-blue-600'
              >
              {item}</button>
          ))}
        </div>
        <div className='p-2 rounded-xl'>
        <div className={`${selectedTab === 0 ? '' : 'hidden'}`}>
          {open && <PendencyArrear monthValue={currMonth.toString().length === 1 ? '0'+currMonth : ''+currMonth} month={monthName} year={currYear}/>}
        </div>
        <div className={`${selectedTab === 1 ? '' : 'hidden'}`}>
          {open && <YearwiseBreakup monthValue={currMonth.toString().length === 1 ? '0'+currMonth : ''+currMonth} month={monthName} year={currYear}/>} 
        </div>
        <div className={`${selectedTab === 2 ? '' : 'hidden'}`}>
          {open && <MFormat monthValue={currMonth.toString().length === 1 ? '0'+currMonth : ''+currMonth} month={monthName} year={currYear}/>} 
        </div>
        <div className={`${selectedTab === 3 ? '' : 'hidden'}`}>
          {open && <M1Format monthValue={currMonth.toString().length === 1 ? '0'+currMonth : ''+currMonth} month={monthName} year={currYear}/>} 
        </div>
        <div className={`${selectedTab === 4 ? '' : 'hidden'}`}>
          {open && <M2Format monthValue={currMonth.toString().length === 1 ? '0'+currMonth : ''+currMonth} month={monthName} year={currYear}/>} 
        </div>
        <div className={`${selectedTab === 5 ? '' : 'hidden'}`}>
          {open && <XFormat currDate={currDate} monthValue={currMonth.toString().length === 1 ? '0'+currMonth : ''+currMonth} month={monthName} year={currYear}/>} 
        </div>
        </div>
      </div>
    </div>}



    </>
    
  )
}

export default GenReport