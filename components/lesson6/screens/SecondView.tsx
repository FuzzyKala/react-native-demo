import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import ButtonStyles from "../styles/ButtonStyles";
import ScreenStyles from "../styles/ScreenStyles";
import { some } from "../../lesson5/countries";

export default function SecondView({ someProp, route, navigation }) {
  const someData = route.params;
  const { name, age, city } = route.params;

  const changeSomeData = (someData) => {
    // Create a shallow copy of someData
    const newSomeData = { ...someData };
    // Modify the properties of the new object
    newSomeData.name = "Jane";
    newSomeData.age = 30;
    newSomeData.city = "Los Angeles";
    // Return the new object
    console.log("SecondView -> newSomeData", newSomeData);
    return newSomeData;
  };
  return (
    <View style={ScreenStyles.screen}>
      <Text style={{ color: "yellow", fontSize: 24, justifyContent: "center" }}>
        This is the SecondView screen
      </Text>
      <Text>Received value of name from firstView: {name}</Text>
      <Text>Received value of age from firstView: {age}</Text>
      <Text>Received value of city from firstView: {city}</Text>
      <Text>Received value of someProp from root component: {someProp}</Text>

      <TouchableHighlight
        style={ButtonStyles.button}
        onPress={() =>
          navigation.navigate("ThirdView", changeSomeData(someData))
        }
      >
        <Text style={ButtonStyles.buttonText}>Go to ThirdView</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
