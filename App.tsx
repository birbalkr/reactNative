import React, { useState } from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView
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
    },
    {
      id: 3,
      name: "Rahul"
    }
    ,{
      id: 4,
      name: "Atul"
    }
    ,
    {
      id: 3,
      name: "Rahul"
    }
    ,{
      id: 4,
      name: "Atul"
    },
    {
      id: 3,
      name: "Rahul"
    }
    ,{
      id: 4,
      name: "Atul"
    },
    {
      id: 3,
      name: "Rahul"
    }
    ,{
      id: 4,
      name: "Atul"
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
      <Text style={{ fontSize: 30 }}>List with map function</Text>
      <ScrollView>
      {
        users.map((item)=><Text style={style.item}>{item.name}</Text>)
      }
      </ScrollView>
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
