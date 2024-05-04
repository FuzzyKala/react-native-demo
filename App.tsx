import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import ButtonDemo from "./components/lesson4/ButtonDemo";
import TextDemo from "./components/lesson4/TextDemo";
import CountryItem from "./components/lesson5/CountryItem";
import L5FlatList from "./components/lesson5/FlatList";
import NavigationComponent from "./components/lesson6/NavigationComponent";
import DataFetching from "./components/lesson7/DataFetching";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <ButtonDemo /> */}
      {/* <TextDemo /> */}
      {/* <L5FlatList /> */}
      {/* <NavigationComponent /> */}
      <DataFetching />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#D00",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
});
