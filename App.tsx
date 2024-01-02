import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  SectionList
} from "react-native";
function App() {
  const users = [
    {
      id: 1,
      name: "Aditya",
      data:["PHP","Javascript","React js"]
    },
    {
      id: 2,
      name: "Sumit",
      data:["PHP","Java","React js"]
    },
    {
      id: 3,
      name: "Rahul",
      data:["C++","Java","HTML"]
    }
    , {
      id: 4,
      name: "Atul",
      data:["PHP","Python","React js"]
    }
  ]

  return (
    <View style={{padding:15}}>
      <Text style={{ fontSize: 25 }}>Section List in React Native</Text>
      <SectionList 
      sections={users}
      renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text> }
      renderSectionHeader={({section:{name}})=>(
        <Text style={{fontSize:25,color:"red"}}>{name}</Text>
      )}/>
    </View>
  );
};


export default App;
