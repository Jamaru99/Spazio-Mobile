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
  ScheduleScreen
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

export function NewAppointmentStack() {
  return (
    <Navigator
      initialRouteName={SERVICE_SCREEN}
      screenOptions={defaultScreenOptions}
    >
      <Screen
        name={SERVICE_SCREEN}
        component={ServiceScreen}
        options={{ title: 'Agendar sessão' }}
      />
      <Screen
        name={EMPLOYEE_SCREEN}
        component={EmployeeScreen}
        options={{ title: 'Agendar sessão' }}
      />
      <Screen
        name={SCHEDULE_SCREEN}
        component={ScheduleScreen}
        options={{ title: 'Selecione o horário' }}
      />
    </Navigator>
  );
}