import React, { Component } from 'react';
import { View, Button, Text, Animated, StyleSheet, ScrollView, StatusBar} from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { navigation } from 'react-native-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import { NavigationContainer } from '@react-navigation/native';
import { paddingLeft } from 'styled-system';
import { SafeAreaView } from 'react-navigation';

// const Stack = createStackNavigator();

class Maybe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false
        };
    }

    static navigationOptions = {
        title: 'Maybe'
    }

    handleLogin() {
        console.log(JSON.stringify(this.state));
        if (this.state.remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            ).catch(error => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch(
                error => console.log('Could not delete user info', error)
            );
        }
    }

    componentDidMount() {
        SecureStore.getItemAsync('userinfo')
            .then(userdata => {
                const userinfo = JSON.parse(userdata);
                if (userinfo) {
                    this.setState({username: userinfo.username});
                    this.setState({password: userinfo.password});
                    this.setState({remember: true})
                }
            });
    }

    render() {
        return (                
            <View style={styles.container}>
            <StatusBar backgroundColor={"orange"} />

                <Input
                    placeholder='Username'
                    leftIcon={{type: 'font-awesome', name: 'user-o'}}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <Input
                    placeholder='Password'
                    leftIcon={{type: 'font-awesome', name: 'key'}}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <CheckBox
                    title='Remember Me'
                    center
                    checked={this.state.remember}
                    onPress={() => this.setState({remember: !this.state.remember})}
                    containerStyle={styles.formCheckbox}
                />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleLogin()}
                        title='Login'
                        // icon={
                        //     <Icon
                        //         name='sign-in'
                        //         type='font-awesome'
                        //         color='#fff'
                        //         iconStyle={{marginRight: 10}}
                        //     />
                        // }
                        buttonStyle={{backgroundColor: '#5637DD'}}
                    />
                </View>
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Register')}
                        title='Register'
                        type='clear'
                        // icon={
                        //     <Icon
                        //         name='user-plus'
                        //         type='font-awesome'
                        //         color='blue'
                        //         iconStyle={{marginRight: 10}}
                        //     />
                        // }
                        titleStyle={{color: 'blue'}}
                    />
                </View>
            </View>
        );
    }
}

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            remember: false,
        };
    }

    static navigationOptions = {
        title: 'Register',
        // tabBarIcon: ({tintColor}) => (
        //     <Icon
        //         name='user-plus'
        //         type='font-awesome'
        //         iconStyle={{color: tintColor}}
        //     />
       // )
    }
    
    handleRegister() {
        console.log(JSON.stringify(this.state));
        if (this.state.remember) {
            SecureStore.setItemAsync('userinfo', JSON.stringify(
                {username: this.state.username, password: this.state.password}))
                .catch(error => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch(
                error => console.log('Could not delete user info', error)
            );
        }
    }

    render() {
        return (

            <ScrollView>
                <View style={styles.container}>
                    <Input
                        placeholder='Username'
                        leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        onChangeText={username => this.setState({username})}
                        value={this.state.username}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={{type: 'font-awesome', name: 'key'}}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='First Name'
                        leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        onChangeText={firstname => this.setState({firstname})}
                        value={this.state.firstname}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Last Name'
                        leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        onChangeText={lastname => this.setState({lastname})}
                        value={this.state.lastname}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Email'
                        leftIcon={{type: 'font-awesome', name: 'envelope-o'}}
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <CheckBox
                        title='Remember Me'
                        center
                        checked={this.state.remember}
                        onPress={() => this.setState({remember: !this.state.remember})}
                        containerStyle={styles.formCheckbox}
                    />
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handleRegister()}
                            title='Register'
                            // icon={
                            //     <Icon
                            //         name='user-plus'
                            //         type='font-awesome'
                            //         color='#fff'
                            //         iconStyle={{marginRight: 10}}
                            //     />
                            // }
                            buttonStyle={{backgroundColor: '#5637DD'}}
                        />
                    </View>
                </View>
                
            </ScrollView>
        );
    }
}





const Stack = createStackNavigator();

function Login() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Maybe}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'orange' },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'orange' },
          }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 5
    },
    formCheckbox: {
        margin: 5,
        backgroundColor: null
    },
    formButton: {
        marginTop:20,
        paddingLeft:20,
        paddingRight:20
    }
});

export default Login;