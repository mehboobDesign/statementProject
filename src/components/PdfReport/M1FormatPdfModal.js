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
        padding:3.5,
    },
    text2: {
        borderRight:'1px solid #000',
        borderLeft:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'100%',
        padding:3.5,
    },
    text3: {
        borderLeft:'1px solid #000',
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'50%',
        padding:3.5,
    },
    text4: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'50%',
        padding:3.5,
    },
    text5: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        borderLeft:'1px solid #000',
        width:'10%',
        padding:3.5,
    },
    text6: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'40%',
        padding:3.5,
    },
    text7: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'25%',
        padding:3.5,
    },
    text8: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'25%',
        padding:3.5,
    }
    
  });

const M1FormatPdfModal = ({closeModal,month,year, courtName, sessTy1,sessTy2,crlAppl,crlRevn,ndpsAct,
    electricity,otherCrlCases,miscJ,titleAppeals,moneyAppeals,miscCivilAppl,succession,guardianship,
    miscCaseProbate,titleSuitP,titleSuitMatri,otherCivilCases,totalCases}) => {

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
        <Document title={"M1 Format for the Month of ".concat(`${month}`).concat(` ${year}`)}>
            {/*render a single page*/}
            <Page size="A4" style={styles.page} orientation="portrait">
              <View style={styles.h1Heading}>
                <Text style={styles.text1}>FORMAT M1</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text2}>MONTHLY DISTRICT-WISE RETURN (COMPILED) IN REGARD TO DIFFERENT CATEGORY OF CASES PENDING AT THE END OF {month}, {year}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text3}>STATE: ASSAM</Text>
                <Text style={styles.text4}>DISTRICT: GOALPARA</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Sl No</Text>
                <Text style={styles.text6}>Types of Cases</Text>
                <Text style={styles.text7}>No. of cases pending</Text>
                <Text style={styles.text8}>Remarks</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>1</Text>
                <Text style={styles.text6}>Sessions Case: Type - I</Text>
                <Text style={styles.text7}>{sessTy1}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>2</Text>
                <Text style={styles.text6}>Sessions Case: Type - II</Text>
                <Text style={styles.text7}>{sessTy2}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>3</Text>
                <Text style={styles.text6}>Criminal Appeals</Text>
                <Text style={styles.text7}>{crlAppl}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>4</Text>
                <Text style={styles.text6}>Criminal Revisions</Text>
                <Text style={styles.text7}>{crlRevn}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>5</Text>
                <Text style={styles.text6}>Warrant Procedure IPC cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>6</Text>
                <Text style={styles.text6}>Summons Procedure IPC cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>7</Text>
                <Text style={styles.text6}>Food Adulteration Act cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>8</Text>
                <Text style={styles.text6}>NDPS Act cases</Text>
                <Text style={styles.text7}>{ndpsAct}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>9</Text>
                <Text style={styles.text6}>MACT cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>10</Text>
                <Text style={styles.text6}>Cases under Electricity Act</Text>
                <Text style={styles.text7}>{electricity}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>11</Text>
                <Text style={styles.text6}>Essential Commodity Act cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>12</Text>
                <Text style={styles.text6}>Cases u/s 125 Cr.P.C.</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>13</Text>
                <Text style={styles.text6}>Cases under Domestic Violence Act</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>14</Text>
                <Text style={styles.text6}>N.I. Act cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>15</Text>
                <Text style={styles.text6}>M.V. Act cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>16</Text>
                <Text style={styles.text6}>Excise Act cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>17</Text>
                <Text style={styles.text6}>Juvenlle Justice Act cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>18</Text>
                <Text style={styles.text6}>Other criminal cases not covered above</Text>
                <Text style={styles.text7}>{otherCrlCases}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>19</Text>
                <Text style={styles.text6}>Title Suits</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>20</Text>
                <Text style={styles.text6}>Money Suit</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>21</Text>
                <Text style={styles.text6}>Misc.(J) cases</Text>
                <Text style={styles.text7}>{miscJ}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>22</Text>
                <Text style={styles.text6}>Title Execution cases</Text>
                <Text style={styles.text7}></Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>23</Text>
                <Text style={styles.text6}>Title Appeals</Text>
                <Text style={styles.text7}>{titleAppeals}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>24</Text>
                <Text style={styles.text6}>Money Appeals</Text>
                <Text style={styles.text7}>{moneyAppeals}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>25</Text>
                <Text style={styles.text6}>Misc. Civil Appeals</Text>
                <Text style={styles.text7}>{miscCivilAppl}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>26</Text>
                <Text style={styles.text6}>Succession cases</Text>
                <Text style={styles.text7}>{succession}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>27</Text>
                <Text style={styles.text6}>Guardianship cases</Text>
                <Text style={styles.text7}>{guardianship}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>28</Text>
                <Text style={styles.text6}>Misc. case (Probate)</Text>
                <Text style={styles.text7}>{miscCaseProbate}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>29</Text>
                <Text style={styles.text6}>Title Suit (Probate)</Text>
                <Text style={styles.text7}>{titleSuitP}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>30</Text>
                <Text style={styles.text6}>Title Suit (Matrimonial)</Text>
                <Text style={styles.text7}>{titleSuitMatri}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>31</Text>
                <Text style={styles.text6}>Other Civil cases not covered above</Text>
                <Text style={styles.text7}>{otherCivilCases}</Text>
                <Text style={styles.text8}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}></Text>
                <Text style={styles.text6}>TOTAL</Text>
                <Text style={styles.text7}>{totalCases}</Text>
                <Text style={styles.text8}></Text>
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
export default M1FormatPdfModal;