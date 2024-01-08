import * as React from 'react';
import { View, Text, Button } from 'react-native';
function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='About Screen' onPress={() => props.navigation.navigate('About')} />
        </View>
    );
}

export default HomeScreen;