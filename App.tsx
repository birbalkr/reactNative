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
      <Text style={{ fontSize: 30 }}>Grid With Dynamic Data</Text>
      <View style={style.item}>
        {
          users.map((item)=><Text style={style.itemtext}>{item.name}</Text>)
        }
      </View>
    </View>
  );
};

// internal style
const style = StyleSheet.create({
  item: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  itemtext:{
    fontSize:25,
    backgroundColor:'blue',
    color:'#fff',
    margin:5,
    padding:5,
    width:100,
    height:100,
    textAlign:'center',
    textAlignVertical:'center'
  }
});
export default App;
