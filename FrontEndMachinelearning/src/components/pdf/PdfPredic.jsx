import React from "react";
import { Page, Image, Document, View, StyleSheet } from "@react-pdf/renderer";
import { Text } from '@react-pdf/renderer';

import PetronasLogo from "../../assets/petronasLogo.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logoImage: {
    width: 60,
    height: "auto",
    marginBottom:20
  },
  chartImage: {
    width: "100%",
    height: "auto",
    marginBottom:20
  },
  mainTable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  table: { 
    width: '100%', 
    border: '1 solid #ddd',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  tableRow: { 
    display: "flex",
    flexDirection: 'row', 
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    border: '1 solid #ddd',
  },
  tableCell: { 
    width: 150, 
    border: '1 solid #ddd', 
    fontSize:10,
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
});

const PdfPredict = ({ chartImage, combinedData }) => {
    return (
      <Document>
        <Page style={styles.body}>
          <Image src={PetronasLogo} style={styles.logoImage} />
          <Image src={chartImage} style={styles.chartImage} />
          <Text>Predict Chart</Text>
          <View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Category</Text>
              <Text style={styles.tableCell}>Burst Pressure (MPa)</Text>
            </View>
            {combinedData && combinedData.map((row, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{row.x}</Text>
                <Text style={styles.tableCell}>{row.y}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    );
  };

export default PdfPredict;
