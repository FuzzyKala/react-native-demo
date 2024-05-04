import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FirstView from "./screens/FirstView";
import SecondView from "./screens/SecondView";
import ThirdView from "./screens/ThirdView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function NavigationComponent() {
  const [someStateVariable, setSomeStateVariable] = React.useState("foo");

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FirstView"
            component={FirstView}
            options={{ headerShown: true }}
          />

          <Stack.Screen name="SecondView">
            {(props) => <SecondView {...props} someProp={someStateVariable} />}
          </Stack.Screen>

          <Stack.Screen
            name="ThirdView"
            component={ThirdView}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
