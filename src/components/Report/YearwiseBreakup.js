import React from "react";
import useAuth from "../hooks/useAuth";

const YearwiseBreakup = ({monthValue,month,year}) => {

    const { auth } = useAuth();

    return(
        <>
        <table className="text-stone-600 border border-cyan-50 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td colSpan="12">Yearwise Break up for the Month of {month}, {year} </td>
                    <td colSpan="10">{auth.nameOfCourt}</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td colSpan = "2" className='border border-cyan-50'>0 to 1 Year</td>
                    <td colSpan = "2" className='border border-cyan-50'>1 to 2 Year</td>
                    <td colSpan = "2" className='border border-cyan-50'>2 to 3 Year</td>
                    <td colSpan = "2" className='border border-cyan-50'>3 to 5 Year</td>
                    <td colSpan = "2" className='border border-cyan-50'>5 to 10 Year</td>
                    <td colSpan = "2" className='border border-cyan-50'>10 to 15 Year</td>
                    <td colSpan = "2" className='border border-cyan-50'>15 Year and more</td>
                    <td colSpan = "2" className='border border-cyan-50'>Total</td>
                </tr>
                <tr className='border border-cyan-50 [&>*]:p-2'>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                    <td className='border border-cyan-50'>Civil</td>
                    <td className='border border-cyan-50'>Criminal</td>
                </tr>
            </thead>
            <tbody>
                <tr className='border border-cyan-50 [&>*]:p-2 [&>*]:border [&>*]:border-cyan-50'>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>  
            </tbody>
        </table>
        </>
    )

}

export default YearwiseBreakup;