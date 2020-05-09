import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { texts, colors } from '@utils';
import { TabBarIcon } from '@components';
import { HomeStack, AppointmentStack, ProfileStack, LoginStack } from './Stacks';

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