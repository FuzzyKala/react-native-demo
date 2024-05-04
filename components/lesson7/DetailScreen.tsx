import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function DetailScreen({ route }) {
  const product = route.params.product;
  console.log(product);
  return (
    <View style={styles.container}>
      <Text>{product.title}</Text>
      <Image
        source={{ uri: product.thumbnail }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{product.price}</Text>
      <Text>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
});
