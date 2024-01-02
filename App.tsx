import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Button
} from "react-native";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(()=>{
  //   console.warn("hello");

  // },[count])
  // useEffect(()=>{
  //   console.warn("call some api");

  // },[data])
  return (
    <View>
      <Text style={{ fontSize: 25 }}>{data} UseEffect {count}</Text>
      <Button title='UpdateCount' onPress={() => setCount(count + 1)} />
      <Button title='UpdateCount' onPress={() => setData(data + 1)} />
      <User info={{ data, count }} />
    </View>
  );
};

const User = (props) => {

  useEffect(() => {
    console.warn("run this code when data prop is updated");
  }, [props.info.data])

  useEffect(() => {
    console.warn("run this code when count prop is updated");
  }, [props.info.count])

  return (
    <View>
      <Text style={{ fontSize: 25, color: 'orange' }}>data: {props.info.data}</Text>
      <Text style={{ fontSize: 25, color: 'orange' }}>count: {props.info.count}</Text>
    </View>
  )
};

export default App;
