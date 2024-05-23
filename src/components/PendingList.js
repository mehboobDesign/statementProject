import React, {useEffect, useState} from 'react';
import useAuth from "../components/hooks/useAuth";
import axios from 'axios';
import CaseUpdateModal from './Common/Modal/CaseUpdateModal';
import { BASE_URL } from './Common/Arrays';

const GET_CASES_URL = BASE_URL.concat('pending/');

const PendingList =() => {

  const { auth } = useAuth();
  const [caseData, setCaseData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [dataId, setDataId] = useState('');

  const getAllCases = async () => {
    await axios.get(GET_CASES_URL.concat(auth.nameOfCourt), {
      headers: {
        Authorization : `Bearer ${auth.jwtToken}`
      }
    }   
    )
    .then(function (response) {
      console.log(response.data);
      setCaseData(response.data);
    })
  };

  const showSingleData = (id) => {
    setDataId(id);
    setModalOpen(true);
  }

  useEffect(()=>{
    if(!modalOpen) 
      getAllCases();
    // eslint-disable-next-line 
  },[modalOpen]);

  return (
    <div className='flex flex-col items-center'>
      {caseData.length === 0 ? 
      <div className='dark:text-white text-slate-700 text-2xl mt-4'>
        No pending records present in the database to display
      </div> : 
      <table className='dark:text-white text-slate-700 table-auto border-collapse border border-slate-500 mt-5'>
      <caption className="caption-top text-2xl">
          Pending case details.
      </caption>
        <thead>
          <th className='border border-slate-600 p-5'>ID</th>
          <th className='border border-slate-600 p-5'>Court Name</th>
          <th className='border border-slate-600 p-5'>Case Type</th>
          <th className='border border-slate-600 p-5'>Case Category</th>
          <th className='border border-slate-600 p-5'>Case Number</th>
          <th className='border border-slate-600 p-5'>Section</th>
          <th className='border border-slate-600 p-5'>First Party</th>
          <th className='border border-slate-600 p-5'>Second Party</th>
          <th className='border border-slate-600 p-5'>Registration Date</th>
          <th className='border border-slate-600 p-5'>Age of the Case</th>
          <th className='border border-slate-600 p-5'>Actions</th>
        </thead>
        <tbody>
          {caseData.map((data,index) => (
              <tr key={index}>
                <td className='border border-slate-600 p-5 text-center'>{index + 1}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.courtName}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.caseType}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.caseCategory}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.caseNumber}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.sections}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.firstPartyName}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.secondPartyName}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.registrationDate}</td>
                <td className='border border-slate-600 p-5 text-center'>{data.ageOfCase}</td>
                <td className='border border-slate-600 p-5 text-center'>
                  <button className='dark:bg-slate-700 bg-slate-300 p-2 hover:bg-green-400' onClick={()=>showSingleData(data.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </button>
                  {modalOpen && <CaseUpdateModal closeModal={()=>setModalOpen(false)} dataId={dataId}/>}
                  <button className='dark:bg-slate-700 bg-slate-300 p-2 mt-1 hover:bg-red-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-none hover:fill-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button> 
                </td>
              </tr>
          ))} 
        </tbody>
      </table>
      }
      
    </div>
  )
}

export default PendingList