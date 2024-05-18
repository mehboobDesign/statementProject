import React, {useState, useEffect} from "react";
import axios from 'axios';
import useAuth from "../components/hooks/useAuth";
import CaseListModal from "./Common/Modal/CaseListModal";
import { BASE_URL } from "./Common/Arrays";

const SHOW_CIVIL_CASES_URL = BASE_URL.concat('civilCases/');
const SHOW_TA_CASES_URL = BASE_URL.concat('civilCases/titleAppeal/');
const SHOW_MONEY_APPEAL_CASES_URL = BASE_URL.concat('civilCases/moneyAppeal/');
const SHOW_MISC_CIVIL_APPEAL_CASES_URL = BASE_URL.concat('civilCases/miscCivilAppeal/');
const SHOW_MISC_APPEAL_CASES_URL = BASE_URL.concat('civilCases/miscAppeal/');
const SHOW_MISC_SUCCESSION_CASES_URL = BASE_URL.concat('civilCases/miscSuccession/');
const SHOW_MISC_GUARDIANSHIP_CASES_URL = BASE_URL.concat('civilCases/miscGuardianship/');
const SHOW_TITLE_SUIT_P_CASES_URL = BASE_URL.concat('civilCases/titleSuitP/');
const SHOW_TITLE_SUIT_D_CASES_URL = BASE_URL.concat('civilCases/titleSuitD/');
const SHOW_TITLE_SUIT_M_CASES_URL = BASE_URL.concat('civilCases/titleSuitM/');
const SHOW_TITLE_SUIT_R_CASES_URL = BASE_URL.concat('civilCases/titleSuitR/');
const SHOW_LAND_ACQUISITION_CASES_URL = BASE_URL.concat('civilCases/landAcquisition/');
const SHOW_MISC_J_CASES_URL = BASE_URL.concat('civilCases/miscJ/');
const SHOW_CONSUMER_CASES_URL = BASE_URL.concat('civilCases/consumer/');
const SHOW_MEX_CASES_URL = BASE_URL.concat('civilCases/moneyExecution/');
const SHOW_MISC_P_URL = BASE_URL.concat('civilCases/miscProbate/');
const SHOW_MISC_T_URL = BASE_URL.concat('civilCases/miscT/');
const SHOW_MISC_REVOCATION_URL = BASE_URL.concat('civilCases/miscRevocation/');
const TOTAL_CIVIL_OLD = BASE_URL.concat('civilCases/oldPending/');
const TITLE_APPEAL_OLD = BASE_URL.concat('civilCases/oldPending/titleAppeal/');
const MONEY_APPEAL_OLD = BASE_URL.concat('civilCases/oldPending/moneyAppeal/');
const MISC_CIVIL_APPEAL_OLD = BASE_URL.concat('civilCases/oldPending/miscCivilAppeal/');
const MISC_APPEAL_OLD = BASE_URL.concat('civilCases/oldPending/miscAppeal/');
const MISC_SUCCESSION_OLD = BASE_URL.concat('civilCases/oldPending/miscSuccession/');
const MISC_GUARDIANSHIP_OLD = BASE_URL.concat('civilCases/oldPending/miscGuardianship/');
const TITLE_SUIT_PROBATE_OLD = BASE_URL.concat('civilCases/oldPending/titleSuitP/');
const TITLE_SUIT_DIVORCE_OLD = BASE_URL.concat('civilCases/oldPending/titleSuitD/');
const TITLE_SUIT_MAT_OLD = BASE_URL.concat('civilCases/oldPending/titleSuitM/');
const TITLE_SUIT_R_OLD = BASE_URL.concat('civilCases/oldPending/titleSuitR/');
const LAND_ACQUISITION_OLD = BASE_URL.concat('civilCases/oldPending/landAcquisition/');
const MISC_J_OLD = BASE_URL.concat('civilCases/oldPending/miscJ/');
const CONSUMER_OLD = BASE_URL.concat('civilCases/oldPending/consumer/');
const MONEY_EXECUTION_OLD = BASE_URL.concat('civilCases/oldPending/moneyExecution/');
const MISC_PROBATE_OLD = BASE_URL.concat('civilCases/oldPending/miscProbate/');
const MISC_T_OLD = BASE_URL.concat('civilCases/oldPending/miscT/');
const MISC_REVO_OLD = BASE_URL.concat('civilCases/oldPending/miscRevocation/');

const DisplayCivilData = () => {
    const { auth } = useAuth();
    const [totalCivil, setTotalCivil] = useState(0);
    const [totalTA, setTotalTA] = useState(0);
    const [totalMoneyAppeal, setTotalMoneyAppeal] = useState(0);
    const [totalMiscCivilAppeal, setTotalMiscCivilAppeal] = useState(0);
    const [totalMiscAppeal, setTotalMiscAppeal] = useState(0);
    const [totalMiscSuccession, setTotalMiscSuccession] = useState(0);
    const [totalMiscGuardianship, setTotalMiscGuardianship] = useState(0);
    const [totalTitleSuitP, setTotalTitleSuitP] = useState(0);
    const [totalTitleSuitD, setTotalTitleSuitD] = useState(0);
    const [totalTitleSuitM, setTotalTitleSuitM] = useState(0);
    const [totalTitleSuitR, setTotalTitleSuitR] = useState(0);
    const [totalLandAcquisition, setTotalLandAcquisition] = useState(0);
    const [totalMiscJ, setTotalMiscJ] = useState(0);
    const [totalConsumer, setTotalConsumer] = useState(0);
    const [totalMoneyExecution, setTotalMoneyExecution] = useState(0);
    const [totalMiscProbate, setTotalMiscProbate] = useState(0);
    const [totalMiscT, setTotalMiscT] = useState(0);
    const [totalMiscRevocation, setTotalMiscRevocation] = useState(0);

    const [taRecords, setTARecords] = useState([]);
    const [taShowModal, setTAShowModal] = useState(false);
    const [moneyAppealRecords, setMoneyAppealRecords] = useState([]);
    const [moneyAppealShowModal, setMoneyAppealShowModal] = useState(false);
    const [miscCivilAppealRecords, setMiscCivilAppealRecords] = useState([]);
    const [miscCivilAppealShowModal, setMiscCivilAppealShowModal] = useState(false);
    const [miscAppealRecords, setMiscAppealRecords] = useState([]);
    const [miscAppealShowModal, setMiscAppealShowModal] = useState(false);
    const [miscSuccessionRecords, setMiscSuccessionRecords] = useState([]);
    const [miscSuccessionShowModal, setMiscSuccessionShowModal] = useState(false);
    const [miscGuardianshipRecords, setMiscGuardianshipRecords] = useState([]);
    const [miscGuardianshipShowModal, setMiscGuardianshipShowModal] = useState(false);
    const [titleSuitPRecords, setTitleSuitPRecords] = useState([]);
    const [titleSuitPShowModal, setTitleSuitPShowModal] = useState(false);
    const [titleSuitDRecords, setTitleSuitDRecords] = useState([]);
    const [titleSuitDShowModal, setTitleSuitDShowModal] = useState(false);
    const [titleSuitMRecords, setTitleSuitMRecords] = useState([]);
    const [titleSuitMShowModal, setTitleSuitMShowModal] = useState(false);
    const [titleSuitRRecords, setTitleSuitRRecords] = useState([]);
    const [titleSuitRShowModal, setTitleSuitRShowModal] = useState(false);
    const [landAcquisitionRecords, setlandAcquisitionRecords] = useState([]);
    const [landAcquisitionShowModal, setLandAcquisitionShowModal] = useState(false);
    const [miscJRecords, setMiscJRecords] = useState([]);
    const [miscJShowModal, setMiscJShowModal] = useState(false);
    const [consumerRecords, setConsumerRecords] = useState([]);
    const [consumerShowModal, setConsumerShowModal] = useState(false);
    const [moneyExecutionRecords, setMoneyExecutionRecords] = useState([]);
    const [moneyExecutionShowModal, setMoneyExecutionShowModal] = useState(false);
    const [miscProbateRecords, setMiscProbateRecords] = useState([]);
    const [miscProbateShowModal, setMiscProbateShowModal] = useState(false);
    const [miscTRecords, setMiscTRecords] = useState([]);
    const [miscTShowModal, setMiscTShowModal] = useState(false);
    const [miscRevocationRecords, setMiscRevocationRecords] = useState([]);
    const [miscRevocationShowModal, setMiscRevocationShowModal] = useState(false);

    const [totalCivilOld, setTotalCivilOld] = useState(0);
    const [totalCivilOldRecords, setTotalCivilOldRecords] = useState([]);
    const [totalCivilOldModal, setTotalCivilOldModal] = useState(false);

    const [titleAppealOld, setTitleAppealOld] = useState(0);
    const [titleAppealOldRecords, setTitleAppealOldRecords] = useState([]);
    const [titleAppealOldModal, setTitleAppealOldModal] = useState(false);

    const [moneyAppealOld, setMoneyAppealOld] = useState(0);
    const [moneyAppealOldRecords, setMoneyAppealOldRecords] = useState([]);
    const [moneyAppealOldModal, setMoneyAppealOldModal] = useState(false);

    const [miscCivilAppealOld, setMiscCivilAppealOld] = useState(0);
    const [miscCivilAppealOldRecords, setMiscCivilAppealOldRecords] = useState([]);
    const [miscCivilAppealOldModal, setMiscCivilAppealOldModal] = useState(false);

    const [miscAppealOld, setMiscAppealOld] = useState(0);
    const [miscAppealOldRecords, setMiscAppealOldRecords] = useState([]);
    const [miscAppealOldModal, setMiscAppealOldModal] = useState(false);

    const [miscSuccessionOld, setMiscSuccessionOld] = useState(0);
    const [miscSuccessionOldRecords, setMiscSuccessionOldRecords] = useState([]);
    const [miscSuccessionOldModal, setMiscSuccessionOldModal] = useState(false);

    const [miscGuardianshipOld, setMiscGuardianshipOld] = useState(0);
    const [miscGuardianshipOldRecords, setMiscGuardianshipOldRecords] = useState([]);
    const [miscGuardianshipOldModal, setMiscGuardianshipOldModal] = useState(false);

    const [titleSuitProbateOld, setTitleSuitProbateOld] = useState(0);
    const [titleSuitProbateOldRecords, setTitleSuitProbateOldRecords] = useState([]);
    const [titleSuitProbateOldModal, setTitleSuitProbateOldModal] = useState(false);

    const [titleSuitDivorceOld, setTitleSuitDivorceOld] = useState(0);
    const [titleSuitDivorceOldRecords, setTitleSuitDivorceOldRecords] = useState([]);
    const [titleSuitDivorceOldModal, setTitleSuitDivorceOldModal] = useState(false);

    const [titleSuitMatOld, setTitleSuitMatOld] = useState(0);
    const [titleSuitMatOldRecords, setTitleSuitMatOldRecords] = useState([]);
    const [titleSuitMatOldModal, setTitleSuitMatOldModal] = useState(false);

    const [titleSuitResOld, setTitleSuitResOld] = useState(0);
    const [titleSuitResOldRecords, setTitleSuitResOldRecords] = useState([]);
    const [titleSuitResOldModal, setTitleSuitResOldModal] = useState(false);

    const [landAcqOld, setLandAcqOld] = useState(0);
    const [landAcqOldRecords, setLandAcqOldRecords] = useState([]);
    const [landAcqOldModal, setLandAcqOldModal] = useState(false);

    const [miscJOld, setMiscJOld] = useState(0);
    const [miscJOldRecords, setMiscJOldRecords] = useState([]);
    const [miscJOldModal, setMiscJOldModal] = useState(false);

    const [consumerOld, setConsumerOld] = useState(0);
    const [consumerOldRecords, setConsumerOldRecords] = useState([]);
    const [consumerOldModal, setConsumerOldModal] = useState(false);

    const [moneyExecutionOld, setMoneyExecutionOld] = useState(0);
    const [moneyExecutionOldRecords, setMoneyExecutionOldRecords] = useState([]);
    const [moneyExecutionOldModal, setMoneyExecutionOldModal] = useState(false);

    const [miscProbateOld, setMiscProbateOld] = useState(0);
    const [miscProbateOldRecords, setMiscProbateOldRecords] = useState([]);
    const [miscProbateOldModal, setMiscProbateOldModal] = useState(false);

    const [miscTOld, setMiscTOld] = useState(0);
    const [miscTOldRecords, setMiscTOldRecords] = useState([]);
    const [miscTOldModal, setMiscTOldModal] = useState(false);

    const [miscRevoOld, setMiscRevoOld] = useState(0);
    const [miscRevoOldRecords, setMiscRevoOldRecords] = useState([]);
    const [miscRevoOldModal, setMiscRevoOldModal] = useState(false);
    
    useEffect(()=>{
        const showCivilCases = async () => {
            try {
                await axios.get(SHOW_CIVIL_CASES_URL
                    .concat(auth.nameOfCourt), {
                  headers: {
                    Authorization : `Bearer ${auth.jwtToken}`
                  }
                }   
                )
                .then(function (response) {
                    setTotalCivil(response.data.length);
                    
                })
            } catch (err) {
                console.log(err);
            }
    
        };
        const showTACases = async () => {
            try {
                await axios.get(SHOW_TA_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalTA(response.data.length);
                    setTARecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMoneyAppealCases = async () => {
            try {
                await axios.get(SHOW_MONEY_APPEAL_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMoneyAppeal(response.data.length);
                    setMoneyAppealRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscCivilAppealCases = async () => {
            try {
                await axios.get(SHOW_MISC_CIVIL_APPEAL_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMiscCivilAppeal(response.data.length);
                    setMiscCivilAppealRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscAppealCases = async () => {
            try {
                await axios.get(SHOW_MISC_APPEAL_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMiscAppeal(response.data.length);
                    setMiscAppealRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscSuccessionCases = async () => {
            try {
                await axios.get(SHOW_MISC_SUCCESSION_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMiscSuccession(response.data.length);
                    setMiscSuccessionRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscGuardianshipCases = async () => {
            try {
                await axios.get(SHOW_MISC_GUARDIANSHIP_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMiscGuardianship(response.data.length);
                    setMiscGuardianshipRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleSuitPCases = async () => {
            try {
                await axios.get(SHOW_TITLE_SUIT_P_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalTitleSuitP(response.data.length);
                    setTitleSuitPRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleSuitDCases = async () => {
            try {
                await axios.get(SHOW_TITLE_SUIT_D_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalTitleSuitD(response.data.length);
                    setTitleSuitDRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleSuitMCases = async () => {
            try {
                await axios.get(SHOW_TITLE_SUIT_M_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalTitleSuitM(response.data.length);
                    setTitleSuitMRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleSuitRCases = async () => {
            try {
                await axios.get(SHOW_TITLE_SUIT_R_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalTitleSuitR(response.data.length);
                    setTitleSuitRRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showLandAcquisitionCases = async () => {
            try {
                await axios.get(SHOW_LAND_ACQUISITION_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalLandAcquisition(response.data.length);
                    setlandAcquisitionRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscJCases = async () => {
            try {
                await axios.get(SHOW_MISC_J_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMiscJ(response.data.length);
                    setMiscJRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showConsumerCases = async () => {
            try {
                await axios.get(SHOW_CONSUMER_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalConsumer(response.data.length);
                    setConsumerRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMEXCases = async () => {
            try {
                await axios.get(SHOW_MEX_CASES_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMoneyExecution(response.data.length);
                    setMoneyExecutionRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscPCases = async () => {
            try {
                await axios.get(SHOW_MISC_P_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMiscProbate(response.data.length);
                    setMiscProbateRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscTCases = async () => {
            try {
                await axios.get(SHOW_MISC_T_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMiscT(response.data.length);
                    setMiscTRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscRevocationCases = async () => {
            try {
                await axios.get(SHOW_MISC_REVOCATION_URL
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalMiscRevocation(response.data.length);
                    setMiscRevocationRecords(response.data);
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTotalCivilOld = async () => {
            try {
                await axios.get(TOTAL_CIVIL_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTotalCivilOld(response.data.length);
                    setTotalCivilOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleAppealOld = async () => {
            try {
                await axios.get(TITLE_APPEAL_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) { 
                    setTitleAppealOld(response.data.length);
                    setTitleAppealOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMoneyAppealOld = async () => {
            try {
                await axios.get(MONEY_APPEAL_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMoneyAppealOld(response.data.length);
                    setMoneyAppealOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscCivilAppealOld = async () => {
            try {
                await axios.get(MISC_CIVIL_APPEAL_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMiscCivilAppealOld(response.data.length);
                    setMiscCivilAppealOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscAppealOld = async () => {
            try {
                await axios.get(MISC_APPEAL_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMiscAppealOld(response.data.length);
                    setMiscAppealOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscSuccessionOld = async () => {
            try {
                await axios.get(MISC_SUCCESSION_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMiscSuccessionOld(response.data.length);
                    setMiscSuccessionOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscGuardianshipOld = async () => {
            try {
                await axios.get(MISC_GUARDIANSHIP_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMiscGuardianshipOld(response.data.length);
                    setMiscGuardianshipOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleSuitProbateOld = async () => {
            try {
                await axios.get(TITLE_SUIT_PROBATE_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTitleSuitProbateOld(response.data.length);
                    setTitleSuitProbateOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleSuitDivorceOld = async () => {
            try {
                await axios.get(TITLE_SUIT_DIVORCE_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTitleSuitDivorceOld(response.data.length);
                    setTitleSuitDivorceOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleSuitMatOld = async () => {
            try {
                await axios.get(TITLE_SUIT_MAT_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTitleSuitMatOld(response.data.length);
                    setTitleSuitMatOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showTitleSuitResOld = async () => {
            try {
                await axios.get(TITLE_SUIT_R_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setTitleSuitResOld(response.data.length);
                    setTitleSuitResOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showLandAcqOld = async () => {
            try {
                await axios.get(LAND_ACQUISITION_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setLandAcqOld(response.data.length);
                    setLandAcqOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscJOld = async () => {
            try {
                await axios.get(MISC_J_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMiscJOld(response.data.length);
                    setMiscJOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showConsumerOld = async () => {
            try {
                await axios.get(CONSUMER_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setConsumerOld(response.data.length);
                    setConsumerOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMoneyExecutionOld = async () => {
            try {
                await axios.get(MONEY_EXECUTION_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMoneyExecutionOld(response.data.length);
                    setMoneyExecutionOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscProbateOld = async () => {
            try {
                await axios.get(MISC_PROBATE_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMiscProbateOld(response.data.length);
                    setMiscProbateOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscTOld = async () => {
            try {
                await axios.get(MISC_T_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMiscTOld(response.data.length);
                    setMiscTOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        const showMiscRevoOld = async () => {
            try {
                await axios.get(MISC_REVO_OLD
                    .concat(auth.nameOfCourt), {
                        headers: {
                            Authorization : `Bearer ${auth.jwtToken}`
                        }
                    }
                )
                .then(function (response) {
                    setMiscRevoOld(response.data.length);
                    setMiscRevoOldRecords(response.data);
                    
                })
            } catch(err) {
                console.log(err);
            }
        };
        showCivilCases();
        showTACases();
        showMoneyAppealCases();
        showMiscCivilAppealCases();
        showMiscAppealCases();
        showMiscSuccessionCases();
        showMiscGuardianshipCases();
        showTitleSuitPCases();
        showTitleSuitDCases();
        showTitleSuitMCases();
        showTitleSuitRCases();
        showLandAcquisitionCases();
        showMiscJCases();
        showConsumerCases();
        showMEXCases();
        showMiscPCases();
        showMiscTCases();
        showMiscRevocationCases();
        showTotalCivilOld();
        showTitleAppealOld();
        showMoneyAppealOld();
        showMiscCivilAppealOld();
        showMiscAppealOld();
        showMiscSuccessionOld();
        showMiscGuardianshipOld();
        showTitleSuitProbateOld();
        showTitleSuitDivorceOld();
        showTitleSuitMatOld();
        showTitleSuitResOld();
        showLandAcqOld();
        showMiscJOld();
        showConsumerOld();
        showMoneyExecutionOld();
        showMiscProbateOld();
        showMiscTOld();
        showMiscRevoOld();
    },[auth.nameOfCourt, auth.jwtToken])

    return (
        <>
        <table className="text-stone-600 dark:text-stone-300 text-base table-auto w-full">
            <thead>
                <tr className="[&>*]:p-2 bg-gray-300 dark:bg-slate-800">
                    <td colSpan="4" className="font-bold text-xl mb-2 text-stone-800 dark:text-cyan-300">Civil Cases at a Glance</td>
                </tr>
                <tr className="[&>*]:p-2 bg-gray-200 dark:bg-slate-700">
                    <td colSpan='3' className="border-r border-neutral-300 dark:border-slate-600">Pending cases</td>
                    <td>Old Pending cases</td>
                </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-neutral-300 [&>*:nth-child(even)]:bg-neutral-100 dark:[&>*:nth-child(odd)]:bg-gray-800 dark:[&>*:nth-child(even)]:bg-gray-700">
                <tr className="[&>*]:p-2">
                    <td>Total Cases</td>
                    <td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600">{totalCivil} no{totalCivil <= 1 ? '' : 's'}</td>
                    <td><button disabled={totalCivilOld === 0 ? true : false} onClick={()=>setTotalCivilOldModal(true)}>{totalCivilOld} no{totalCivilOld <=1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Title Appeal</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalTA === 0 ? true : false} onClick={()=> setTAShowModal(true)}>{totalTA} no{totalTA <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={titleAppealOld === 0 ? true : false} onClick={()=>setTitleAppealOldModal(true)}>{titleAppealOld} no{titleAppealOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Money Appeal</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMoneyAppeal === 0 ? true : false} onClick={()=>setMoneyAppealShowModal(true)}>{totalMoneyAppeal} no{totalMoneyAppeal <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={moneyAppealOld === 0 ? true : false} onClick={()=>setMoneyAppealShowModal(true)}>{moneyAppealOld} no{moneyAppealOld <=1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Misc Civil Appeal</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscCivilAppeal === 0 ? true : false} onClick={()=>setMiscCivilAppealShowModal(true)}>{totalMiscCivilAppeal} no{totalMiscCivilAppeal <=1 ? '' : 's'}</button></td>
                    <td><button disabled={miscCivilAppealOld === 0 ? true : false} onClick={()=>setMiscCivilAppealOldModal(true)}>{miscCivilAppealOld} no{miscCivilAppealOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Misc Appeal</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscAppeal === 0 ? true : false} onClick={()=>setMiscAppealShowModal(true)}>{totalMiscAppeal} no{totalMiscAppeal <=1 ? '' : 's'}</button></td>
                    <td><button disabled={miscAppealOld === 0 ? true : false} onClick={()=>setMiscAppealOldModal(true)}>{miscAppealOld} no{miscAppealOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Misc Succession</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscSuccession === 0 ? true : false} onClick={()=>setMiscSuccessionShowModal(true)}>{totalMiscSuccession} no{totalMiscSuccession <=1 ? '' : 's'}</button></td>
                    <td><button disabled={miscSuccessionOld === 0 ? true : false} onClick={()=>setMiscSuccessionOldModal(true)} >{miscSuccessionOld} no{miscSuccessionOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Misc Guardianship</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscGuardianship === 0 ? true : false} onClick={()=>setMiscGuardianshipShowModal(true)}>{totalMiscGuardianship} no{totalMiscGuardianship <=1? '':'s'}</button></td>
                    <td><button disabled={miscGuardianshipOld === 0 ? true : false} onClick={()=>setMiscGuardianshipOldModal(true)}>{miscGuardianshipOld} no{miscGuardianshipOld <=1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Title Suit(Probate)</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalTitleSuitP === 0 ? true : false} onClick={()=>setTitleSuitPShowModal(true)}>{totalTitleSuitP} no{totalTitleSuitP <= 1? '':'s'}</button></td>
                    <td><button disabled={titleSuitProbateOld === 0 ? true : false} onClick={()=>setTitleSuitProbateOldModal(true)}>{titleSuitProbateOld} no{titleSuitProbateOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Title Suit(D)</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalTitleSuitD === 0 ? true : false} onClick={()=>setTitleSuitDShowModal(true)}>{totalTitleSuitD} no{totalTitleSuitD <= 1? '':'s'}</button></td>
                    <td><button disabled={titleSuitDivorceOld === 0 ? true : false} onClick={()=>setTitleSuitDivorceOldModal(true)}>{titleSuitDivorceOld} no{titleSuitDivorceOld <=1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Title Suit(M)</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalTitleSuitM === 0 ? true : false} onClick={()=>setTitleSuitMShowModal(true)}>{totalTitleSuitM} no{totalTitleSuitM <= 1? '':'s'}</button></td>
                    <td><button disabled={titleSuitMatOld === 0 ? true : false} onClick={()=>setTitleSuitMatOldModal(true)}>{titleSuitMatOld} no{titleSuitMatOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Title Suit(R)</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalTitleSuitR === 0 ? true : false} onClick={()=>setTitleSuitRShowModal(true)}>{totalTitleSuitR} no{totalTitleSuitR <= 1? '':'s'}</button></td>
                    <td><button disabled={titleSuitResOld === 0 ? true : false} onClick={()=>setTitleSuitResOldModal(true)}>{titleSuitResOld} no{titleSuitResOld <=1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Land Acquisition</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalLandAcquisition === 0 ? true : false} onClick={()=>setLandAcquisitionShowModal(true)}>{totalLandAcquisition} no{totalLandAcquisition <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={landAcqOld === 0 ? true : false} onClick={()=>setLandAcqOldModal(true)}>{landAcqOld} no{landAcqOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Misc(j)</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscJ === 0 ? true : false} onClick={()=>setMiscJShowModal(true)}>{totalMiscJ} no{totalMiscJ <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={miscJOld === 0 ? true : false} onClick={()=>miscJOldModal(true)}>{miscJOld} no{miscJOld <= 1 ? '' : ''}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Consumer Act. Cases</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalConsumer === 0 ? true : false} onClick={()=>setConsumerShowModal(true)}>{totalConsumer} no{totalConsumer <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={consumerOld === 0 ? true : false} onClick={()=>setConsumerOldModal(true)}>{consumerOld} no{consumerOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Money Execution Cases</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMoneyExecution === 0 ? true : false} onClick={()=>setMoneyExecutionShowModal(true)}>{totalMoneyExecution} no{totalMoneyExecution <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={moneyExecutionOld === 0 ? true : false} onClick={()=>setMoneyExecutionOldModal(true)}>{moneyExecutionOld} no{moneyExecutionOld <=1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Misc Probate</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscProbate === 0 ? true : false} onClick={()=>setMiscProbateShowModal(true)}>{totalMiscProbate} no{totalMiscProbate <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={miscProbateOld === 0 ? true : false} onClick={()=>setMiscProbateOldModal(true)}>{miscProbateOld} no{miscProbateOld <=1 ? '' : 's'}</button></td>
                </tr>    
                <tr className="[&>*]:p-2">
                    <td>Misc T</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscT === 0 ? true : false} onClick={()=>setMiscTShowModal(true)}>{totalMiscT} no{totalMiscT <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={miscTOld === 0 ? true : false} onClick={()=>setMiscTOldModal(true)}>{miscTOld} no{miscTOld <= 1 ? '' : 's'}</button></td>
                </tr>
                <tr className="[&>*]:p-2">
                    <td>Misc Revocation</td><td>:</td>
                    <td className="border-r border-neutral-200 dark:border-slate-600"><button disabled={totalMiscRevocation === 0 ? true : false} onClick={()=>setMiscRevocationShowModal(true)}>{totalMiscRevocation} no{totalMiscRevocation <= 1 ? '' : 's'}</button></td>
                    <td><button disabled={miscRevoOld === 0 ? true : false} onClick={()=>setMiscRevoOldModal(true)}>{miscRevoOld} no{miscRevoOld <= 1 ? '' : 's'}</button></td>
                </tr>
            </tbody>
        </table>
                    {taShowModal && <CaseListModal closeModal={()=>setTAShowModal(false)} caseRecords={taRecords}/>}
                    {moneyAppealShowModal && <CaseListModal closeModal={()=>setMoneyAppealShowModal(false)} caseRecords={moneyAppealRecords}/>}
                    {miscCivilAppealShowModal && <CaseListModal closeModal={()=>setMiscCivilAppealShowModal(false)} caseRecords={miscCivilAppealRecords}/>}
                    {miscAppealShowModal && <CaseListModal closeModal={()=>setMiscAppealShowModal(false)} caseRecords={miscAppealRecords}/>}
                    {miscSuccessionShowModal && <CaseListModal closeModal={()=>setMiscSuccessionShowModal(false)} caseRecords={miscSuccessionRecords}/>}
                    {miscGuardianshipShowModal && <CaseListModal closeModal={()=>setMiscGuardianshipShowModal(false)} caseRecords={miscGuardianshipRecords}/>}
                    {titleSuitPShowModal && <CaseListModal closeModal={()=>setTitleSuitPShowModal(false)} caseRecords={titleSuitPRecords}/>}
                    {titleSuitDShowModal && <CaseListModal closeModal={()=>setTitleSuitDShowModal(false)} caseRecords={titleSuitDRecords}/>}
                    {titleSuitMShowModal && <CaseListModal closeModal={()=>setTitleSuitMShowModal(false)} caseRecords={titleSuitMRecords}/>}
                    {titleSuitRShowModal && <CaseListModal closeModal={()=>setTitleSuitRShowModal(false)} caseRecords={titleSuitRRecords}/>}
                    {landAcquisitionShowModal && <CaseListModal closeModal={()=>setLandAcquisitionShowModal(false)} caseRecords={landAcquisitionRecords}/>}
                    {miscJShowModal && <CaseListModal closeModal={()=>setMiscJShowModal(false)} caseRecords={miscJRecords}/>}
                    {consumerShowModal && <CaseListModal closeModal={()=>setConsumerShowModal(false)} caseRecords={consumerRecords}/>}
                    {moneyExecutionShowModal && <CaseListModal closeModal={()=>setMoneyExecutionShowModal(false)} caseRecords={moneyExecutionRecords}/>}
                    {miscProbateShowModal && <CaseListModal closeModal={()=>setMiscProbateShowModal(false)} caseRecords={miscProbateRecords}/>}
                    {miscTShowModal && <CaseListModal closeModal={()=>setMiscTShowModal(false)} caseRecords={miscTRecords}/>}
                    {miscRevocationShowModal && <CaseListModal closeModal={()=>setMiscRevocationShowModal(false)} caseRecords={miscRevocationRecords}/>}
                    {totalCivilOldModal && <CaseListModal closeModal={()=>setTotalCivilOldModal(false)} caseRecords={totalCivilOldRecords} flag={true}/>}
                    {titleAppealOldModal && <CaseListModal closeModal={()=>setTitleAppealOldModal(false)} caseRecords={titleAppealOldRecords}/>}
                    {moneyAppealOldModal && <CaseListModal closeModal={()=>setMoneyAppealOldModal(false)} caseRecords={moneyAppealOldRecords}/>}
                    {miscCivilAppealOldModal && <CaseListModal closeModal={()=>setMiscCivilAppealOldModal(false)} caseRecords={miscCivilAppealOldRecords}/>}
                    {miscAppealOldModal && <CaseListModal closeModal={()=>setMiscAppealOldModal(false)} caseRecords={miscAppealOldRecords}/>}
                    {miscSuccessionOldModal && <CaseListModal closeModal={()=>setMiscSuccessionOldModal(false)} caseRecords={miscSuccessionOldRecords}/>}
                    {miscGuardianshipOldModal && <CaseListModal closeModal={()=>setMiscGuardianshipOldModal(false)} caseRecords={miscGuardianshipOldRecords}/>}
                    {titleSuitProbateOldModal && <CaseListModal closeModal={()=>setTitleSuitProbateOldModal(false)} caseRecords={titleSuitProbateOldRecords}/>}
                    {titleSuitDivorceOldModal && <CaseListModal closeModal={()=>setTitleSuitDivorceOldModal(false)} caseRecords={titleSuitDivorceOldRecords}/>}
                    {titleSuitMatOldModal && <CaseListModal closeModal={()=>setTitleSuitMatOldModal(false)} caseRecords={titleSuitMatOldRecords}/>}
                    {titleSuitResOldModal && <CaseListModal closeModal={()=>setTitleSuitResOldModal(false)} caseRecords={titleSuitResOldRecords}/>}
                    {landAcqOldModal && <CaseListModal closeModal={()=>setLandAcqOldModal(false)} caseRecords={landAcqOldRecords}/>}
                    {miscJOldModal && <CaseListModal closeModal={()=>setMiscJOldModal(false)} caseRecords={miscJOldRecords}/>}
                    {consumerOldModal && <CaseListModal closeModal={()=>setConsumerOldModal(false)} caseRecords={consumerOldRecords}/>}
                    {moneyExecutionOldModal && <CaseListModal closeModal={()=>setMoneyExecutionOldModal(false)} caseRecords={moneyExecutionOldRecords}/>}
                    {miscProbateOldModal && <CaseListModal closeModal={()=>setMiscProbateOldModal(false)} caseRecords={miscProbateOldRecords}/>}
                    {miscTOldModal && <CaseListModal closeModal={()=>setMiscTOldModal(false)} caseRecords={miscTOldRecords}/>}
                    {miscRevoOldModal && <CaseListModal closeModal={()=>setMiscRevoOldModal(false)} caseRecords={miscRevoOldRecords}/>}
        </>
    );

}

export default DisplayCivilData;