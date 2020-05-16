import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  HomeScreen,
  AppointmentScreen,
  ProfileScreen,
  RegisterScreen,
  LoginScreen,
  ServiceScreen,
  EmployeeScreen,
  ScheduleScreen,
  SummaryScreen
} from '@pages';
import { texts, colors } from '@utils';
import {
  HOME_SCREEN,
  APPOINTMENT_SCREEN,
  PROFILE_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  SERVICE_SCREEN,
  EMPLOYEE_SCREEN,
  SCHEDULE_SCREEN,
  SUMMARY_SCREEN
} from './routes'

const { Navigator, Screen } = createNativeStackNavigator()

const defaultScreenOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.accent,
}

export function HomeStack() {
  return (
    <Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={defaultScreenOptions}
    >
      <Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{ title: texts["home:header"] }}
      />
    </Navigator>
  );
}

export function AppointmentStack() {
  return (
    <Navigator
      initialRouteName={APPOINTMENT_SCREEN}
      screenOptions={defaultScreenOptions}
    >
      <Screen
        name={APPOINTMENT_SCREEN}
        component={AppointmentScreen}
        options={{ title: texts["appointment:header"] }}
      />
    </Navigator>
  );
}

export function ProfileStack() {
  return (
    <Navigator
      initialRouteName={PROFILE_SCREEN}
      screenOptions={defaultScreenOptions}
    >
      <Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ title: texts["profile:header"] }}
      />
    </Navigator>
  );
}

export function LoginStack() {
  return (
    <Navigator
      initialRouteName={LOGIN_SCREEN}
      screenOptions={defaultScreenOptions}
    >
      <Screen
        name={LOGIN_SCREEN}
        component={LoginScreen}
        options={{ title: texts["login:header"] }}
      />
      <Screen
        name={REGISTER_SCREEN}
        component={RegisterScreen}
      />
    </Navigator>
  );
}

export function NewAppointmentStack(props) {
  return (
    <Navigator
      initialRouteName={SERVICE_SCREEN}
      screenOptions={defaultScreenOptions}
    >
      <Screen
        name={SERVICE_SCREEN}
        component={ServiceScreen}
        options={{ title: texts["service:header"] }}
      />
      <Screen
        name={EMPLOYEE_SCREEN}
        component={EmployeeScreen}
        options={{ title: texts["employee:header"] }}
      />
      <Screen
        name={SCHEDULE_SCREEN}
        component={ScheduleScreen}
        options={{ title: texts["schedule:header"] }}
      />
      <Screen
        name={SUMMARY_SCREEN}
        component={props.isLogged ? SummaryScreen : LoginStack}
        options={{ title: texts["summary:header"], headerShown: props.isLogged }}
      />
    </Navigator>
  );
}