import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text,TextInput,Image,TouchableOpacity,Alert, ScrollView } from 'react-native';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Inscrire from '../screens/Inscrire';
import Connecter from '../screens/Connecter';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
  );
}


const ProfileStackNavigator = () =>{

  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Inscrire" component={Inscrire} />
      <Stack.Screen name='Se Connecter' component={Connecter} />
    </Stack.Navigator>
  );
}










export { MainStackNavigator, ProfileStackNavigator };