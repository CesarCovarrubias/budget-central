import * as React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

// multiply the id with total money to get that categories budget
const DATA = [
  {
    title: 'Savings',
    id: '0.20'
  },
  {
    title: 'Recreation',
    id: '0.15'
  },
  {
    title: 'Personal',
    id: '0.10'
  },
  {
    title: 'Housing',
    id: '0.30'
  },
  {
    title: 'Food',
    id: '0.10'
  },
  {
    title: 'Insurance',
    id: '0.05'
  },
  {
    title: 'Medical',
    id: '0.05'
  },
  {
    title: 'Transport',
    id: '0.05'
  }
]

const Item = ({title}) => {
  return(
    <View>
      <Text style = {styles.border}>{title}</Text>
      &nbsp;&nbsp;&nbsp;
    </View>
  )
}



export default function Categories({ title, income }: { title: string, income: number }) {
    let money = income;

    const renderItem = ({ item }) => (
      <Item 
        title={item.title} 
      />
    );

    return (
        <View>
        
            <Text style={styles.container}>
                {title}
                {income}
                
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
  