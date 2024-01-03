import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from "react-native";

const App = () => {
    return (
        <View style={style.main}>
            <Text style={{ fontSize: 25, color: 'red' }}>Responsive UI With flex</Text>
            <View style={style.box1}>
                <View style={style.innerbox}></View>
                <View style={style.innerbox1}></View>
                <View style={style.innerbox2}></View>

            </View>
            <View style={style.box2}></View>
            <View style={style.box3}></View>
        </View>
    )
};

const style=StyleSheet.create({
    main:{
        flex:1
    },
    box1:{
        flex: 1, 
        backgroundColor:'red',
        flexDirection:'row'
    }
    ,
    box2:{
        flex: 1, 
        backgroundColor:'green'
    }
    ,
    box3:{
        flex: 1, 
        backgroundColor:'blue'
    },
    innerbox:{
        flex:1,
        backgroundColor:'skyblue',
        margin:10
    }
    ,
    innerbox1:{
        flex:1,
        backgroundColor:'yellow',
        margin:10
    }
    ,
    innerbox2:{
        flex:1,
        backgroundColor:'orange',
        margin:10
    }
})
export default App;

// npx react-native start