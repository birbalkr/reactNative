import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  FlatList,
} from "react-native";

import userdata from "./data.json";

export default function App() {
  return (
    <View>
      <StatusBar hidden />
      <FlatList
        style={{ marginTop: 25, marginLeft: 10 }}
        data={userdata}
        ListHeaderComponent={
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
            User List
          </Text>
        }
        ListFooterComponent={
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
            Footer List
          </Text>
        }
        ListEmptyComponent={
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
            user
          </Text>
        }
        initialNumToRender={10}
        windowSize={5}
        renderItem={({ item }) => {
          console.log(item.id);
          return (
            <View key={item.id} style={styles.container}>
              <Text>Name:{item.name}</Text>
              <Text>Age:{item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const boxHeight = Dimensions.get("window").height;
const boxWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderStyle: "dotted",
    borderWidth: 2,
    marginBottom: 10,
  },
  mainBox: {
    width: boxWidth > 600 ? "20%" : "30%",
    height: boxHeight > 500 ? "20%" : "30%",
    backgroundColor: "pink",
  },
  textSize: {
    fontSize: 18,
    textAlign: "center",
  },
});
