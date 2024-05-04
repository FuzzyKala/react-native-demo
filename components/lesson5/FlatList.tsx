import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import countries from "./countries";
import CountryItem from "./CountryItem";

// export default function L5FlatList() {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handlePress = (item) => {
//     console.log("item: ", item);
//     setSelectedItem((prevItem) => (prevItem === item ? null : item));
//     console.log("selectedItem: ", selectedItem);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 3 }}>
//         <FlatList
//           data={countries}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               onPress={() => {
//                 handlePress(item);
//               }}
//               style={
//                 (styles.block,
//                 {
//                   backgroundColor: selectedItem === item ? "yellow" : "#ffffff",
//                 })
//               }
//             >
//               <CountryItem country={item} />
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//       <View style={{ flex: 1, backgroundColor: "#9ed8ff", padding: 30 }}>
//         <Text style={{ fontWeight: "700" }}>
//           {selectedItem ? selectedItem.name : "No country selected"}
//         </Text>
//       </View>
//     </View>
//   );
// }

// export default function L5FlatList() {
//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 3 }}>
//         <FlatList
//           data={countries}
//           renderItem={({ item }) => <CountryItem country={item} />}
//         />
//       </View>
//       <View style={{ flex: 1, backgroundColor: "#9ed8ff", padding: 30 }}>
//         <Text style={{ fontWeight: "700" }}>Selected Countries</Text>
//       </View>
//     </View>
//   );
// }

export default function L5FlatList() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handlePress = (item: object) => {
    setSelectedItem((prevItem) => (prevItem === item ? null : item));
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={countries}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={
                (styles.block,
                {
                  backgroundColor: selectedItem === item ? "yellow" : "#ffffff",
                })
              }
              onPress={() => {
                handlePress(item);
              }}
            >
              <CountryItem country={item} />
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      <View style={styles.display}>
        <Text
          style={{
            fontWeight: "700",
            padding: 5,
            backgroundColor: selectedItem ? "#9ed8ff" : "#ffffff",
          }}
        >
          {selectedItem ? selectedItem.name : "No country selected"}
          {console.log("selectedItem: ", selectedItem)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  block: {
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 8,
    borderRadius: 10,
    justifyContent: "center",
  },
  display: {
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 10,
    flex: 1,
  },
});
