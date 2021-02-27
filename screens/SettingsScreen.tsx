import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../components/Categories';
import { Text, View } from '../components/Themed';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

export default function SettingsScreen() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style = {{ flex:1 }}>
            <Text style= {styles.title}>
                {"Settings"}
            </Text>

            <View style = {styles.container}>
                <Text>
                    {"Misc switch"}
                </Text>

            <Switch
                trackColor = {{ false: "#cfcfcf", true: "#2bc26c"}}
                onValueChange = {toggleSwitch}
                value = {isEnabled}
            >
            </Switch>
            </View> 
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

});