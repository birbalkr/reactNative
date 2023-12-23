import React, { Component } from 'react';
import { 
  Button,
  Text,
  View
} from "react-native";

import UserData from './components/UserData';

function App(){
  return(
    <View>
      <Text style ={{fontSize:30}} > Components </Text>
      {/* use Component */}
      <UserData/>
      <RNTU/>
    </View>
      
  );
};

// create Component
const RNTU=()=>{
  return(
    <View>
      <Text style ={{fontSize:20}} > Name: RNTU </Text>
      <Text style ={{fontSize:20}} > Age: 24 </Text>
      <Text style ={{fontSize:20}} > Email: rntu@gmail.com </Text>
      <UserData/>
    </View>
    
  );
}



export default App;
