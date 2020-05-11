import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { texts, colors } from '@utils';
import { TabBarIcon } from '@components';
import { HomeStack, AppointmentStack, ProfileStack, LoginStack, NewAppointmentStack } from './Stacks';
import {
  MAIN_TAB_NAVIGATOR,
  NEW_APPOINTMENT_STACK,
  HOME_STACK,
  APPOINTMENT_STACK,
  PROFILE_STACK
} from './routes'

const { Navigator, Screen } = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeBackgroundColor: colors.tabBar,
  inactiveBackgroundColor: colors.tabBar,
  activeTintColor: colors.primary
}

const defaultStackOptions = {
  headerShown: false
}

const AppNavigator = (props) => (
  <NavigationContainer>
    <Navigator initialRouteName={NEW_APPOINTMENT_STACK}>
    <Screen name={NEW_APPOINTMENT_STACK} component={NewAppointmentStack} options={defaultStackOptions}/>
      <Screen 
        name={MAIN_TAB_NAVIGATOR}
        component={() => <MainTabNavigator isLogged={props.isLogged} />}
        options={defaultStackOptions}
      />
      
    </Navigator>
  </NavigationContainer>
)

const MainTabNavigator = (props) => (
  <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen
      name={HOME_STACK}
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
      name={APPOINTMENT_STACK}
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
      name={PROFILE_STACK}
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
)

export default AppNavigator