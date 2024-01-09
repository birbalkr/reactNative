import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TextInput } from 'react-native';

function App() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectUser, setSelectUser] = useState(undefined);
    const Savedata = async () => {
        const url = "http://192.168.43.106:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        };
    }
    const DeleteData = async (id) => {
        const url = "http://192.168.43.106:3000/users";
        let result = await fetch(`${url}/${id}`, {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            console.warn("User Delete");
            Savedata();
        }
    }
    const UpdateData = (data) => {
        setShow(true);
        setSelectUser(data)

    }
    useEffect(() => {
        Savedata();
    }, [])


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, }}>List with API data</Text>
            <View style={styles.datarap}>
                <View style={{ flex: 1 }}><Text style={{ fontSize: 20, fontWeight: 900 }}>ID</Text></View>
                <View style={{ flex: 1 }}><Text style={{ fontSize: 20, fontWeight: 900 }}>Name</Text></View>
                <View style={{ flex: 2, alignItems: 'center' }}><Text style={{ fontSize: 20, fontWeight: 900 }}>Operation</Text></View>
            </View>
            {
                data.length ? data.map((item) =>

                    <View style={styles.datarap}>
                        <View style={{ flex: 1 }}><Text>{item.id}</Text></View>
                        <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                        <View style={{ flex: 1 }}><Button title='Delete' onPress={() => DeleteData(item.id)} /></View>
                        <View style={{ flex: 1 }}><Button title='Update' onPress={() => UpdateData(item)} /></View>
                    </View>
                ) : null
            }
            <Modal visible={show} transparent={true}>
                <Popup setShow={setShow} selectUser={selectUser} Savedata={Savedata}/>
            </Modal>
        </View>
    )
};

const Popup = (props) => {
    const [name, setName] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [email, setEmail] = useState(undefined);

    useEffect(() => {
        if (props.selectUser) {
            setName(props.selectUser.name);
            setAge(props.selectUser.age.toString());
            setEmail(props.selectUser.email);
        }
    }, [props.selectUser])

    const UpdateUser = async () => {
        console.warn(name, age, email);
        const url = "http://192.168.43.106:3000/users";
        const id=props.selectUser.id;

        let result = await fetch(`${url}/${id}`,{
            method:"Put",
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify({name,age,email})
        });
        result = await result.json();
        if(result){
            console.warn("Update Data",result);
            props.Savedata();
            props.setShow(false);
            
        }
    }
    return (
        <View style={styles.centerview}>
            <View style={styles.modalview}>
                <TextInput placeholder='Enter Name' style={styles.input} onChangeText={(text) => setName(text)} value={name} />
                <TextInput placeholder='Enter Age' style={styles.input} value={age} onChangeText={(text) => setAge(text)} />
                <TextInput placeholder='Enter Email' style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
                <View style={styles.btn}>
                    <Button title='Close' onPress={() => props.setShow(false)} />
                    <Button title='Update Data' onPress={UpdateUser} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    datarap: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        margin: 5
    },
    centerview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalview: {
        backgroundColor: '#fff',
        padding: 40,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.80,
        elevation: 5
    },
    input: {
        borderWidth: 1,
        borderColor: "skyblue",
        width: 250,
        marginBottom: 15
    },
    btn: {
        flexDirection: "row",
        justifyContent: 'space-between'
    }
})

export default App;