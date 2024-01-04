import React, { useState } from 'react';
import {
    Button,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";

const App = () => {
    const [hide, setHide]=useState(false)
    const [barstyle,setBarStyle]=useState('defult')
    return (
        <View style={style.main}>
            <Text style={{ fontSize: 25, color: 'red' }}>Status Bar</Text>
            <StatusBar 
            backgroundColor="red"
            barStyle={barstyle}
            hidden={hide}   
            />
            <Button title='Toggle Status bar' onPress={()=>setHide(!hide)}></Button>
            <Button title='Update Style' onPress={()=>setBarStyle('dark-content')}></Button>
        </View>

    )
};

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonview: {
        backgroundColor:'blue',
        color:'#fff',padding:10,
        margin:10,
        borderRadius:10,
        fontSize:20,
        textAlign:'center',
        shadowColor:"red",
        elevation:20
    },
})

export default App;

// npx react-native start