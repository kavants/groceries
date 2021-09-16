import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Main from './Main';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator  >
      <Drawer.Screen name="Main" component={Main} options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'orange' },
          }}/>
      <Drawer.Screen name="User Signin" component={Login} options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'orange' },
          }}/>
    </Drawer.Navigator>
  );
}

function Home() {
    return (
      <NavigationContainer >
        <MyDrawer />
      </NavigationContainer>
    );
  }

export default Home;