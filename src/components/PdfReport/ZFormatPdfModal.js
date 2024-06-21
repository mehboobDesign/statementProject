import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
      fontSize:'12px',
      textAlign:'center',
      padding:20,
      width:"100%"
    },
    h1Heading: {
        display:"flex",
        flexDirection: "row",
    },
    text1: {
        border:'1px solid #000',
        width:'100%',
        padding:4,
    },
    text2: {
        borderLeft: '1px solid #000',
        borderBottom: '1px solid #000',
        borderRight: '1px solid #000',
        width:'100%',
        padding:4,
    },
    text3: {
        borderLeft:'1px solid #000',
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'50%',
        padding:4,
    },
    text4: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'50%',
        padding:4,
    },
    text5: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        borderLeft:'1px solid #000',
        width:'5%',
        padding:4,
    },
    text6: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'20%',
        padding:4,
    },
    text7: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'15%',
        padding:4,
    },
    text8: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'15%',
        padding:4,
    },
    text9: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'15%',
        padding:4,
    },
    text10: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'15%',
        padding:4,
    },
    text11: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'15%',
        padding:4,
    },
    
  });

const ZFormatPdfModal = ({closeModal,month,year, courtName, openingOldPending,additionOldPending,
    transferOldPending,oldMonthlyDisposed,oldPending}) => {

return(
    <>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen">
                    <div className="mt-28  items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform rounded-lg bg-white text-left shadow-xl transition-all">
                            <div className="bg-white dark:bg-gray-600">
                                    <div className="text-center sm:text-left">     
                                        <PDFViewer className="w-full h-96">
          {/* Start of the document*/}
        <Document title={"Z Format for the Month of ".concat(`${month}`).concat(` ${year}`)}>
            {/*render a single page*/}
            <Page size="A4" style={styles.page} orientation="portrait">
              <View style={styles.h1Heading}>
                <Text style={styles.text1}>FORMAT Z</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text2}>DISTRICT-WISE & COURT-WISE MONTHLY REPORT IN COMPLIANCE WITH ORDER 
                    NO. 24 DATED 24-04-2013 FOR DISPOSAL OF 5 YEARS OR MORE OLD PENDING CASES
                </Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text3}>DISTRICT: GOALPARA</Text>
                <Text style={styles.text4}>MONTH: {month}, {year}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Sl No</Text>
                <Text style={styles.text6}>Court Name</Text>
                <Text style={styles.text7}>Pendency of 5 years or more old cases at beginning of the month</Text>
                <Text style={styles.text8}>Addition of 5 years or more old cases during the month of {month}, {year}</Text>
                <Text style={styles.text9}>Transferred out during the month (if any)</Text>
                <Text style={styles.text10}>Disposal of 5 years or more old cases during the month</Text>
                <Text style={styles.text11}>Pendency at the end of the month of {month}, {year}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>1</Text>
                <Text style={styles.text6}>{courtName}</Text>
                <Text style={styles.text7}>{openingOldPending}</Text>
                <Text style={styles.text8}>{additionOldPending}</Text>
                <Text style={styles.text9}>{transferOldPending}</Text>
                <Text style={styles.text10}>{oldMonthlyDisposed}</Text>
                <Text style={styles.text11}>{oldPending}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
        <div className="py-3 sm:flex sm:flex-row-reverse">
            <button type="button" className=" hover:bg-red-400 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto" onClick={closeModal}>Cancel</button>
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
export default ZFormatPdfModal;