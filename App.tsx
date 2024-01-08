import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, FlatList } from 'react-native';


function App() {
    const [data, setData] = useState([]);
    const getAPIData = async () => {
        const url = "http://192.168.43.106:3000/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getAPIData();
    }, [])
    return (
        <View >
            <Text style={{ fontSize: 20 }}>Call json-server API</Text>
            {
                data.length?
                data.map((item)=><View style={{borderColor:'red', borderWidth:1, margin:12, padding:12}}>
                    <Text style={{ fontSize: 20 }}>name: {item.name}</Text>
                    <Text style={{ fontSize: 20 }}>id: {item.id}</Text>
                    <Text style={{ fontSize: 20 }}>email: {item.email}</Text>
                </View>):null
            }
        </View>
    )
};




export default App;