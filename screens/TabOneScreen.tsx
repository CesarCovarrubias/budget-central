import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, TextInput, Button, Modal, NativeSyntheticEvent, TextInputSubmitEditingEventData, TextInputEndEditingEventData, TextInputChangeEventData } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Categories from '../components/Categories';
import { Text, View } from '../components/Themed';
import Finance from '../components/Categories';
import { constructor } from 'react';
import TabTwoScreen from './TabTwoScreen';
import Navigation from '../navigation';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import SettingsScreen from './SettingsScreen';


//nav stuff------------------------------------------------------------------
//currently each time the project is saved
//it will say page not found
//working on solution
const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabOneScreen}
        />
        <Stack.Screen 
          name="Profile" 
          component={TabTwoScreen} />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//nav stuff------------------------------------------------------------------

function monthlyIncome(){
  //early implementation of adding the income value to the current budget based on Date
  //assuming a biweekly pay period
  //not perfect as this isnt how pay periods always work but its a start
  let date : Date = new Date()
  let day = date.getDate()
  if (day % 9 == 0 && day > 7)
  {
    console.log('Its pay day')
    //this will eventually add to/recalculate the budget every 7 days
  }
}

export default function TabOneScreen() {

  const [ money, setMoney ] = useState<number>(0); 
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ showTransaction, setShowTransaction ] = useState<boolean>(true);

  const handleTransaction = () => {
    //create Transaction component and pass props:
    //onClick, transaction number
  }
  
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {'Budget Main page'}
        </Text>
        <Text >
          {'Your current income:  $ '+ money}
        </Text>
        <Modal 
          animationType={"slide"}  
          transparent = {true}
          visible = {showModal}
          onRequestClose={() => {
            console.log("Modal has been closed.")
          }}
        >
          <View style={styles.modal}> 
            <Text>
              {'Greetings, change your income here.'}
            </Text>
            <TextInput
              keyboardType = {'numeric'}
              placeholder = {'0.00'}
              maxLength={15}
              onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
                setMoney(parseFloat(e.nativeEvent.text))
              }}
              returnKeyType = {'done'}
            />
            <Button
            title={'Close Modal'}
            onPress={() => setShowModal(!showModal)}
            />
          </View>
        </Modal>
        <Button 
          title={'Change Income/Open Modal'}
          onPress={() => setShowModal(!showModal)}
        />
        <Categories 
          title={'Budgeting Categories'}
          income={money}
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoContainer:{
    flex: 1,
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    padding: 100,
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
