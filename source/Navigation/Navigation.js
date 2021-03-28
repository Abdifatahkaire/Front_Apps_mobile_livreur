import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, ProfileStackNavigator } from './StackNavigator';
import Profile from "../screens/Profile";
import { Image } from 'react-native';
import ImageProfile from '../Images/profil.png';
import ImageHome  from '../Images/homeIcon2.png';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{showLabel:false,showIcon:true,activeBackgroundColor:'#DDDDDD', keyboardHidesTabBar: true}} >
      <Tab.Screen name="Home" component={MainStackNavigator}  options={{tabBarIcon: () => {
          return <Image
            source={ImageHome}
            />
        }}}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{tabBarIcon: () => {
          return <Image
            source={ImageProfile}
            />
        }}}/>
    </Tab.Navigator>
  );
}


