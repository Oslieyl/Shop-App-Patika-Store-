import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Dimensions, TextInput } from "react-native";
import card_data from "./Components/card_data.json";
import ProductsCard from "./Components/Cards/ProductsCard";

function App() {
  const renderPati = ({ item }) => <ProductsCard products={item} />;
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Patika Store</Text>
      <TextInput style={styles.input}
      placeholder="...Ara"

      />
      <FlatList 
        keyExtractor={(item) => item.id.toString()}
        data={card_data}
        renderItem={renderPati}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  headerText: {
    textAlign: "left",
    fontWeight: "bold",
    color: "hotpink",
    fontSize: 40,
    margin:5,
    padding:5
  },
  input: {
    height: 40,
    margin: 10,
    borderRadius:55,
    padding: 10,
    backgroundColor:"#eee",
    textAlign:"left"
  },

});

export default App;
