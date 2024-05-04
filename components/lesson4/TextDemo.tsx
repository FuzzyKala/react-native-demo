import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

export default function TextDemo() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (text: string) => {
    console.log(text);
    setInputText(text);
  };

  const handleButtonPress = () => {
    Alert.alert("Input Text", inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={handleInputChange}
        value={inputText}
      />
      <Button title="Show Input" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
