import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('')
  return (
    <View style={styles.container}>
      <Text>Calories</Text>
      <StatusBar style="auto" />
      <TextInput
        style={{height: 40}}
        placeholder="Enter daily calories"
        //onChangeText={text => setText(text)}
        defaultValue={text}
      />
       <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word ).join(' ')}
      </Text>
      <Text>Protein</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter protein in grams"
        defaultValue={text1}
      />
       <Text style={{padding: 10, fontSize: 42}}>
        {text1.split(' ').map((word) => word ).join(' ')}
      </Text>
      <Text>Carbohydrates</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter carbohydrates in grams"
        //onChangeText={text => setText(text)}
        defaultValue={text}
      />
       <Text style={{padding: 10, fontSize: 42}}></Text>
       <Text>Fats</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter fats in grams"
        //onChangeText={text => setText(text)}
        defaultValue={text}
        />
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
