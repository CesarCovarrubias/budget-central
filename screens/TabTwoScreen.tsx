import * as React from 'react';
<<<<<<< HEAD
import { constructor, useState } from 'react';
import { StyleSheet, TextInput, Button, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { Dropmenu } from '../components/Dropmenu';
=======
import { constructor } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import Dropmenu from '../components/Dropmenu';
>>>>>>> 62cae2141e8c35d9244be27f57e306ee62e95cfc
import EditScreenInfo from '../components/EditScreenInfo';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
 
<<<<<<< HEAD
  const [item, setItem] = useState<String>(" ");
  const [cost, setCost] = useState<Number>(0)
  const [category, setCategory] = useState<String>();
=======
  return (
    //a lot of what is on this second screen is just for testing purposes
    <View style={styles.container}>
      <Text style={styles.title}>My Finance</Text>
      <AmountSpent></AmountSpent>
      <Dropmenu></Dropmenu>
      <Finalize></Finalize>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
    
  );
}
>>>>>>> 62cae2141e8c35d9244be27f57e306ee62e95cfc

  //-------------------------------------------------------
  const ItemPurchased = () => {

    return (
      <TextInput

        style={{
          height: 20,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
          setItem(e.nativeEvent.text)
        }}
      />
    );


  }

  const AmountSpent = () => {


    return (
      <TextInput

        style={{
          height: 20,
          borderColor: 'gray',
          borderWidth: 1,
        }}

        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => setCost(parseInt(e.nativeEvent.text))}
        keyboardType={'numeric'}
      //value = {value}    
      />
    );

<<<<<<< HEAD
  }
=======
const Finalize = () => {
return(
  <Button
    onPress={() => console.log('this will log the purchase and deduct from the budget')} 
    title = 'Submit'
  />
)
>>>>>>> 62cae2141e8c35d9244be27f57e306ee62e95cfc

  const Finalize = () => {
    return (
      <view>
        <Dropmenu></Dropmenu>
        <ItemPurchased></ItemPurchased>
        <AmountSpent></AmountSpent>

        <Button
          onPress={() => adjustJSON()}
          title='Submit'
        />
      </view>
    )

  }

  function adjustJSON() {
    let x = " "
    const add = () => {
      var RNFS = require('react-native-fs');

      var filePath = RNFS.DocumentDirectoryPath + '/items.json';

      RNFS.writeFile(filePath, '{name:hello}', 'utf8')
        .then((success) => {
          console.log('SUCCESS');
        })
        .catch((err) => {
          console.log(err.message);
        });
        x = RNFS.readdir(filePath)
    };
   console.log(x)
  }

  return (
    //a lot of what is on this second screen is just for testing purposes
    <View style={styles.container}>
      <Text>{cost}</Text>
      <Text style={styles.title}>My Finance</Text>
      <Finalize ></Finalize>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
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
