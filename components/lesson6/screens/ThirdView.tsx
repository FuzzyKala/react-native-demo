import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import ButtonStyles from "../styles/ButtonStyles";
import ScreenStyles from "../styles/ScreenStyles";

export default function ThirdView({ route, navigation }) {
  const { name, age, city } = route.params;
  console.log("ThirdView -> route", route);
  return (
    <View style={ScreenStyles.screen}>
      <Text style={{ color: "blue", fontSize: 24, justifyContent: "center" }}>
        ThirdView
      </Text>
      {/* <Text> SomeData name from SecondView is {name}</Text>
      <Text> SomeData age from SecondView is {age}</Text>
      <Text> SomeData city from SecondView is {city}</Text> */}
      <TouchableHighlight
        style={ButtonStyles.button}
        onPress={() => navigation.navigate("FirstView")}
      >
        <Text style={ButtonStyles.buttonText}>Go to FirstView</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({});
