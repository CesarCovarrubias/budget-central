import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../components/Categories';
import { Text, View } from '../components/Themed';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import { KeyboardAvoidingView, NativeSyntheticEvent, SafeAreaView, StyleSheet, TextInputChangeEventData, TextInputEndEditingEventData } from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';

export default function SettingsScreen() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [symbCurrency, setCurrency] = useState<String>("$");

    return (



        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <View style={styles.label}>
                    <Text style={styles.text}>
                        {"Currency\t"}
                    </Text>
                </View>

                <View style={styles.component}>
                    <TextInput
                        style={styles.textInput}
                        keyboardType={"default"}
                        placeholder={symbCurrency.toString()}
                        maxLength={3}
                        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            setCurrency(e.nativeEvent.text)
                        }}
                        returnKeyType={'done'}
                        allowFontScaling={true}
                        maxFontSizeMultiplier={20}
                    >
                    </TextInput>
                </View>

            </View>

            <View style={styles.container}>
                <View style={styles.label}>
                    <Text style={styles.text}>
                        {"Misc switch\t"}
                    </Text>

                </View>

                <View style={styles.component}>
                    <Switch
                        trackColor={{ false: "#cfcfcf", true: "#2bc26c" }}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    >
                    </Switch>
                </View>

            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    container: {
        flex: 0,
        height: '10%',
        alignContent: 'center',
        alignItems: 'baseline',
        alignSelf: 'stretch',
        flexDirection: 'row',
        direction: 'inherit',
        flexWrap: 'nowrap',
        padding: '5%',

        borderColor: 'gray',
        borderTopWidth: 1,
    },

    label: {
        flex: 1,
        alignItems: 'flex-start',
        alignContent: 'space-between',
        alignSelf: 'flex-start',
        //backgroundColor: 'blue',
    },

    component: {
        flex: 1,
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        alignSelf: 'flex-start',
        //backgroundColor: 'red',
    },

    text: {
        fontSize: 20,
        fontWeight: 'normal',
    },

    textInput: {
        height: 25,
        width: 50,
        fontSize: 20,
        borderColor: 'gray',
        borderWidth: 1,
    }

});