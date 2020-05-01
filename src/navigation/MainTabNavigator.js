import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Texts from '../components/Texts';
import TabBarIcon from '../components/TabBarIcon';
import { HomeScreen, AppointmentScreen, ProfileScreen } from '@pages';

// TESTE
import {LoginScreen} from '@pages';

const config = {
  
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#9e0308',
    },
    headerTintColor: '#fff',
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  headerStyle: {
    backgroundColor: '#9e0308',
    headerTintColor: '#fff',
    headerTitleStyle:{ color: 'green'},
  },
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
    // Profile: ProfileScreen,
    Profile: LoginScreen,
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
},{
  tabBarOptions: {
    activeBackgroundColor: '#000000DD',
    inactiveBackgroundColor: '#000000DD',
    activeTintColor: '#9e0308'
  },
});

tabNavigator.path = '';

export default tabNavigator;
