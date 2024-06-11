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

const YearwiseBreakupPdfModal = ({closeModal,month,year, courtName, upto1yrOldCivil,upto1yrOldCriminal,
    oneToTwoCivil,oneToTwoCriminal,twoToThreeCivil,twoToThreeCriminal,threeToFiveCivil,
    threeToFiveCriminal,fiveToTenCivil,fiveToTenCriminal,tenToFifteenCivil,
    tenToFifteenCriminal,fifteenCivil,fifteenCriminal,totalCivil,totalCriminal}) => {
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
        <Document title={"Yearwise Breakup for the Month of ".concat(`${month}`).concat(` ${year}`)}>
            {/*render a single page*/}
            <Page size="A4" style={styles.page} orientation="landscape">
              <View style={styles.h1Heading}>
                <Text style={styles.text1}>Yearwise Breakup for the Month of {month} {year} </Text>
                <Text style={styles.text2}>{courtName}</Text>
              </View>
              <View style={styles.h2Heading}>
                <Text style={styles.text3}>Upto 1 Year</Text>
                <Text style={styles.text4}>More than 1 & less than 2 Years</Text>
                <Text style={styles.text4}>More than 2 & less than 3 Years</Text>
                <Text style={styles.text4}>More than 3 & less than 5 Years</Text>
                <Text style={styles.text4}>More than 5 & less than 10 Years</Text>
                <Text style={styles.text4}>More than 10 & less than 15 Years</Text>
                <Text style={styles.text4}>More than 15 Years</Text>
                <Text style={styles.text4}>Total</Text>
              </View>
              <View style={styles.h3Heading}>
                <Text style={styles.text3}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
                <Text style={styles.text4}>Cvl</Text>
                <Text style={styles.text4}>Crl</Text>
              </View>
              <View style={styles.h3Heading}>
                <Text style={styles.text3}>{upto1yrOldCivil}</Text>
                <Text style={styles.text4}>{upto1yrOldCriminal}</Text>
                <Text style={styles.text4}>{oneToTwoCivil}</Text>
                <Text style={styles.text4}>{oneToTwoCriminal}</Text>
                <Text style={styles.text4}>{twoToThreeCivil}</Text>
                <Text style={styles.text4}>{twoToThreeCriminal}</Text>
                <Text style={styles.text4}>{threeToFiveCivil}</Text>
                <Text style={styles.text4}>{threeToFiveCriminal}</Text>
                <Text style={styles.text4}>{fiveToTenCivil}</Text>
                <Text style={styles.text4}>{fiveToTenCriminal}</Text>
                <Text style={styles.text4}>{tenToFifteenCivil}</Text>
                <Text style={styles.text4}>{tenToFifteenCriminal}</Text>
                <Text style={styles.text4}>{fifteenCivil}</Text>
                <Text style={styles.text4}>{fifteenCriminal}</Text>
                <Text style={styles.text4}>{totalCivil}</Text>
                <Text style={styles.text4}>{totalCriminal}</Text>
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
export default YearwiseBreakupPdfModal;