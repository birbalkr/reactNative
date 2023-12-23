import React from 'react';
import { 
  Button,
  Text,
  View
} from "react-native";

let age = 18;
var email = "abcd@gmail.com";
function first(){
  return "first";
}
function App(){
  return(
    <View>
      <Text style ={{fontSize:20}} > email id : {email} </Text>
      <Text style ={{fontSize:30}} > function call: {first() } </Text>
      <Text style ={{fontSize:30}} >{ age } </Text>
      <Text style ={{fontSize:30}} > if else use{age===18?"above age 20":"under age"} </Text>
    </View>
      
  );
}


export default App;
