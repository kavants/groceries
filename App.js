import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Login  from  './components/Login';
import { NavigationContainer } from '@react-navigation/native';

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

export default function App() {
  return (
    <>
    <Header/>
    {/* <Main/> */}
       <Main/>

    </>
  );
}
