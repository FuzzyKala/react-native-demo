import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import ButtonStyles from "../styles/ButtonStyles";
import ScreenStyles from "../styles/ScreenStyles";

export default function FirstView({ navigation }) {
  const someData = { name: "John", age: 25, city: "New York" };

  return (
    <View style={ScreenStyles.screen}>
      <Text style={{ color: "white", fontSize: 24, justifyContent: "center" }}>
        This is the FirstView screen
      </Text>
      <TouchableHighlight
        style={ButtonStyles.button}
        onPress={() => navigation.navigate("SecondView", someData)}
      >
        <Text>Go to SecondView</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({});
