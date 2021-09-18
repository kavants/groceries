import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Login  from  './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import OnboardingScreenH from './components/OtherOtherOnboard';
// import {
//   SignIn,
//   CreateAccount,
//   Search,
//   Home,
//   Details,
//   Search2,
//   Profile,
//   Splash
// } from "./components/Screens";

const AppStack = createStackNavigator();

export default function App() {
  return (
    
   <NavigationContainer>
      
     <AppStack.Navigator screenOptions={{ headerShown: false }}>
     <AppStack.Screen name="OnboardingScreenH" component={OnboardingScreenH} />
    {/* <AppStack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
    <AppStack.Screen name="Main" component={Main}/>
    <AppStack.Screen name="Login" component={Login} headerMode="screen"/>
    <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
</NavigationContainer>



  );
}
