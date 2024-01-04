import React from 'react';
import {
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import WebView from 'react-native-webview';

const App = () => {

    return (
        <WebView source={{uri:"https://www.hackthebox.com/"}}/>
    )
};

const style = StyleSheet.create({
    
})

export default App;

// npx react-native start