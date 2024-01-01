import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList
} from "react-native";
import UserData from './components/UserData';
function App() {
  const users = [
    {
      id: 1,
      name: "Aditya",
      email: 'abc@gmail.com'
    },
    {
      id: 2,
      name: "Sumit",
      email: 'abc@gmail.com'
    },
    {
      id: 3,
      name: "Rahul",
      email: 'abc@gmail.com'
    }
    , {
      id: 4,
      name: "Atul",
      email: 'abc@gmail.com'
    }
  ]

  return (
    <View>
      <Text style={{ fontSize: 25 }}>Component in loop with FlatList</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData item={item} />} />
    </View>
  );
};


export default App;
