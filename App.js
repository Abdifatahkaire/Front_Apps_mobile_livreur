import * as React from 'react';
import { Button, View, Text,TextInput,Image,Tab,TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './source/Navigation/Navigation';








function App() {
  return (
    <NavigationContainer>
      
      <Tabs />
    </NavigationContainer>
  );
}




export default App;

const styles = {
  homeScreemcontainer: {
    display:'flex',
    flex:1,
    justifyContent:'center',
    backgroundColor:'forestgreen',
    borderWidth:2,
    borderColor:'green',
    height:800,
    borderColor:'black',
    borderWidth:5,
    marginBottom:10
  },container:{
    borderWidth:2,
    borderColor:'green',
    padding:10
  
  }
  ,
  content:{
      borderColor:'blue',
      borderWidth:1
  },
  buttons1:{
    backgroundColor:'#fff',
    padding:10,
    margin:10,
    alignItems: "center",
    borderRadius:4
  },
  buttons2:{
    backgroundColor:'#fff',
    padding:10,
    margin:10,
    alignItems: "center",
    borderRadius:4
  }
};
