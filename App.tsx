import React, { useState } from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet
} from "react-native";
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [display, setDisplay]=useState(false);

  const resetData =()=>{
    setDisplay(false);
    setName("");
    setEmail("");
    setPasswd("");
  }
  return (
    <View>
      <Text style={{ fontSize: 25 }}>Simple Form in React Native</Text>
      <TextInput style={style.TextInput}
        placeholder='Enter User name'
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput style={style.TextInput}
        placeholder='Enter User Email'
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput style={style.TextInput}
        placeholder='Enter User Password'
        onChangeText={(text) => setPasswd(text)}
        secureTextEntry={true}
        value={passwd}
      />
      <View style={{ marginBottom: 5 }}>
        <Button color={"green"} title='Print Details'
        onPress={()=>setDisplay(true)}/>
      </View>
      <Button title='Clear Details' onPress={resetData}/>
      <View>
        {/* if display is true then Print */}
        {
          display ?
          <View>
            <Text style={{ fontSize: 20 }}>Name: {name} </Text>
            <Text style={{ fontSize: 20 }}>Name: {email} </Text>
            <Text style={{ fontSize: 20 }}>Name: {passwd} </Text>
          </View>
          // if display is false then Print
          :null
        }
      </View>
    </View>
  );
};

// internal style
const style = StyleSheet.create({
  TextInput: {
    color: 'blue',
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10
  }
});
export default App;
