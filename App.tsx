import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='About Screen' onPress={()=>props.navigation.navigate('About')}/>
        </View>
    );
}
const Login=(props)=> {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button title='Home Screen' onPress={()=>props.navigation.navigate('Home')}/>
            <Button title='About Screen' onPress={()=>props.navigation.navigate('About')}/>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
            headerStyle:{
                backgroundColor:'orange'
            },
            headerTitleStyle:{
                fontSize:25
            },
            headerTintColor:'white'}}>
                <Stack.Screen name="Login" component={Login}  />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={About}   
                options={{
            headerStyle:{
                backgroundColor:'white'
            },
            headerTitleStyle:{
                fontSize:25
            },
            headerTintColor:'orange'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const About=(props)=> {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About Screen</Text>
            <Button title='Home Screen' onPress={()=>props.navigation.navigate('Home')}/>
        </View>
    );
}


export default App;