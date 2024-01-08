import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';


function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [errorname, setErrorName] = useState(false);
    const [errorage, setErrorAge] = useState(false);
    const [erroremail, setErrorEmail] = useState(false);
    const Savedata = async () => {
        if (!name) {
            setErrorName(true)
        } else { setErrorName(false) }

        if (!age) {
            setErrorAge(true)
        } else { setErrorAge(false) }
        if (!email) {
            setErrorEmail(true)
        } else { setErrorEmail(false) }
        if (!name || !age || !email) {
            return false
        }
        const url = "http://192.168.43.106:3000/users";
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age, email })
        });
        result = await result.json();
        console.warn(result);
    }


    return (
        <View >
            <Text style={{ fontSize: 20 }}>Form with input field</Text>
            <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder='Enter name' />
            {
                errorname ? <Text style={styles.errortext}>Enter Valid Name</Text>
                    : null
            }
            <TextInput style={styles.input} value={age} onChangeText={(text) => setAge(text)} placeholder='Enter age' />
            {
                errorage ? <Text style={styles.errortext}>Enter Valid Age</Text>
                    : null
            }
            <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder='Enter email' />
            {
                erroremail ? <Text style={styles.errortext}>Enter Valid Email</Text>
                    : null
            }
            <Button title='save data' onPress={Savedata} />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'skybule',
        borderWidth: 1,
        margin: 20,
        marginBottom: 5
    },
    errortext: {
        color: 'red',
        marginLeft: 20
    }
})




export default App;