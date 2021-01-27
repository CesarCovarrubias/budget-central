import * as React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Categories from '../components/Categories';
import { Text, View } from '../components/Themed';
import Finance from '../components/Categories';
import { constructor } from 'react';


const Income = (props) => {
  const [enteredAmount] = React.useState(0);
  return (
    <TextInput
      keyboardType = {'number-pad'}
      editable
      placeholder = {'0.00'}
      maxLength={15}
     // onSubmitEditing = {} Im thinking about using this as the trigger for saving the value to a variable

    />
  )
}


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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Main page</Text>

      <Income style={styles.container}/>
        <Button 
          title={'Do stuff'}
          onPress={() => monthlyIncome()} //change-income() call here
        />

      <Categories title={'Budgeting Categories'}/>

      
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer:{
    flex: 1,
    alightItems: 'left',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
