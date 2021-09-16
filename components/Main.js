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
import Login from './Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';




// const Bottom = createBottomTabNavigator();

// function HomeTabs() {
//   return (
//     <Bottom.Navigator tabBarOptions={{
//        activeTintColor: '#fff',
//        inactiveTintColor: 'black',
//       //  activeBackgroundColor: 'orange',
//       //  inactiveBackgroundColor: '#b55031',
//            style: {
//                  backgroundColor: 'orange',
//                  paddingBottom: 3
//            }
//     }}>
//       <Bottom.Screen name="Account" component={Login} />
//     </Bottom.Navigator>
//   );
// }

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
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Another Tab" component={Test} />
    <Tab.Screen name="todo List" component={Grocery} />
    <Tab.Screen name="Calendar" component={Third} />

  </Tab.Navigator>
</NavigationContainer>


      )
  }

export default Main;
  