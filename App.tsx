import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";

const App = () => {
    return (
        <View style={style.main}>
            <Text style={{ fontSize: 25, color: 'red' }}>Pressable Button</Text>
            <Pressable
            onPress={()=>console.warn('onPress')}
            onLongPress={()=>console.warn('longPress')}
            onPressIn={()=>console.warn('pressin')}
            onPressOut={()=>console.warn('pressout')}
            >
                <Text style={style.buttonview}>Pressable</Text>
            </Pressable>
        </View>

    )
};

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent:'center'
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