import React, { Component } from 'react';
import { 
  Button,
  Text,
  View
} from "react-native";

import UserData from './components/UserData';

function App(){
  const fruit=()=>{
    console.warn("Function called");
  }
  return(
    <View>
      <Text style={{fontSize:30}}>Button onPress Event</Text>
      <Button title='On Press' onPress={fruit} color={'green'}></Button>
      <Button title='call function use' onPress={()=>fruit()} color={'green'}></Button>
    </View>
      
  );
};




export default App;
