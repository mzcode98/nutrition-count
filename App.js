import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text1, setText1] = useState(''); 
  const [text2, setText2] = useState(''); 

  return (
    <View style={styles.container}>
      <Text>Fucbort</Text>
      <StatusBar style="auto" />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text1 => setText1(text1)}
        defaultValue={text1}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text1.split(' ').map((word) => word && 'FUCKBORT').join(' ')}
      </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text2 => setText2(text2)}
        defaultValue={text2}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text2.split(' ').map((word) => word && 'FUCKBORT').join(' ')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});