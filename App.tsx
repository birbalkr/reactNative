import React, { Component} from 'react';
import {
  Text,
  View,
  FlatList,
  SectionList,
  Button,
  TextInput
} from "react-native";
import Student from './components/Student';

class App extends Component{
  furit=()=>{
    console.warn("Apple")
  }

  render(){
    return(
      <View >
        <Text style={{fontSize:30,color:'red'}} >Class Components</Text>
        <TextInput placeholder='Enter Your Name'/>
        <Button title='Press'onPress={this.furit}></Button>
        <Student/>
      </View>
    )
  }

}


export default App;
