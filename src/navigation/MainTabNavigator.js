import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Texts from '../components/Texts';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../pages/Home';
import AppointmentScreen from '../pages/Appointment';
import ProfileScreen from '../pages/Profile';


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
  // tabBarLabel: Texts,
  tabBarLabel: Texts["menu-tab:home"],
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

HomeStack.path = '';

const AppointmentStack = createStackNavigator(
  {
    Appointment: AppointmentScreen,
  },
  config,
);

AppointmentStack.navigationOptions = {
  tabBarLabel: Texts["menu-tab:appointment"],
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={'calendar'}
    />
  ),
};

AppointmentStack.path = '';


const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config,
  );
  
  ProfileStack.navigationOptions = {
  tabBarLabel: Texts["menu-tab:profile"],
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={'person'}
    />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AppointmentStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
