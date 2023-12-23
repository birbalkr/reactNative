import React from 'react';
import { 
  Button,
  Text,
  View
} from "react-native";

function App(){
  return(
    <View>
      <Text style ={{fontSize:30}} >Hello Ad</Text>
      <Text style ={{fontSize:30}} >Button 1</Text>
      <Button title='Press Here'></Button>
      <Text style ={{fontSize:30}} >Button 2</Text>
      <Button title='More'></Button>
    </View>
      
  );
}


export default App;
