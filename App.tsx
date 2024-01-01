import React, { useState } from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  FlatList
} from "react-native";
function App() {
  const users = [
    {
      id: 1,
      name: "Aditya"
    },
    {
      id: 2,
      name: "Sumit"
    },
    {
      id: 3,
      name: "Rahul"
    }
    ,{
      id: 4,
      name: "Atul"
    }
  ]

  return (
    <View>  
      <Text style={{ fontSize: 25 }}>List with Flat List Component</Text>
      <FlatList
      data={users}
      renderItem={({item})=><Text style={style.item}>{item.name}</Text>}
      keyExtractor={item=>item.id}/>

    </View>
  );
};

// internal style
const style = StyleSheet.create({
  item: {
    color: '#fff',
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
    padding:10,
    backgroundColor:"blue"
  }
});
export default App;
