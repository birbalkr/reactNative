import React, { useState } from 'react';
import {
    ActivityIndicator,
    Button,
    StyleSheet,
    Text,
    View
} from "react-native";

const App = () => {
    const [show ,setShow]=useState(false)
    const displayLoader=()=>{
        setShow(true);

        setTimeout(() => {
            setShow(false)
        }, 3000);

        // api call in 3s
    }
    return (
            <View style={style.main}>
                <Text style={{ fontSize: 25, color: 'red' }}>Activity Indicator</Text>
                {/* <ActivityIndicator size={"large"} color={'red'} animating={true}/>
                <ActivityIndicator size={200} color={'blue'} animating={false}/> */}
                <ActivityIndicator size={100} color={'green'} animating={show}/>
                <Button title='show loder' onPress={displayLoader}/>
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
})

export default App;

// npx react-native start