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
        width:'20%',
        fontSize:'12px',
        padding:4,
    },
    text2: {
        borderTop:'1px solid #000',
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'80%',
        fontSize:'12px',
        padding:4,
    },
    text8: {
        borderLeft:'1px solid #000',
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'20%',
        fontSize:'12px',
        padding:4,
    },
    text9: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'80%',
        fontSize:'12px',
        padding:4,
    },
    text3: {
        borderRight:'1px solid #000',
        borderLeft: '1px solid #000',
        borderBottom:'1px solid #000',
        width:'10%',
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
    text5: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'100%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
    text6: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'25%',
        fontSize:'9px',
        textAlign:'center',
        padding:2,
    },
    text7: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'25%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
    textSl1: {
        borderRight:'1px solid #000',
        borderLeft: '1px solid #000',
        width:'10%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
    textSl2: {
        borderRight:'1px solid #000',
        borderLeft: '1px solid #000',
        borderBottom:'1px solid #000',
        width:'10%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
    textSl3: {
        borderRight:'1px solid #000',
        borderLeft: '1px solid #000',
        width:'10%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
    textBlank: {
        borderRight:'1px solid #000',
        width:'50%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
    textBlank1: {
        borderRight:'1px solid #000',
        // borderBottom:'1px solid #000',
        width:'50%',
        fontSize:'12px',
        textAlign:'center',
        padding:3, 
    },
    textBlank2: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'50%',
        fontSize:'12px',
        textAlign:'center',
        padding:3,
    },
    
  });

const MFormatPdfModal = ({closeModal,month,year, courtName, totalBegining,totalIns,
    mainCaseContested,mainCaseUncontested,miscCaseContested,miscCaseUncontested,totalPending}) => {
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
        <Document title={"M1 Format for the Month of ".concat(`${month}`).concat(` ${year}`)}>
            {/*render a single page*/}
            <Page size="A4" style={styles.page} orientation="landscape">
              <View style={styles.h1Heading}>
                <Text style={styles.text1}>FORMAT M</Text>
                <Text style={styles.text2}>INFORMATION REGARDING PENDENCY, INSTITUTION AND DISPOSAL OF CASES DURING THE MONTH</Text>
              </View>
              <View style={styles.h2Heading}>
                <Text style={styles.text8}>MONTH: {month}, {year}</Text>
                <Text style={styles.text9}>{courtName}, DISTRICT: GOALPARA</Text>
              </View>
              <View style={styles.h2Heading}>
                <Text style={styles.textSl3}>Sl No</Text>
                <Text style={styles.textBlank1}>Name of the Court/Presiding Officer</Text>
                <Text style={styles.textBlank1}>Total cases pending at the beginning of the month</Text>
                <Text style={styles.textBlank1}>Institution during the month</Text>
                <Text style={styles.text5}>Disposal during the month</Text>
                <Text style={styles.textBlank1}>Pending at the end of the month of {month}, {year}</Text>
                <Text style={styles.textBlank1}>Remarks</Text>
              </View>
              <View style={styles.h2Heading}>
                <Text style={styles.textSl1}></Text>
                <Text style={styles.textBlank1}></Text>
                <Text style={styles.textBlank1}></Text>
                <Text style={styles.textBlank1}></Text>
                <Text style={styles.text4}>Main Case</Text>
                <Text style={styles.text4}>Misc Case</Text>
                <Text style={styles.textBlank}></Text>
                <Text style={styles.textBlank}></Text>
                
              </View>
              <View style={styles.h2Heading}>
                <Text style={styles.textSl2}></Text>
                <Text style={styles.textBlank2}></Text>
                <Text style={styles.textBlank2}></Text>
                <Text style={styles.textBlank2}></Text>
                <Text style={styles.text6}>Contested</Text>
                <Text style={styles.text6}>Uncontested</Text>
                <Text style={styles.text6}>Contested</Text>
                <Text style={styles.text6}>Uncontested</Text>
                <Text style={styles.textBlank2}></Text>
                <Text style={styles.textBlank2}></Text>
              </View>
              <View style={styles.h3Heading}>
                <Text style={styles.text3}>1</Text>
                <Text style={styles.text4}>{courtName}</Text>
                <Text style={styles.text4}>{totalBegining}</Text>
                <Text style={styles.text4}>{totalIns}</Text>
                <Text style={styles.text7}>{mainCaseContested}</Text>
                <Text style={styles.text7}>{mainCaseUncontested}</Text>
                <Text style={styles.text7}>{miscCaseContested}</Text>
                <Text style={styles.text7}>{miscCaseUncontested}</Text>
                <Text style={styles.text4}>{totalPending}</Text>
                <Text style={styles.text4}></Text>
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
export default MFormatPdfModal;