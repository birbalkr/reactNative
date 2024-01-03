import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    FlatList,
    Button
} from "react-native";
const App = () => {
    const [show, setShow] = useState(true)
    return (
        <View style={{ padding: 12 }}>
            <Text style={{ fontSize: 25, color: 'red' }}>useEffect for Unmount</Text>
            <Button title='Toggle' onPress={()=>setShow(!show)} />
            {
            show ? <Student /> :null
            }
        </View>
    )
}
const Student = () => {
    useEffect(()=>{
        return()=>{
            console.warn("useEffect called on unmount");
        }
        
    })
    return (
        <View>
            <Text style={{ fontSize: 20, color: 'green' }}>Student Component</Text>
        </View>
    )
}

export default App;

// npx react-native start