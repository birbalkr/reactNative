import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
const Login = (props) => {
    // const name='aditya';
    const age=29;
    const [name,setName]=React.useState("");
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen Passing Data to home Screen</Text>
            <TextInput placeholder='Enter name' onChangeText={(text)=>setName(text)}/>
            <Button title='go to Home Screen' onPress={() => props.navigation.navigate('Home',{name,age})} />
            <Button title='About Screen' onPress={() => props.navigation.navigate('About')} />
        </View>
    );
}

export default Login;