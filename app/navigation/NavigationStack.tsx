/** 
* javascript comment 
* @Author: Maliah Rajan M 
* @Date: 2020-10-16 22:07:51 
* @Desc: Navigation Logic & Session Handler
*/
import * as React from 'react';

import { Dimensions, Image, LogBox, StatusBar, TouchableOpacity, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import LoginScreen from '../containers/Login'
// import LandingScreen from '../containers/LandingScreen'

import { useSelector } from "react-redux";

//Auth stacks components
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Zen.LoginScreen"
          component={LoginScreen}
          options={{
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: 'push',
            headerShown: false,
            headerBackTitle: undefined,
            headerBackTitleVisible: false,
          }}
        />
        {/* <AuthStack.Screen name="Zen.LandingScreen" component={LandingScreen} options={{ headerShown: false }} /> */}

      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const Navigator = () => {
  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  return (
    <View style={{ flex: 1, backgroundColor: '#020507' }}>
      <AuthStackScreen />
    </View>
  );
}






export default Navigator;
