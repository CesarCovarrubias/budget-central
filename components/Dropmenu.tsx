//I installed "npm install react-native-dropdown-picker --save" & "npm install --save react-native-vector-icons" & "npm i --save-dev @types/react-native-vector-icons"
//Git page: https://github.com/hossein-zare/react-native-dropdown-picker#readme

import DropDownPicker from 'react-native-dropdown-picker';
import {  Button, 
          NativeSyntheticEvent, 
          Text, 
          TextInput, 
          TextInputSubmitEditingEventData, 
          View,
          StyleSheet, 
          TextInputChangeEventData} from 'react-native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';

// if we pass props to dropmenu, give the variable types here.
interface DropProps {
  
}

// typing for our state variables
interface DropState {
  category: String
  name: String
  cost: number
}
                                          // this makes typescript happy...
export class Dropmenu extends React.Component<DropProps, DropState>{
  
  constructor(props: DropProps) {
    super(props);
    this.state = {
      category: '',
      name: '',
      cost: 0,
    };
  }

  componentDidMount() {
    var Datastore = require('react-native-local-mongodb')
      , db = new Datastore({filename: 'storageKey', autoload: true})
  }

  // theres probably a better way than to create a new db object each
  // time but this works so meh
  saveData() {
    var Datastore = require('react-native-local-mongodb')
      , db = new Datastore({filename: 'storageKey', autoload: true});
    
    // the 3 fields for each transaction
    var doc = {
      category: this.state.category,
      name: this.state.name,
      cost: this.state.cost
    }

    db.insert(doc, function(err, newDoc){
      if (err)
        console.log(err)
      else
        console.log('Save Successful!')
    })
  }
  // printData() is for testing. reads all entries in db. 
  printData() {
    var Datastore = require('react-native-local-mongodb')
      , db = new Datastore({filename: 'storageKey', autoload: true})
    
    // docs is array with the results of the query
    db.find({ category: 'Recreation'}, function (err, docs) {
      if (err)
        console.log(err)
      else {
        console.log('Load Succesful!')
        //printing each result to console
        for (var i = 0; i < docs.length; i++){
          console.log(docs[i])
        }
      }
    })
  }

  render() {

    return (
      <View>

        {/* Dropdown menu */}
        <Text style = {styles.catHeader}> 
          Category
        </Text>
        <DropDownPicker
          containerStyle = {styles.containerStyle}
          items={[
            {label: 'Savings', value: 'savings'},
            {label: 'Recreation', value: 'recreation'},
            {label: 'Personal', value: 'personal'},
            {label: 'Housing', value: 'housing'},
            {label: 'Food', value: 'food'},
            {label: 'Insurance', value: 'insurance'},
            {label: 'Medical', value: 'medical'},
            {label: 'Transport', value: 'transport'}
          ]}
          onChangeItem ={item => {this.setState({category: item.label})} }
        />

        {/* Expense name input field */}
        <Text style = {styles.smallHeader}>
          Expense
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder = "Purchase"
          placeholderTextColor = "#808080"
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            this.setState({name: e.nativeEvent.text })
          }}
          returnKeyType = 'done'
        />

        {/* Cost input field */}
        <Text style = {styles.smallHeader}>
          Cost
        </Text>
        <TextInput
          style={styles.inputText}
          keyboardType={'numeric'}
          placeholder = "$ 0.00"
          placeholderTextColor = "#808080"
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            this.setState({cost : parseFloat(e.nativeEvent.text)})
          }}
          returnKeyType = 'done'
        />
        
        {/* Save button. Writes transaction information to db */}
        <Button
          onPress={() => 
            console.log(this.state.category,
            this.state.name,
            this.state.cost,
            this.saveData())}
          title='Submit'
        />

        {/* This button is for testing the db*/}
        <Button onPress = {() => this.printData()} title = 'load (test)' />
    </View>
    );
  }
}

const styles = StyleSheet.create ({
  catHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: "normal",
    textDecorationLine: "underline",
  },
  smallHeader: {
    fontWeight: 'bold',
    fontStyle: "normal",
    textDecorationLine: "underline",
  },
  inputText: {
    margin: 20,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft:5,
  },
  containerStyle: {
    height: 50,
    width: 250,
    margin: 20,
  }
})





















/*import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  background: #ffffff;
  height: 27vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Recreation", "Personal", "Housing","Food","Insurance","Transport"];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked: (value:any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <h1>Category</h1>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Personal"}
        </DropDownHeader>
        {isOpen ? (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        ) : []}
      </DropDownContainer>
    </Main>
  );
}*/