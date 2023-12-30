import React, { useState } from 'react';
import {
  Button,
  Text,
  View
} from "react-native";

function App() {
  const [name,setName]=useState("Anil");
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Props in  React js</Text>
      <Button title='Update Props' onPress={()=>{setName("Aditya Kumar")}}/>
      <User name={name} age={29}/>
    </View>
  );
};

const User=(props)=>{
  return(
    <View style={{backgroundColor:"green",padding:15}}>
      <Text style={{fontSize:30}}>Name: {props.name}</Text>
      <Text style={{fontSize:30}}>Age: {props.age}</Text>
    </View>
  );
};

export default App;
