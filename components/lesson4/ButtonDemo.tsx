import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Button,
  Pressable,
} from "react-native";
import React from "react";

export default function ButtonDemo() {
  const handlePress = (buttonType: string) => {
    console.log(buttonType + " pressed");
  };
  return (
    <View style={styles.container}>
      <Button title="Button" color="green" onPress={handlePress} />
      <Button title="Button" color="orange" onPress={handlePress} />

      <Pressable
        onPress={() => handlePress("Pressable")}
        onPressIn={() => console.log("press activated")}
        onLongPress={() => console.log("press long")}
        onPressOut={() => console.log("press released")}
      >
        <View style={styles.touchable}>
          <Text style={{ fontWeight: "700" }}>Pressable</Text>
          <Text>
            Core Component wrapper that can detect various stages of press
            interactions on any of its defined children.
          </Text>
          <Text>Platform Support: Works well across different platforms.</Text>
        </View>
      </Pressable>

      <TouchableHighlight
        style={styles.touchable}
        underlayColor="lightblue"
        onPress={() => handlePress("TouchableHighlight")}
      >
        <View>
          <Text style={{ fontWeight: "700" }}>TouchableHighlight</Text>
          <Text>
            Highlights: Provides a customizable background color change when
            pressed.
          </Text>
          <Text>
            Props: Takes an additional underlayColor prop for setting the
            highlight color.
          </Text>
          <Text>Platform Support: Works well across different platforms.</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => handlePress("TouchableOpacity")}
      >
        <Text style={{ fontWeight: "700" }}>TouchableOpacity</Text>
        <Text>
          Highlights: Reduces opacity when pressed and returns to normal when
          released.
        </Text>
        <Text>Platform Support: Works well across different platforms.</Text>
      </TouchableOpacity>

      <TouchableNativeFeedback
        onPress={() => handlePress("TouchableNativeFeedback")}
      >
        <View style={styles.touchable}>
          <Text style={{ fontWeight: "700" }}>TouchableNativeFeedback</Text>
          <Text>
            an Android-specific component for providing native feedback
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    flex: 1,
    width: "100%",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  touchable: {
    margin: 10,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "lightyellow",
  },
});
