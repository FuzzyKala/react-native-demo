import { StyleSheet, Text, View } from "react-native";
import FirstView from "./components/screens/FirstView";
import NavigationComponent from "./components/NavigationComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <NavigationComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
