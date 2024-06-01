import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
      padding:20,
      width:"100%"
    },
    h1Heading: {
        display:"flex",
        flexDirection: "row",
    },
    h2Heading: {
        display:"flex",
        flexDirection:"row",
    },
    h3Heading: {
        display:"flex",
        flexDirection:"row",
    },
    text1: {
        border:'1px solid #000',
        width:'50%',
        fontSize:'12px',
        padding:5,
    },
    text2: {
        borderTop:'1px solid #000',
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'50%',
        fontSize:'12px',
        padding:5,
    },
    text3: {
        borderRight:'1px solid #000',
        borderLeft: '1px solid #000',
        borderBottom:'1px solid #000',
        width:'50%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
    text4: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'50%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
  });

const PendencyPdfModal = ({closeModal,month,year,totalCivilPending,totalCriminalPending,totalPending,
    civilInstitution,criminalInstitution,totalInstitution,civilDisposed, criminalDisposed,
    totalDisposed,civilClosingBalance,criminalClosingBalance,closingBalance,percentageCivil
    ,percentageCriminal,percentageTotal,civilMonthlyOldDisposed,criminalMonthlyOldDisposed
    ,totalMonthlyOldDisposed,civilOldPending,criminalOldPending,totalOldPending}) => {
return(
    <>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="mt-28 min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                            <div className="bg-white dark:bg-gray-600">
                                    <div className="text-center sm:text-left">     
                                        <PDFViewer className="w-full h-96">
          {/* Start of the document*/}
        <Document title={"Pendency Arrear for the Month of ".concat(`${month}`).concat(` ${year}`)}>
            {/*render a single page*/}
            <Page size="A4" style={styles.page} orientation="landscape">
              <View style={styles.h1Heading}>
                <Text style={styles.text1}>Pendency Arrear for the Month of {month}, {year}</Text>
                <Text style={styles.text2}>District & Sessions Judge</Text>
              </View>
              <View style={styles.h2Heading}>
                <Text style={styles.text3}>Opening Balance</Text>
                <Text style={styles.text4}>Institution during the month of {month}, {year}</Text>
                <Text style={styles.text4}>Disposal during the month of {month}, {year}</Text>
                <Text style={styles.text4}>Closing Balance at the end of the Month of {month}, {year}</Text>
                <Text style={styles.text4}>% increase or decrease in pendency vis-a-vis previuos month ( + denotes increase) ( - denotes decrease)</Text>
                <Text style={styles.text4}>Disposed of cases which are more than 5 year old</Text>
                <Text style={styles.text4}>Pendency of case which are more than 5 years old at the end of the month of {month}, {year}</Text>
              </View>
              <View style={styles.h3Heading}>
                <Text style={styles.text3}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Total</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Total</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Total</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Total</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Total</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Total</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Total</Text>
              </View>
              <View style={styles.h3Heading}>
                <Text style={styles.text3}>{totalCivilPending}</Text>
                <Text style={styles.text4}>{totalCriminalPending}</Text>
                <Text style={styles.text4}>{totalPending}</Text>
                <Text style={styles.text4}>{civilInstitution}</Text>
                <Text style={styles.text4}>{criminalInstitution}</Text>
                <Text style={styles.text4}>{totalInstitution}</Text>
                <Text style={styles.text4}>{civilDisposed}</Text>
                <Text style={styles.text4}>{criminalDisposed}</Text>
                <Text style={styles.text4}>{totalDisposed}</Text>
                <Text style={styles.text4}>{civilClosingBalance}</Text>
                <Text style={styles.text4}>{criminalClosingBalance}</Text>
                <Text style={styles.text4}>{closingBalance}</Text>
                <Text style={styles.text4}>{percentageCivil}</Text>
                <Text style={styles.text4}>{percentageCriminal}</Text>
                <Text style={styles.text4}>{percentageTotal}</Text>
                <Text style={styles.text4}>{civilMonthlyOldDisposed}</Text>
                <Text style={styles.text4}>{criminalMonthlyOldDisposed}</Text>
                <Text style={styles.text4}>{totalMonthlyOldDisposed}</Text>
                <Text style={styles.text4}>{civilOldPending}</Text>
                <Text style={styles.text4}>{criminalOldPending}</Text>
                <Text style={styles.text4}>{totalOldPending}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
                                               
                                                <div className="py-3 sm:flex sm:flex-row-reverse">
                                                    <button type="button" className=" hover:bg-red-400 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto" onClick={closeModal}>Cancel</button>
                                                    {/* <button type="button" className=" hover:bg-red-400 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto" onClick={handleSubmit}>Change Status</button> */}
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
export default PendencyPdfModal;