import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import MasterItem from "./MasterItem";
import { keys } from "../lesson5/countries";

export default function MasterScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");

    const responseData = await response.json();
    setProducts(responseData.products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView}>
        {products &&
          products.map((product) => {
            return (
              <TouchableHighlight
                key={product.id}
                onPress={() => {
                  navigation.navigate("DetailScreen", { product });
                }}
              >
                <MasterItem name={product.title} price={product.price} />
              </TouchableHighlight>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "lightgray",
  },
  scrollView: {
    width: "100%",
  },
});
