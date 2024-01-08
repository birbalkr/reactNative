import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, FlatList } from 'react-native';


function App() {
    const saveApiData = async () => {
        const data = {
            name: "sam",
            age: 34,
            email: "asb@gmail.com"
        }
        const url = "http://192.168.43.106:3000/users";
        let result = await fetch(url,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            result =await result.json();
            console.warn(result);
            
    }

    return (
        <View >
            <Text style={{ fontSize: 20 }}>Call own API</Text>
            <Button title='save data' onPress={saveApiData}/>
        </View>
    )
};




export default App;