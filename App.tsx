import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, FlatList, TextInput } from 'react-native';
import style from './style';
import { StyleSheet } from 'react-native';


function App() {
    const [name,setName]=useState('');
    const [age,setAge]=useState(0   );
    const [email,setEmail]=useState('');
    const Savedata = async ()=>{
            const url="http://192.168.43.106:3000/users";
            let result = await fetch(url,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,age,email})
            });
            result=await result.json();
            console.warn(result);
            

    }

    return (
        <View >
            <Text style={{ fontSize: 20 }}>Form with input field</Text>
            <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)} placeholder='Enter name'/>
            <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)} placeholder='Enter age'/>
            <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} placeholder='Enter email'/>
            <Button title='save data' onPress={Savedata}/>
        </View>
    )
};

const styles=StyleSheet.create({
    input:{
        borderColor:'skybule',
        borderWidth:1,
        margin:20
    }
})




export default App;