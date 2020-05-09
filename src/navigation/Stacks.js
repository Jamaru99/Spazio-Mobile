import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, AppointmentScreen, ProfileScreen, RegisterScreen, LoginScreen } from '@pages';
import { texts, colors } from '@utils';

const { Navigator, Screen } = createNativeStackNavigator()

const config = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.accent,
}

export function HomeStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={config}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: texts["home:header"] }}
      />
    </Navigator>
  );
}

export function AppointmentStack() {
  return (
    <Navigator
      initialRouteName="Appointment"
      screenOptions={config}
    >
      <Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{ title: texts["appointment:header"] }}
      />
    </Navigator>
  );
}

export function ProfileStack() {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={config}
    >
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: texts["profile:header"] }}
      />
    </Navigator>
  );
}

export function LoginStack() {
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
        //options={{ tabBarVisible: false }}
      />
    </Navigator>
  );
}