import React, { useState } from 'react';
import {
  Button,
  Text,
  View
} from "react-native";

import UserData from './components/UserData';

function App() {
  const [name, setName] = useState("Aditya");

  function testname() {
    setName("admin");
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button title='update name' onPress={testname}></Button>
    </View>

  );
};


export default App;
