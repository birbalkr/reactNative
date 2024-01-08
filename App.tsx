import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';


function App() {
    const [data,setData]=useState(undefined);
    const getAPIData = async ()=>{
        const url="https://jsonplaceholder.typicode.com/posts";
        let result= await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(()=>{
        getAPIData();
    },[])
    return (
        <View >
            <Text style={{fontSize:20}}>API Call</Text>
            {
                data?<View>
                    <Text style={{fontSize:29, margin:12}}>{data.id}</Text>
                    <Text style={{fontSize:29, margin:12}}>{data.title}</Text>
                    <Text style={{fontSize:29, margin:12, color:'red'}}>{data.body}</Text>
                </View>
                :null
            }
        </View>
    )
};




export default App;