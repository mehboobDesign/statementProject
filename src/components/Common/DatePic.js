import React from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePic = (props) => {
    // const [value, setValue] = useState({
    //     startDate: new Date(),
    //     endDate: new Date().setMonth(11)
    //     startDate: null, 
    //     endDate: null   
    // });

    // const handleValueChange = newValue => {
    //     console.log("newValue:", newValue);
    //     setValue(newValue);
    // };

    return (
        <div>
            <Datepicker 
            inputClassName="w-full rounded-lg p-2.5 text-sm bg-gray-50 dark:bg-slate-800 dark:placeholder-gray-400 focus:outline-none focus:ring focus:ring-gray-50  dark:text-gray-400"
            asSingle={true}
            useRange={false} 
            value={props.value}
            displayFormat={"DD/MM/YYYY"} 
            placeholder="Registration Date"
            maxDate={new Date()}  
            onChange={props.onChange}
            
            // required={props.required}
            // aria-invalid={props.ariaInvalid}
            // aria-describedby={props.ariaDescribedby}
            // onFocus={props.onFocus}
            />
        </div>
    );
};

export default DatePic;