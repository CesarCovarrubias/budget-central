import * as React from 'react';
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

const Item = ({title}) => {
  return(
    <View>
      <Text style = {styles.border}>{title}</Text>
    </View>
  )
}

export default function Categories({ title, income }: { title: string, income: number }) {
    let money = income;

    const renderItem = ({ item }) => (
      <Item 
        title={item.id} 
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
      width:  70,
      height:  20,
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
  