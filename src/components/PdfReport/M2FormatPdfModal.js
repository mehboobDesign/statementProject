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
        borderRight:'1px solid #000',
        borderLeft:'1px solid #000',
        borderBottom:'1px solid #000',
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
        width:'20%',
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
        width:'20%',
        padding:4,
    },
    text8: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'20%',
        padding:4,
    },
    text9: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'20%',
        padding:4,
    }
    
  });

const M2FormatPdfModal = ({closeModal,month,year, courtName, openingWomenCrime,insCrimeWomen,disposedCrimeWomen,
  crimeWomenPending,splPOCSOBalance,insSplPocso,disposedSplP,splPCasesPending,openingRape,
  institutionRape,disposedRape,rapePending}) => {

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
        <Document title={"M2 Format for the Month of ".concat(`${month}`).concat(` ${year}`)}>
            {/*render a single page*/}
            <Page size="A4" style={styles.page} orientation="portrait">
              <View style={styles.h1Heading}>
                <Text style={styles.text1}>FORMAT M2</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text2}>STATEMENT REGARDING INSTITUTION, DISPOSAL AND PENDENCY OF CASES RELATING TO
                    CRIMES AGAINST WOMEN, JUVENILES & UNDER THE PREVENTION OF CORRUPTION ACT,
                    POCSO ACT AND UNDER COMMERCIAL COURTS AND CASES AGAINST MPS AND MLAS IN TH
                    GOALPARA_DISTRICT JUDICIARY FOR THE MONTH OF {month}, {year}
                </Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Cases Relating to</Text>
                <Text style={styles.text6}>Pendency at the beginning of the month</Text>
                <Text style={styles.text7}>Institution during the month</Text>
                <Text style={styles.text8}>Disposal during the month</Text>
                <Text style={styles.text9}>Pendency at the end of the month</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Crime Against women(excluding Rape u/s 376IPC/POCSO)</Text>
                <Text style={styles.text6}>{openingWomenCrime}</Text>
                <Text style={styles.text7}>{insCrimeWomen}</Text>
                <Text style={styles.text8}>{disposedCrimeWomen}</Text>
                <Text style={styles.text9}>{crimeWomenPending}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Juveniles</Text>
                <Text style={styles.text6}></Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
                <Text style={styles.text9}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>P.C. Act</Text>
                <Text style={styles.text6}></Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
                <Text style={styles.text9}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>POCSO</Text>
                <Text style={styles.text6}>{splPOCSOBalance}</Text>
                <Text style={styles.text7}>{insSplPocso}</Text>
                <Text style={styles.text8}>{disposedSplP}</Text>
                <Text style={styles.text9}>{splPCasesPending}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Commercial Courts</Text>
                <Text style={styles.text6}></Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
                <Text style={styles.text9}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>MPs and MLAs</Text>
                <Text style={styles.text6}></Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
                <Text style={styles.text9}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>SC/ST (Prevention of Atrocities Act)</Text>
                <Text style={styles.text6}></Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
                <Text style={styles.text9}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Wild Life Protection Act 1972</Text>
                <Text style={styles.text6}></Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
                <Text style={styles.text9}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Rape (U/S 376 IPC)</Text>
                <Text style={styles.text6}>{openingRape}</Text>
                <Text style={styles.text7}>{institutionRape}</Text>
                <Text style={styles.text8}>{disposedRape}</Text>
                <Text style={styles.text9}>{rapePending}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>TOTAL</Text>
                <Text style={styles.text6}></Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
                <Text style={styles.text9}></Text>
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
export default M2FormatPdfModal;