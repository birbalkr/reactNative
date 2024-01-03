import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";

const App = () => {
    const [radio, setRadio]=useState(1)
    return (
            
            <View style={style.main}>
                
                <Text style={{ fontSize: 25, color: 'red' }}>Radio Button</Text>
                <TouchableOpacity onPress={()=>setRadio(1)}>
                    <View style={style.radiorap}>
                        <View style={style.radio}>
                            {
                                radio ===1 ?  <View style={style.radiobg}></View> :null
                            }
                        </View>
                        <Text>Radio 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setRadio(2)}>
                    <View style={style.radiorap}>
                        <View style={style.radio}>
                        {
                                radio ===2 ?  <View style={style.radiobg}></View> :null
                        }
                        </View>
                        <Text>Radio 1</Text> 
                    </View>
                </TouchableOpacity>
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