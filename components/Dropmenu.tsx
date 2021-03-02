//I installed "npm install react-native-dropdown-picker --save" & "npm install --save react-native-vector-icons" & "npm i --save-dev @types/react-native-vector-icons"
//Git page: https://github.com/hossein-zare/react-native-dropdown-picker#readme


import DropDownPicker from 'react-native-dropdown-picker';
import { constructor, useState } from 'react';
import { Button, NativeSyntheticEvent, Text, TextInput, TextInputSubmitEditingEventData, View } from 'react-native';
import * as React from 'react';
import { renderByOrder } from '../recharts/src/util/ReactUtils'; //throwing error on my end not sure why
import Icon from 'react-native-vector-icons/Feather';


interface DropProps {
  value: boolean
}


export default function app()
{
  const [value, setValue] = useState(null);// basically we need to find a way to make these variables accessible from any part of the code
  const [items, setItems] = useState(null);

  return[setValue,setItems]
}
let controller;

export class Dropmenu extends React.Component{
  
  item:String;
  cost:Number;
  cat:String;

  controller: any;
  static getState: any;

  constructor(props: DropProps) {
    super(props);
    this.state = {
      category: null,
      items: [],
    };

    
    this.item = " ";
    this.cat = " ";
    this.cost = 0;
    this.controller;
  }

  render() {

    return (
      <View>
        <Text style = {{
          fontSize: 20,
          fontWeight: 'bold',
          fontStyle: "normal",
          textDecorationLine: "underline", 
        }}>Category</Text>
      <DropDownPicker
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
        containerStyle = {{
          height: 50,
          width: 250,
          margin: 20,
        }}
        controller={instance => controller = instance}
        onChangeList={(items, callback) => {
            new Promise((resolve, reject) => resolve(setItems(items)))
                .then(() => callback())
                .catch(() => {});
        }}

        //These 2 lines alone with line 56 are causing problems //defaultValue={value}
        onChangeItem ={item =>this.setState({}) }
      />


  <Text style = {{
    fontWeight: 'bold',
    fontStyle: "normal",
    textDecorationLine: "underline", 
    }}>
      Expense</Text>
  <TextInput
    //ITEM
    style={{
      margin:20,
      height: 30,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft:5,
    }}
    placeholder = "Purchase"
    placeholderTextColor = "#808080"
    onChange={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
     this.item = e.nativeEvent.text
    }}
  />



<Text style = {{
  fontWeight: 'bold',
  fontStyle: "normal",
  textDecorationLine: "underline", 
}}>
  Cost
</Text>
<TextInput
//COST
style={{
  margin: 20,
  height: 30,
  borderColor: 'gray',
  borderWidth: 1,
  paddingLeft:5,
}}
keyboardType={'numeric'}
placeholder = "$ 0.00"
placeholderTextColor = "#808080"
onChange={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => this.cost = parseInt(e.nativeEvent.text)}
/>

<Button

          onPress={() => console.log(this.cost)}//In the end, do json stuff
          title='Submit'
        />
    </View>
    );
  }
}























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