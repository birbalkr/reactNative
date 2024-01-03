import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";

const App = () => {
    const skill=[
        {
            id:1,
            name:'Java'
        },
        {
            id:2,
            name:'C++'
        },
        {
            id:3,
            name:'React'
        },
        {
            id:4,
            name:'JavaScript'
        },
        {
            id:5,
            name:'PHP'
        },
        {
            id:6,
            name:'Python'
        },
    ]
    const [radio, setRadio]=useState(1)
    return (
            
            <View style={style.main}>
                
                <Text style={{ fontSize: 25, color: 'red' }}>Dynamic Radio Button</Text>
                {
                    skill.map((item,index)=> <TouchableOpacity 
                    key={index}
                    onPress={()=>setRadio(item.id)}>
                    <View style={style.radiorap}>
                        <View style={style.radio}>
                            {
                                radio ===item.id ?  <View style={style.radiobg}></View> :null
                            }
                        </View>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>)
                }
            </View>
        
    )
};

const style=StyleSheet.create({
    main:{
        flex:1,
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    },
    radio:{
        height:40,
        width:40,
        borderColor:'black',
        borderRadius:20,
        borderWidth:2,
        margin:10
    },
    radiorap:{
        flexDirection:'row',
        alignItems:'center'
    },
    radiobg:{
        backgroundColor:'black',
        height:28,
        width:28,
        borderRadius:20,
        margin:4
    }
})

export default App;

// npx react-native start