import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MasterItem({ name, price }) {
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#DDDDDD",
    borderWidth: 1,
    borderColor: "black",
  },
});
