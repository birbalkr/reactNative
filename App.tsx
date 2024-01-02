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
  constructor(){
    super();
    this.state={
      name:"Aditya"
    }
  }
  updateName(text){
    this.setState({name:text})
  }

  render(){
    return(
      <View >
        <Text style={{fontSize:30,color:'red'}} >{this.state.name}</Text>
        <TextInput placeholder='Enter Your Name'
        onChangeText={(text)=>this.updateName(text)}/>
        <Button title='Press'></Button>
        <Student name={this.state.name} />
      </View>
    )
  }

}


export default App;
