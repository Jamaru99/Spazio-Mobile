import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../pages/home';
import SessionsScreen from '../pages/sessions';
import ProfileScreen from '../pages/profile';


const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      // name={
      //   Platform.OS === 'ios'
      //     ? `ios-home${focused ? '' : '-outline'}`
      //     : 'md-home'
      // }
      name={'home'}

    />
  ),
};

HomeStack.path = '';

const SessionsStack = createStackNavigator(
  {
    Sessions: SessionsScreen,
  },
  config,
);

SessionsStack.navigationOptions = {
  tabBarLabel: 'Sessões',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      // name={
      //   Platform.OS === 'ios'
      //     ? `ios-home${focused ? '' : '-outline'}`
      //     : 'md-home'
      // }
      name={'calendar'}
      
    />
  ),
};

SessionsStack.path = '';


const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config,
  );
  
  ProfileStack.navigationOptions = {
    tabBarLabel: 'Perfil',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      // name={
      //   Platform.OS === 'ios'
      //     ? `ios-home${focused ? '' : '-outline'}`
      //     : 'md-home'
      //   }
      name={'person'}
    />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SessionsStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
