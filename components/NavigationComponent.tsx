import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FirstView from "./screens/FirstView";

export default function NavigationComponent() {
  return (
    <View style={styles.container}>
      <Text>NavigationComponent here!</Text>
      <FirstView />
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
