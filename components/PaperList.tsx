// Testing
import { List } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';

function getData(thisone: any) {
    let testing: any[] = [];

    var Datastore = require('react-native-local-mongodb')
      , db = new Datastore({filename: 'storageKey', autoload: true})
    
    // docs is array with the results of the query
    db.find({ category: thisone} , function (err: any, docs: any) {
      if (err)
        console.log(err)
      else {
        console.log('Load Succesful!')
        //printing each result to console
        for (var i = 0; i < docs.length; i++){
          testing.push(docs[i]);
        }
      }
    })
    return testing;
}

var saveList = getData('Savings');
var recreateList = getData('Recreation');
var personalList = getData('Personal');
var houseList = getData('Housing');
var foodList = getData('Food');
var insureList = getData('Insurance');
var medList = getData('Medical');
var transportList = getData('Transport');

export default function PaperList() {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section title="Categories">
            <List.Accordion
                title="Savings"
                left={props => <List.Icon {...props} icon="bank" />}>
                <FlatList
                    data={Object.entries(saveList)}
                    renderItem={({ item }) => (
                        <View>
                            <List.Item
                            title={item[1].name}
                            description={'$' + item[1].cost.toFixed(2)}
                            />
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Recreation"
                left={props => <List.Icon {...props} icon="rv-truck" />}>
                <FlatList
                    data={Object.entries(recreateList)}
                    renderItem={({ item }) => (
                        <View>
                            <List.Item
                            title={item[1].name}
                            description={'$' + item[1].cost.toFixed(2)}
                            />
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Personal"
                left={props => <List.Icon {...props} icon="bag-personal" />}>
                <FlatList
                    data={Object.entries(personalList)}
                    renderItem={({ item }) => (
                        <View>
                            <List.Item
                            title={item[1].name}
                            description={'$' + item[1].cost.toFixed(2)}
                            />
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Housing"
                left={props => <List.Icon {...props} icon="home" />}>
                <FlatList
                    data={Object.entries(houseList)}
                    renderItem={({ item }) => (
                        <View>
                            <List.Item
                            title={item[1].name}
                            description={'$' + item[1].cost.toFixed(2)}
                            />
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Food"
                left={props => <List.Icon {...props} icon="food" />}>
                <FlatList
                    data={Object.entries(foodList)}
                    renderItem={({ item }) => (
                        <View>
                            <List.Item
                            title={item[1].name}
                            description={'$' + item[1].cost.toFixed(2)}
                            />
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Insurance"
                left={props => <List.Icon {...props} icon="card-account-details" />}>
                <FlatList
                    data={Object.entries(insureList)}
                    renderItem={({ item }) => (
                        <View>
                            <List.Item
                            title={item[1].name}
                            description={'$' + item[1].cost.toFixed(2)}
                            />
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Medical"
                left={props => <List.Icon {...props} icon="hospital-building" />}>
                <FlatList
                    data={Object.entries(medList)}
                    renderItem={({ item }) => (
                        <View>
                            <List.Item
                            title={item[1].name}
                            description={'$' + item[1].cost.toFixed(2)}
                            />
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Transport"
                left={props => <List.Icon {...props} icon="car" />}>
                <FlatList
                    data={Object.entries(transportList)}
                    renderItem={({ item }) => (
                        <View>
                            <List.Item
                            title={item[1].name}
                            description={'$' + item[1].cost.toFixed(2)}
                            />
                        </View>
                    )}
                />
            </List.Accordion>
        </List.Section>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 10,
    },
});