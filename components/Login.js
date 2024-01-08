import * as React from 'react';
import { View, Text, Button } from 'react-native';
const Login = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button title='Home Screen' onPress={() => props.navigation.navigate('Home')} />
            <Button title='About Screen' onPress={() => props.navigation.navigate('About')} />
        </View>
    );
}

export default Login;