import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Button
} from "react-native";
const App=()=>{
  const [show, setShow]=useState(true)
    return(
        <View style={{padding:12}}>
            <Text style={{fontSize:25,color:'red'}}>Show And Hide Component</Text>
            <Button title='Show Component' onPress={()=>setShow(true)}/>
            <Button title='Hide Component' onPress={()=>setShow(false)}/>
            <Button title='Toggle Component' onPress={()=>setShow(!show)}/>
            {
                show ? <User/> : null
            }
        </View>
    )
}
const User=()=>{
    return(
        <View>
            <Text style={{fontSize:20,color:'green'}}>User Component</Text>
        </View>
    )
}

export default App;
