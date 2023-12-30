import React, { useState } from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet
} from "react-native";
  
function App() {
  const [name,setName]=useState('');
  return (
    <View>
      <Text style={{fontSize:30}}>Handle Text Input</Text>
      <Text style={{fontSize:30}}>Your Name is: {name} </Text>
      <TextInput style={style.TextInput}
      placeholder='Enter Your Name'
      value={name}
      onChangeText={(text)=>setName(text)}
      />
      <Button title='Clear Input Box' onPress={()=>setName('')}></Button>
    </View>
  ); 
};

// internal style
const style = StyleSheet.create({
  TextInput:{
    color:'green',
    fontSize:20,
    backgroundColor:'lightgreen',
    margin:12,
    borderRadius:25,
    padding:12,
    borderColor:'red',
    borderWidth:5
  }
});
export default App;
