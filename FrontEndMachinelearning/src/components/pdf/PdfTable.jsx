import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles for the table
const styles = StyleSheet.create({
    mainTable:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        // alignItems:"center"
    },
  table: { width: '100%', border: '1 solid black' },
  tableRow: { flexDirection: 'row', width:450 },
  tableCell: { width:150, border: '1 solid black' },
});

// Sample data for the table
const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'James Brown', age: 35 },
];

const MyDocument = () => (
  <Document>
    <Page style={styles.mainTable}>
      <View >
        {/* Table header */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>ID</Text>
          <Text style={styles.tableCell}>Name</Text>
          <Text style={styles.tableCell}>Age</Text>
        </View>

        {/* Table body */}
        {data.map((row) => (
          <View key={row.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{row.id}</Text>
            <Text style={styles.tableCell}>{row.name}</Text>
            <Text style={styles.tableCell}>{row.age}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const DownloadPDF = () => (
  <PDFDownloadLink document={<MyDocument />} fileName="table.pdf">
    {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
  </PDFDownloadLink>
);

export default DownloadPDF;
