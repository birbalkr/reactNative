import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';


function App() {
    const [data, setData] = useState([]);
    const getAPIData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getAPIData();
    }, [])
    return (
        <View >
            <Text style={{ fontSize: 20 }}>List With API Call using MAP Function</Text>
            {
                data.length ?
                data.map((item)=><ScrollView>
                    <View>
                        <Text style={{fontSize:20,marginLeft:15}}>Id : {item.id}</Text>
                        <Text style={{fontSize:20,marginLeft:15}}>Title : {item.title}</Text>

                    </View>
                </ScrollView>):null
            }
        </View>
    )
};




export default App;