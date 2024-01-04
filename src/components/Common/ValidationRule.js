const validateBlankSpace = (props) => {
    if(props.trim().length === 0) {
        return true;
    } else {
        return false;
    }
};

const validateCaseNumber = (props) => {
    const pattern = /^[0-9][0-9][0-9]\/[0-9][0-9][0-9][0-9]$/;
    if (!pattern.test(props)) {
        return true;
    } 
    else {
        return false;
    }

} ;

const validateName = (props) => {
    const characterPattren = /^[A-Za-z ,.'-]+$/;
    if(!characterPattren.test(props)) {
        return true;
    } 
    else {
        return false;
    }
};

const validateCustomDate = (props) => {
    if(props.startDate === null) {
        return true;
    } else {
        return false;
    }
};

const validateSelectionBox = (props) => {
    const subStr = props.substring(0,6)
    //console.log(props.substring(0,6));
    if(props === '' || subStr === 'Choose') {
        return true;
    } else {
        return false;
    }
    
}


export {validateSelectionBox,validateBlankSpace, validateCaseNumber, validateName, validateCustomDate}
