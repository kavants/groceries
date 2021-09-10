import React, {useState} from 'react';
import Task from './Task';
import Grocery from './Grocery';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Test from './Test';
import Third from './Third';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';



  const Tab = createMaterialTopTabNavigator();

  function Main() {
      return(
  
  <NavigationContainer>
  <Tab.Navigator tabBarOptions={{
       activeTintColor: '#fff',
       inactiveTintColor: 'black',
      //  activeBackgroundColor: 'orange',
      //  inactiveBackgroundColor: '#b55031',
           style: {
                 backgroundColor: 'orange',
                 paddingBottom: 3
           }
    }}>
    <Tab.Screen name="todo List" component={Grocery} />
    <Tab.Screen name="Calendar" component={Third} />
    <Tab.Screen name="Another Tab" component={Test} />
  </Tab.Navigator>
</NavigationContainer>
      )
  }

export default Main;
  