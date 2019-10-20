import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  LoginScreen, CreateAccountScreen, AddCardScreen
} from './src/components/Auth';
import { HomeScreen } from './src/components/Home';

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          <MaterialCommunityIcons name="home" size={25} color={focused ? "#030404" : "#8F9FB3"} />
      }
    },
    Statement: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          <AntDesign name="filetext1" size={25} color={focused ? "#030404" : "#8F9FB3"} />
      }
    },
    Add: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () =>
          <Ionicons style={{ marginBottom: 10 }} name="ios-add-circle" size={40} color="#4EAC50" />,
        tabBarLabel: () => null
      }
    },
    CashOut: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          <MaterialCommunityIcons name="currency-ngn" size={25} color={focused ? "#030404" : "#8F9FB3"} />
      }
    },
    Profile: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          <AntDesign name="user" size={25} color={focused ? "#030404" : "#8F9FB3"} />
      }
    },
  },
  {
    tabBarOptions: {
      style: {
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 0,
      },
      activeTintColor: '#030404',
      inactiveTintColor: '#8F9FB3'
  }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    CreateAccount: {
      screen: CreateAccountScreen,
    },
    AddCard: {
      screen: AddCardScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);

const AppNavigator = createSwitchNavigator(
  {
    AuthStack: AuthStack,
    AppStack: AppStack
  },
  {
    headerMode: 'none',
    initialRouteName: 'AuthStack',
  }
);

export default createAppContainer(AppNavigator);
