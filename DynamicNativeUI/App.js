import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  FlatList,
  SafeAreaView,
} from "react-native";

import userdata from "./data.json";
import LoginForm from "./components/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
}

const boxHeight = Dimensions.get("window").height;
const boxWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
