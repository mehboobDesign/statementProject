import React from "react";

const CaseListModal = ({closeModal, caseRecords}) => { 
    return (
    <>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                            <div className="bg-white dark:bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start pt-2">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="font-semibold text-xl leading-6 text-gray-900 dark:text-slate-300" id="modal-title">{caseRecords[0].caseCategory}</h3>
                                            <div className="mt-2">
                                                <table className="table-auto text-white">
                                                    <tr className="border">
                                                        <th className="px-2 py-2 border">Sl No</th>
                                                        <th className="px-2 py-2 border">Case Number</th>
                                                        <th className="px-2 py-2 border">Sections</th>
                                                        <th className="px-2 py-2 border">Registration Date</th>
                                                        <th className="px-2 py-2 border">Age</th>
                                                    </tr>
                                                    {caseRecords.map((data,index) => (
                                                        <tr key={index} className="border">
                                                            <td className="px-2 py-2 border">{index + 1}</td>
                                                            <td className="px-2 py-2 border">{data.caseCategory} {data.caseNumber}</td>
                                                            <td className="px-2 py-2 border">{data.sections}</td>
                                                            <td className="px-2 py-2 border">{data.registrationDate}</td>
                                                            <td className="px-2 py-2 border">{data.ageOfCase}</td>
                                                        </tr>
                                                    ))}
                                                    
                                                </table>
                                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={closeModal}>Cancel</button>
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

export default CaseListModal;