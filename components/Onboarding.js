import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import Home from './Home';
import Onboarding from 'react-native-onboarding-swiper';
import * as Notifications from 'expo-notifications';


const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Home")}
        onDone={() => navigation.navigate("Home")}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/circle.png')} />,
            title: 'According to all known laws of aviation',
            subtitle: 'there is no way a bee should be able to fly.',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/square.png')} />,
            title: 'Its wings are too small to get',
            subtitle: 'its fat little body off the ground.',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/triangle.png')} />,
            title: 'The bee, of course, flies anyway',
            subtitle: "because bees don't care",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});