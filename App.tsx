import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FirstView from "./components/lesson6/screens/FirstView";

import ButtonDemo from "./components/lesson4/ButtonDemo";
import TextDemo from "./components/lesson4/TextDemo";
import CountryItem from "./components/lesson5/CountryItem";
import L5FlatList from "./components/lesson5/FlatList";
import NavigationComponent from "./components/lesson6/NavigationComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <ButtonDemo /> */}
      {/* <TextDemo /> */}
      {/* <L5FlatList /> */}
      <NavigationComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 50,
    // borderWidth: 1,
    // borderRadius: 5,
  },
});
