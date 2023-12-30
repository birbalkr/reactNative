import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet
} from "react-native";
import ExStyle from './style'
function App() {
  return (
    <View>
      <Text style={{ fontSize: 30,color:'red',backgroundColor:'lightblue' }}>Style Sheet inline</Text>
      <Text style={style.textBox}>Style Sheet Internal</Text>
      <Text style={ExStyle.tBox}>Style Sheet External</Text>
      <Text style={[style.textBox,ExStyle.tBox,{marginTop:12}]}>Style Sheet two class</Text>
    </View>
  ); 
};

// internal style
const style = StyleSheet.create({
  textBox:{
    color:'green',
    fontSize:20,
    backgroundColor:'lightgreen',
    margin:12,
    borderRadius:25,
    padding:12,
    textAlign:'center',
    borderColor:'red',
    borderWidth:5
  }
})

// External style
// create a file style.js
export default App;
