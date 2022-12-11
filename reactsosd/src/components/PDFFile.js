import React from 'react';
import { Page, Image, Text, Document, StyleSheet } from '@react-pdf/renderer';
import qr from '../img/qr.png';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    width: 200,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

export const PDFFile = ({ invoice }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Tiket
        </Text>
        <Image style={styles.image} src={qr} />
        <Text style={styles.text}>order_id : {invoice[0].order_id}</Text>
        <Text style={styles.text}>user_id : {invoice[0].user_id}</Text>
        <Text style={styles.text}>asal : {invoice[0].asal}</Text>
        <Text style={styles.text}>tujuan : {invoice[0].tujuan}</Text>
        <Text style={styles.text}>tanggal : {invoice[0].tanggal}</Text>
        <Text style={styles.text}>
          waktu_berangkat : {invoice[0].waktu_berangkat}
        </Text>
        <Text style={styles.text}>waktu_tiba : {invoice[0].waktu_tiba}</Text>
        <Text style={styles.text}>nama : {invoice[0].nama}</Text>
        <Text style={styles.text}>no : {invoice[0].no}</Text>
        <Text style={styles.text}>alamat : {invoice[0].alamat}</Text>
        <Text style={styles.text}>harga : {invoice[0].harga}</Text>
        <Text style={styles.text}>
          jumlah_tiket : {invoice[0].jumlah_tiket}
        </Text>
        <Text style={styles.text}>total_harga : {invoice[0].total_harga}</Text>
      </Page>
    </Document>
  );
};
