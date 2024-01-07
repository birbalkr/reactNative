import React, { useState } from 'react';
import {
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

const App = () => {
    const [show,setShow]=useState(false)

    return (
        <View style={styles.conatiner}>
            <Text>custom modal</Text>
            {
                show?
                <View style={styles.modal}>
            <View style={styles.body}>
                <Text>Some Text</Text>
                <Button title='Close' onPress={()=>setShow(false)}/>
            </View>
            </View>
            :null
            }

            <Button title='Click' onPress={()=>setShow(true)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50,50,50,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        backgroundColor:'#fff',
        width:300,
        height:300,
        padding:20,
        justifyContent:'flex-end',
        borderRadius:10
    }
})

export default App;

// npx react-native start