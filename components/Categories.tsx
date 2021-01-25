import * as React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

export default function Categories() {
    return (
        <View>
            <Text style={styles.container}>
                This is the header for out categories.
            </Text>

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
  