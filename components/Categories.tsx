import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Alert } from 'react-native';

export default function Categories({ title }: { title: string }) {
    return (
        <View>
            <Text style={styles.container}>
                {title}
            </Text>

            <ScrollView style={styles.contentContainer}>
              <Button 
                title={'Change my income'}
    
                onPress={() => console.log('Yay you can change income')}
              />
            </ScrollView>

        </View>
    );
} // adding buttons insides Scrollview
  //buttons - (change income) (purchases)


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
    contentContainer: {
      paddingVertical: 20
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  