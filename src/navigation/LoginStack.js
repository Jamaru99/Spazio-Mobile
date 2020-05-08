import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '@pages';
import { texts, colors } from '@utils';

const config = {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.accent,
    }
  }
  
// const LoginStack = createStackNavigator(
//     {
//       Login: LoginScreen,
//       Register: RegisterScreen
//     },
//     config
// )

// export default LoginStack