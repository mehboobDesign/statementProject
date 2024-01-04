import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <>
            <div className="lg:p-48 relative">
                <input className="block w-full p-4 text-base text-slate-400 border-[0.1px] border-slate-700 rounded-lg bg-slate-900 focus:outline-none focus:border-[0.1px] focus:border-slate-500 placeholder-slate-400 focus:bg-slate-800" type="text" placeholder="Search here..." />
                <button className="text-white absolute right-[210px] top-[210px]"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
        </>
    );
}

export default Search;