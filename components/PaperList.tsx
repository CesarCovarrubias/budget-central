// Testing
import { List, Card } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import Category from '../data/category.json';

var json = Category;
//Object.entries(json)

export default function PaperList() {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section title="Categories">
            <List.Accordion
                title="Savings"
                left={props => <List.Icon {...props} icon="bank" />}>
                <FlatList
                    data={Object.entries(json)}
                    renderItem={({ item, index }) => (
                        <View>
                            {item[1].savings?.items.map((v, i) => (
                                <>
                                    <List.Item
                                    title={v.expense}
                                    description={'$' + v.transaction}
                                    />
                                </>
                            ))}
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Recreation"
                left={props => <List.Icon {...props} icon="rv-truck" />}>
                <FlatList
                    data={Object.entries(json)}
                    renderItem={({ item, index }) => (
                        <View>
                            {item[1].recreation?.items.map((v, i) => (
                                <>
                                    <List.Item
                                    title={v.expense}
                                    description={'$' + v.transaction}
                                    />
                                </>
                            ))}
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Personal"
                left={props => <List.Icon {...props} icon="bag-personal" />}>
                <FlatList
                    data={Object.entries(json)}
                    renderItem={({ item, index }) => (
                        <View>
                            {item[1].personal?.items.map((v, i) => (
                                <>
                                    <List.Item
                                    title={v.expense}
                                    description={'$' + v.transaction}
                                    />
                                </>
                            ))}
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Housing"
                left={props => <List.Icon {...props} icon="home" />}>
                <FlatList
                    data={Object.entries(json)}
                    renderItem={({ item, index }) => (
                        <View>
                            {item[1].housing?.items.map((v, i) => (
                                <>
                                    <List.Item
                                    title={v.expense}
                                    description={'$' + v.transaction}
                                    />
                                </>
                            ))}
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Food"
                left={props => <List.Icon {...props} icon="food" />}>
                <FlatList
                    data={Object.entries(json)}
                    renderItem={({ item, index }) => (
                        <View>
                            {item[1].food?.items.map((v, i) => (
                                <>
                                    <List.Item
                                    title={v.expense}
                                    description={'$' + v.transaction}
                                    />
                                </>
                            ))}
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Insurance"
                left={props => <List.Icon {...props} icon="card-account-details" />}>
                <FlatList
                    data={Object.entries(json)}
                    renderItem={({ item, index }) => (
                        <View>
                            {item[1].insurance?.items.map((v, i) => (
                                <>
                                    <List.Item
                                    title={v.expense}
                                    description={'$' + v.transaction}
                                    />
                                </>
                            ))}
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Medical"
                left={props => <List.Icon {...props} icon="hospital-building" />}>
                <FlatList
                    data={Object.entries(json)}
                    renderItem={({ item, index }) => (
                        <View>
                            {item[1].medical?.items.map((v, i) => (
                                <>
                                    <List.Item
                                    title={v.expense}
                                    description={'$' + v.transaction}
                                    />
                                </>
                            ))}
                        </View>
                    )}
                />
            </List.Accordion>

            <List.Accordion
                title="Transport"
                left={props => <List.Icon {...props} icon="car" />}>
                <FlatList
                    data={Object.entries(json)}
                    renderItem={({ item, index }) => (
                        <View>
                            {item[1].transport?.items.map((v, i) => (
                                <>
                                    <List.Item
                                    title={v.expense}
                                    description={'$' + v.transaction}
                                    />
                                </>
                            ))}
                        </View>
                    )}
                />
            </List.Accordion>
        </List.Section>
    );
};