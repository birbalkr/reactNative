import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

const App = () => {
    return (
            
            <View style={style.main}>
                <Text style={{ fontSize: 25, color: 'red' }}>TouchableHighlight Button</Text>
                <TouchableHighlight>
                    <Text style={[style.button,style.Buttontext]}>Button</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[style.Success, style.Buttontext]}>Success</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[style.Error, style.Buttontext]}>Warning</Text>
                </TouchableHighlight>
            </View>
        
    )
};

const style=StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        backgroundColor:'#bbb',
        fontSize:30,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1
    },
    Success:{
        backgroundColor:'green',
        fontSize:30,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1
    },
    Error:{
        backgroundColor:'lightblue',
        fontSize:30,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1
    },
    Buttontext:{
        color:'#fff'
    }

})

export default App;

// npx react-native start