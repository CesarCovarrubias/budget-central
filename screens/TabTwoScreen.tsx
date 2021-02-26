import * as React from 'react';
import { constructor } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { Dropmenu } from '../components/Dropmenu';
import EditScreenInfo from '../components/EditScreenInfo';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
 
  return (
    //a lot of what is on this second screen is just for testing purposes
    <View style={styles.container}>
      <Text style={styles.title}>My Finance</Text>
      <AmountSpent></AmountSpent>
      <Finalize></Finalize>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
    
  );
}


const AmountSpent = () => {
  const [value,onChangeText] = React.useState('$ 0.00');

  return (
    <TextInput
      style={{ 
    	height: 20, 
    	borderColor: 'gray', 
      borderWidth: 1}}
      onChangeText = {Text => onChangeText(Text)}
      keyboardType={'number-pad'}
      value = {value}    
    />
  );
  
}


const ItemPurchased = () => {
  const [item,onChangeText] = React.useState('Purchase');

  return (
    <TextInput
      style={{ 
    	height: 20, 
    	borderColor: 'gray', 
      borderWidth: 1}}
      onChangeText = {Text => onChangeText(Text)}
      value = {item}    
    />
  );
  
}



const Finalize = () => {
return(
  <Button
    onPress={() => console.log('this will log the purchase and deduct from the budget')}
    title = 'Submit'
  />
)

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
