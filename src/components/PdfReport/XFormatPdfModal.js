import React, {useState, useEffect} from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
      fontSize:'9.6px',
      textAlign:'center',
      paddingTop:20,
      paddingBottom:40,
      paddingLeft:20,
      paddingRight:20,
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
        borderLeft:'1px solid #000',
        width:'3%',
        paddingTop:'40px',
    },
    text6: {
        borderRight:'1px solid #000',
        width:'19%',
        paddingTop:'40px',
    },
    text7: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'63%',
        paddingTop:'40px',
    },
    text8: {
        borderRight:'1px solid #000',
        width:'15%',
        paddingTop:'40px',
        
    },
    text9: {
        borderLeft:'1px solid #000',
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'3%',
        padding:1,
    },
    text10: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'19%',
        padding:2.5,
    },
    text11: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'7%',
        padding:2.5,  
    },
    text12: {
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'15%',
        padding:2.5,  
    },
    text13: {
        borderTop:'1px solid #000',
        borderRight:'1px solid #000',
        borderLeft:'1px solid #000',
        width:'3%',
        paddingTop:'40px',
    },
    text14: {
        borderTop:'1px solid #000',
        borderRight:'1px solid #000',
        width:'19%',
        paddingTop:'40px',
    },
    text15: {
        borderTop:'1px solid #000',
        borderRight:'1px solid #000',
        borderBottom:'1px solid #000',
        width:'63%',
        paddingTop:'40px',
    },
    text16: {
        borderTop:'1px solid #000',
        borderRight:'1px solid #000',
        width:'15%',
        paddingTop:'40px',
        
    },
    
  });

const XFormatPdfModal = ({closeModal,currDate,month,year, monthValue, sessTy1,sessTy2AfterRape,ndpsAct,
    crlAppl,crlRevn,electricity,rapeCases,otherCrlCases,crlPending,miscJ,titleAppeals,moneyAppeals,
    miscCivilAppl,succession,guardianship,miscCaseProbate,titleSuitP,titleSuitMatri,
    otherCivilCases,civilPending,totalCases}) => {

        const [subTotal, setSubTotal] = useState(0);
        useEffect(()=>{
            setSubTotal(sessTy1+sessTy2AfterRape+ndpsAct+crlAppl+crlRevn+electricity+rapeCases)
        },[sessTy1,sessTy2AfterRape,ndpsAct,crlAppl,crlRevn,electricity,rapeCases])

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
        <Document title={"X Format for the Month of ".concat(`${month}`).concat(` ${year}`)}>
            {/*render a single page*/}
            <Page size="A4" style={styles.page} orientation="landscape">
              <View style={styles.h1Heading}>
                <Text style={styles.text1}>FORMAT X</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text2}>STATEMENT REGARDING MONTH-WISE, COURT-WISE & CATEGORY-WISE PENDENCY OF CASES IN THE 
                    SUB-ORDINATE COURTS FOR THE MONTH OF {month}, {year}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text3}>STATE: ASSAM</Text>
                <Text style={styles.text4}>DISTRICT: GOALPARA</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text5}>Sl No</Text>
                <Text style={styles.text6}>Category of Cases</Text>
                <Text style={styles.text7}>In the Court of</Text>
                <Text style={styles.text8}>Category-wise total pendency as on{'\n'} {currDate}/{monthValue}/{year}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}></Text>
                <Text style={styles.text10}></Text>
                <Text style={styles.text11}>Dist. & Sess. Judge</Text>
                <Text style={styles.text11}>Addl. Dist. & Sess. Judge</Text>
                <Text style={styles.text11}>Civil Judge (Sr. Div.) & Asstt. Sess. Judge</Text>
                <Text style={styles.text11}>Civil Judge (Jr. Div.) No. 1 -cum- JMFC</Text>
                <Text style={styles.text11}>Civil Judge (Jr. Div.) No. 2 -cum- JMFC</Text>
                <Text style={styles.text11}>CJM</Text>
                <Text style={styles.text11}>Addl. CJM</Text>
                <Text style={styles.text11}>SDJM(S)</Text>
                <Text style={styles.text11}>JMFC</Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>1</Text>
                <Text style={styles.text10}>Sessions Case Type - I</Text>
                <Text style={styles.text11}>{sessTy1}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>2</Text>
                <Text style={styles.text10}>Sessions Case Type - II</Text>
                <Text style={styles.text11}>{sessTy2AfterRape}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>3</Text>
                <Text style={styles.text10}>NDPS Act Cases</Text>
                <Text style={styles.text11}>{ndpsAct}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>4</Text>
                <Text style={styles.text10}>Criminal Appeals</Text>
                <Text style={styles.text11}>{crlAppl}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>5</Text>
                <Text style={styles.text10}>Criminal Revisions</Text>
                <Text style={styles.text11}>{crlRevn}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>6</Text>
                <Text style={styles.text10}>Cases under Electricity Act</Text>
                <Text style={styles.text11}>{electricity}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>7</Text>
                <Text style={styles.text10}>Cases of rape against women</Text>
                <Text style={styles.text11}>{rapeCases}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>8</Text>
                <Text style={styles.text10}>Warrant procedure IPC Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>9</Text>
                <Text style={styles.text10}>Summons procedure IPC Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>10</Text>
                <Text style={styles.text10}>Food Adulteration Act Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>11</Text>
                <Text style={styles.text10}>Essential Commodities Act Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>12</Text>
                <Text style={styles.text10}>Cases u/s 125 Cr.P.C.</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>13</Text>
                <Text style={styles.text10}>Cases under Domestic Violence Act</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>14</Text>
                <Text style={styles.text10}>N.I. Act Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>15</Text>
                <Text style={styles.text10}>M.V. Act Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>16</Text>
                <Text style={styles.text10}>Excise Act Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>17</Text>
                <Text style={styles.text10}>Juvenlle Act Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>18</Text>
                <Text style={styles.text10}>Forest Act Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}></Text>
                <Text style={styles.text10}>SUB-TOTAL</Text>
                <Text style={styles.text11}>{subTotal}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View>
                <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text13}>Sl No</Text>
                <Text style={styles.text14}>Category of Cases</Text>
                <Text style={styles.text15}>In the Court of</Text>
                <Text style={styles.text16}>Category-wise total pendency as on{'\n'} {currDate}/{monthValue}/{year}</Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}></Text>
                <Text style={styles.text10}></Text>
                <Text style={styles.text11}>Dist. & Sess. Judge</Text>
                <Text style={styles.text11}>Addl. Dist. & Sess. Judge</Text>
                <Text style={styles.text11}>Civil Judge (Sr. Div.) & Asstt. Sess. Judge</Text>
                <Text style={styles.text11}>Civil Judge (Jr. Div.) No. 1 -cum- JMFC</Text>
                <Text style={styles.text11}>Civil Judge (Jr. Div.) No. 2 -cum- JMFC</Text>
                <Text style={styles.text11}>CJM</Text>
                <Text style={styles.text11}>Addl. CJM</Text>
                <Text style={styles.text11}>SDJM(S)</Text>
                <Text style={styles.text11}>JMFC</Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}></Text>
                <Text style={styles.text10}>SUB-TOTAL B/F</Text>
                <Text style={styles.text11}>{subTotal}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>19</Text>
                <Text style={styles.text10}>Wildlife Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>20</Text>
                <Text style={styles.text10}>Cinematography/Copyright Act Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>21</Text>
                <Text style={styles.text10}>Other Criminal Cases not covered above</Text>
                <Text style={styles.text11}>{otherCrlCases}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}></Text>
                <Text style={styles.text10}>SUB-TOTAL(A)</Text>
                <Text style={styles.text11}>{crlPending}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>22</Text>
                <Text style={styles.text10}>Title Suit</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>23</Text>
                <Text style={styles.text10}>Money Suit</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>24</Text>
                <Text style={styles.text10}>Misc. (J) Cases</Text>
                <Text style={styles.text11}>{miscJ}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>25</Text>
                <Text style={styles.text10}>Title Execution Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>26</Text>
                <Text style={styles.text10}>Title Appeals</Text>
                <Text style={styles.text11}>{titleAppeals}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>27</Text>
                <Text style={styles.text10}>Money Appeals</Text>
                <Text style={styles.text11}>{moneyAppeals}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>28</Text>
                <Text style={styles.text10}>Misc. Civil Appeals</Text>
                <Text style={styles.text11}>{miscCivilAppl}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>29</Text>
                <Text style={styles.text10}>MACT Cases</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>30</Text>
                <Text style={styles.text10}>Succession Cases</Text>
                <Text style={styles.text11}>{succession}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>31</Text>
                <Text style={styles.text10}>Guardianship Cases</Text>
                <Text style={styles.text11}>{guardianship}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>32</Text>
                <Text style={styles.text10}>Misc. Case (Probate)</Text>
                <Text style={styles.text11}>{miscCaseProbate}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>33</Text>
                <Text style={styles.text10}>Title Suit (Probate)</Text>
                <Text style={styles.text11}>{titleSuitP}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>34</Text>
                <Text style={styles.text10}>Title Suit (Matrimonial)</Text>
                <Text style={styles.text11}>{titleSuitMatri}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}>35</Text>
                <Text style={styles.text10}>Other Civil Cases not covered above</Text>
                <Text style={styles.text11}>{otherCivilCases}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}></Text>
                <Text style={styles.text10}>SUB-TOTAL(B)</Text>
                <Text style={styles.text11}>{civilPending}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
              </View>
              <View style={styles.h1Heading}>
                <Text style={styles.text9}></Text>
                <Text style={styles.text10}>GRAND-TOTAL(A+B)</Text>
                <Text style={styles.text11}>{totalCases}</Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text11}></Text>
                <Text style={styles.text12}></Text>
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
export default XFormatPdfModal;