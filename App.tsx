import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='Signup' component={SignUp} />
            </Tab.Navigator>
        </NavigationContainer>
    )
};
const Login = () => {
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}
const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
        </View>
    )
}



export default App;