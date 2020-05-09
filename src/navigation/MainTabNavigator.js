import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSwitchNavigator, NavigationContainer} from '@react-navigation/native';

import { texts, colors } from '@utils';
import { TabBarIcon } from '@components';
import { HomeScreen, AppointmentScreen, ProfileScreen, RegisterScreen, LoginScreen } from '@pages';

const config = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.accent,
}

const { Navigator, Screen } = createNativeStackNavigator()

function HomeStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={config}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Spazio Nina Bernardes' }}
      />
    </Navigator>
  );
}

function AppointmentStack() {
  return (
    <Navigator
      initialRouteName="Appointment"
      screenOptions={config}
    >
      <Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{ title: 'Sessões marcadas' }}
      />
    </Navigator>
  );
}

function ProfileStack() {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={config}
    >
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Meus dados' }}
      />
    </Navigator>
  );
}

function LoginStack() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={config}
    >
      <Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Screen
        name="Register"
        component={RegisterScreen}
        //options={{ hasTabBar: false }}
      />
    </Navigator>
  );
}

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeBackgroundColor: "#000000DD",
  inactiveBackgroundColor: "#000000DD",
  activeTintColor: colors.primary
}

export default (props) => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: texts['menu-tab:home'],
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              name={'home'}
            />
          )
        }}
      />
      <Tab.Screen
        name="AppointmentStack"
        component={props.isLogged ? AppointmentStack : LoginStack}
        options={{
          tabBarLabel: texts['menu-tab:appointment'],
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              name={'calendar'}
            />
          )
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={props.isLogged ? ProfileStack : LoginStack}
        options={{
          tabBarLabel: texts['menu-tab:profile'],
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              name={'person'}
            />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
)