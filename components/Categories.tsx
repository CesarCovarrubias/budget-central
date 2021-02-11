import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { DATA } from '../data/data' 

interface CatProps {
  title: string;
  income: number;
}

interface ItemProps {
  catName: string;
  budgetAmount: number;
}

const Item = (props: ItemProps) => {
  return(
    <View style = {styles.border}>
        <Text style={{textAlign:'left'}}>
          {props.catName} 
          {props.budgetAmount}
        </Text>
    </View>
  )
}

export default function Categories(props: CatProps) {

  const renderItem = ({ item  }) => (
    
    <Item  
      catName={item.id}
      budgetAmount={item.multiplier * props.income}
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
              {props.title}
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
  