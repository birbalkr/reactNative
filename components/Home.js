import * as React from 'react';
import { View, Text, Button } from 'react-native';
function HomeScreen(props) {
    console.warn(props.route.params);
    const {name, age}=props.route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Passing Data two way</Text>
            <Text>Name: {props.route.params.name}</Text>
            <Text>Age: {props.route.params.age}</Text>
            <Text>Name: {name} Age {age}</Text>
            <Button title='About Screen' onPress={() => props.navigation.navigate('About')} />
        </View>
    );
}

export default HomeScreen;