import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

// multiply the id with total money to get that categories budget
const DATA = [
  {
    id: 'Savings',
    multiplier: '0.20'
  },
  {
    id: 'Recreation',
    multiplier: '0.15'
  },
  {
    id: 'Personal',
    multiplier: '0.10'
  },
  {
    id: 'Housing',
    multiplier: '0.30'
  },
  {
    id: 'Food',
    multiplier: '0.10'
  },
  {
    id: 'Insurance',
    multiplier: '0.05'
  },
  {
    id: 'Medical',
    multiplier: '0.05'
  },
  {
    id: 'Transport',
    multiplier: '0.05'
  }
]

const Item = ({catName, budgetAmount}) => {
  return(
    <View style = {styles.border}>
        <Text style={{textAlign:'left'}}>{catName} {budgetAmount}</Text>
    </View>
  )
}

export default function Categories({ title, income }: { title: string, income: number }) {

  const renderItem = ({ item }) => (
    
    <Item  
      catName={item.id}
      budgetAmount={item.multiplier * income}
    />
  );

  const Separator = () => (
    <View style={{
      height: 2,
      backgroundColor: "ef4ef4",
      marginLeft: 10,
      marginRight: 10,
    }}
    />
  );

  return (
      <View style={styles.container}>
          <Text style={styles.container}>
              {title}
          </Text>
          <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            ItemSeparatorComponent={ () => Separator()}
          />
      </View>
  );
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    border: {
      textAlign : 'center',
      width:  130, //70
      height:  20, //20
      borderRadius: 5,
      backgroundColor : '#479EEE',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    contentContainer: {
      paddingVertical: 20
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  