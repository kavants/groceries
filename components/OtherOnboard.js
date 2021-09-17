import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Footer from './Footer';
import Page from './Page';

const OtherOnboarding = () => {
    return (
        <View style={{ flex: 1 }}>
          <ViewPager style={{ flex: 1 }}>
            <View key="1">
              <Page
                backgroundColor="#ffc93c"
                iconName="sun"
                title="Welcome to the weather app"
                image= '../assets/circle.png'
              />
              <Footer
                backgroundColor="#ffc93c"
                rightButtonLabel="Next"
                rightButtonPress={() => true}
              />
            </View>
            <View key="2">
             <Page
                //    <Image source={require('../assets/circle.png')} /> 
                image={require('../assets/circle.png')}
                backgroundColor="#07689f"
                iconName="cloud-drizzle"
                title="Get updates on weather"
              />
              <Footer
                backgroundColor="#07689f"
                rightButtonLabel="Next"
                rightButtonPress={() => true}
              />
            </View>
          </ViewPager>
        </View>
      );
    };

export default OtherOnboarding;