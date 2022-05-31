import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, SafeAreaView, ScrollView, View } from 'react-native';
import React, { useState, useEffect } from "react";
import ModalSelector from 'react-native-modal-selector'
import axios from 'axios';
import Card from './components/card';

const Barang = () => {

  const [barang, newBarang] = useState([]);
  const [category, newcategory] = useState("semua");
  const [price, newprice] = useState(0);
  const [rate, newrate] = useState(0);
  const [price2, newprice2] = useState(10000);
  const [rate2, newrate2] = useState(5);

  let idxcategory = 0;
  const pilihan = [
    { key: idxcategory++, label: 'semua' },
    { key: idxcategory++, label: 'smartphones' },
    { key: idxcategory++, label: 'laptops' },
    { key: idxcategory++, label: 'fragrances' },
    { key: idxcategory++, label: 'skincare' },
    { key: idxcategory++, label: 'groceries' },
    { key: idxcategory++, label: 'home-decoration' },
    { key: idxcategory++, label: 'furniture' },
    { key: idxcategory++, label: 'tops' },
    { key: idxcategory++, label: 'womens-dresses' },
    { key: idxcategory++, label: 'womens-shoes' },
    { key: idxcategory++, label: 'mens-shirts' },
    { key: idxcategory++, label: 'mens-shoes' },
    { key: idxcategory++, label: 'mens-watches' },
    { key: idxcategory++, label: 'womens-watches' },
    { key: idxcategory++, label: 'womens-bags' },
    { key: idxcategory++, label: 'womens-jewellery' },
    { key: idxcategory++, label: 'sunglasses' },
    { key: idxcategory++, label: 'automotive' },
    { key: idxcategory++, label: 'motorcycle' },
    { key: idxcategory++, label: 'lighting' },
  ];

  useEffect(() => {
    ambil();
  }, []);

  function ambil() {
    axios.get(`https://dummyjson.com/products?limit=100`).then(function (res) {
      newBarang(res.data.products);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.judul}>Toko Serba Ada</Text>
      <View style={styles.form}>
        <Text style={styles.cardTitle}>Filter</Text>
        <View style={styles.warp}>
          <Text style={styles.Text1}>Kategori</Text>
          <ModalSelector
            data={pilihan}
            initValue="Pilih Pelabuhan Awal"
            onChange={(option) => {
              newcategory(option.label);
            }}
          >
            <TextInput
              style={styles.masukan}
              editable={false}
              value={category}
            />
          </ModalSelector>
        </View>

        <View style={styles.warp}>
          <Text style={styles.Text1}>Harga</Text>
          <TextInput
            style={styles.inputan}
            onChangeText={newprice}
            value={price}
          />
          <Text style={styles.Text2}> - </Text>
          <TextInput
            style={styles.inputan}
            onChangeText={newprice2}
            value={price2}
          />
        </View>
        <View style={styles.warp}>
          <Text style={styles.Text1}>Rating</Text>
          <TextInput
            style={styles.inputan}
            onChangeText={newrate}
            value={rate}
          />
          <Text style={styles.Text2}> - </Text>
          <TextInput
            style={styles.inputan}
            onChangeText={newrate2}
            value={rate2}
          />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <ScrollView style={styles.produkList} showsVerticalScrollIndicator={false}>
          {
            barang.map((item) => {
              if ("semua" == category && (item.price < price2 && price < item.price) && (item.rating < rate2 && rate < item.rating)) {
                return (
                  <Card image={item.images[0]} key={item.id} nama={item.title} harga={item.price} rating={item.rating} kategori={item.category} description={item.description} />
                )
              } else if (item.category == category && (item.price < price2 && price < item.price) && (item.rating < rate2 && rate < item.rating)) {
                return (
                  <Card image={item.images[0]} key={item.id} nama={item.title} harga={item.price} rating={item.rating} kategori={item.category} description={item.description} />
                )
              }
            })
          }
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  form: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#d1dce2',
    borderColor: '#303030',
    marginVertical: 10,
    alignSelf: 'center',
  },
  warp: {
    flexDirection: 'row',
    width: "90%",
    padding: 5
  },
  Text1: {
    width: "20%"
  },
  Text2: {
    width: "4%"
  },
  inputan: {
    width: "20%",
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#303030"
  },
  masukan: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#303030"
  },
  judul: {
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: '#028281',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
  produkList: {
    marginBottom: '40%',
    paddingVertical: 10,
    width: '90%',
  }, cardTitle: {
    fontWeight: 'bold',
    marginBottom: 1,
    fontSize: 17,
    paddingLeft: 13,
    paddingTop: 7,
    color: '#000000',
  },
});

export default Barang