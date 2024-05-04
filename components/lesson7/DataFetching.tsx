import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DetailScreen from "./DetailScreen";
import MasterScreen from "./MasterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function DataFetching() {
  return (
    <View style={styles.container}>
      <Text>DataFetching</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MasterScreen" component={MasterScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 30,
    // backgroundColor: "#f0f0f0",
  },
});
