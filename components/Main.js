import React, {useState} from 'react';
import Task from './Task';
import Grocery from './Grocery';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Test from './Test';
import Third from './Third';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Login from './Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from './Home';
import OnboardingScreen from './Onboarding';





const Tab = createMaterialTopTabNavigator();


function MyDrawer() {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

function Main() {
      return(
  <NavigationContainer independent={true}>
            <StatusBar backgroundColor={"orange"} />
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
    {/* <Tab.Screen name="Login" component={Login} /> */}
    <Tab.Screen name="todo List" component={Grocery} />
    <Tab.Screen name="Calendar" component={Third} />
    <Tab.Screen name="Login" component={Login} />
    {/* <Tab.Screen name="Another Tab" component={Test} /> */}

  </Tab.Navigator>

</NavigationContainer>


      )
  }

export default Main;
  