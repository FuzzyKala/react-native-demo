import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FirstView() {
  return (
    <View style={styles.container}>
      <Text>This is the FirstView page </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
