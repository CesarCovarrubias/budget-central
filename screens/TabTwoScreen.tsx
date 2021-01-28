import * as React from 'react';
import { constructor } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
 
  return (
    //a lot of what is on this second screen is just for testing purposes
    <View style={styles.container}>
      <UselessTextInput style={styles.container}/>
      <Text style={styles.title}>My Finance</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

export function UselessTextInput() {
  return (
    <TextInput
      
      style={{ 
    	height: 40, 
    	borderColor: 'gray', 
      borderWidth: 1,
      
      
    }}
      onSubmitEditing={text => console.log("save value to variable once we know how")}   
    />
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
