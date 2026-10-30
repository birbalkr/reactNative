import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.mainBox}>
        <Text style={styles.textSize}>Text View</Text>
      </View>

      <View>
        <Button
          title="click"
          onPress={() => Alert.alert("Invalid", "date is invalid",[
            {
              text:"cancle",
              onPress:()=>console.log("cancle")
            },
            {
              text:"ok",
              onPress:()=>{console.log("ok");
              }
            }
          ])}
        />
      </View>
    </View>
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
  mainBox: {
    width: boxWidth > 600 ? "80%" : "90%",
    height: boxHeight > 500 ? "80%" : "90%",
    backgroundColor: "pink",
  },
  textSize: {
    fontSize: 18,
    textAlign: "center",
  },
});
