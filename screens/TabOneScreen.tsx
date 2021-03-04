import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, SafeAreaView, StyleSheet, Button, Modal, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { Dropmenu } from '../components/Dropmenu';
import EditScreenInfo from '../components/EditScreenInfo';
import Categories from '../components/Categories';
import { Text, View } from '../components/Themed';
import Finance from '../components/Categories';
//import { constructor } from 'react';
import TabTwoScreen from './TabTwoScreen';
import Navigation from '../navigation';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

// Testing
import { ScrollView } from 'react-native-gesture-handler';
import PaperList from '../components/PaperList'

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
        <Stack.Screen name="Profile" component={TabTwoScreen} />
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
  if (day % 9 === 0 ? day > 7: [])
  {
    console.log('Its pay day')
    //this will eventually add to/recalculate the budget every 7 days
  }
}

export default function TabOneScreen() {
  const [ money, setMoney ] = useState<number>(0); 
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ showTransaction, setShowTransaction ] = useState<boolean>(true);

  return (
    <SafeAreaView style={{ flex:1 }}>
      <ScrollView>
        <Text style={styles.title}>
          {'My Budget'}
        </Text>
        <Text style={styles.subtitle}>
          {'Your current income: $'+ money}
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
            <Text style={styles.modaltitle}>
              {'Greetings, change your income here.'}
            </Text>
            <TextInput
              style={styles.modaltext}
              keyboardType = {'numeric'}
              placeholder = {'0.00'}
              maxLength={15}
              onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
                setMoney(parseFloat(e.nativeEvent.text))
              }}
            />
            <Button
            title={'Submit Income'}
            onPress={() => setShowModal(!showModal)}
            />
          </View>
        </Modal>
        <Button 
          title={'Change Income'}
          onPress={() => setShowModal(!showModal)}
        />
        <Categories 
          title={'Recommended budget based on your income'}
          income={money}
        />
        <PaperList/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </ScrollView>
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
    backgroundColor: '#f9bf52',
    padding: 100,
  },
  modaltitle: {
    textAlign: 'center',
    backgroundColor: '#f9bf52',
    fontSize: 30,
  },
  modaltext: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    width: '50%',
    fontSize: 25,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
