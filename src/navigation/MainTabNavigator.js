import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSwitchNavigator, NavigationContainer} from '@react-navigation/native';

import { texts, colors } from '@utils';
import { TabBarIcon } from '@components';
import { HomeScreen, AppointmentScreen, ProfileScreen, RegisterScreen } from '@pages';

// TESTE
import { LoginScreen } from '@pages';

const config = {
  
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.accent,
}

const { Navigator, Screen } = createNativeStackNavigator()

// const HomeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   config
// );

// HomeStack.navigationOptions = {
//   tabBarLabel: texts["menu-tab:home"],
//   tabBarIcon: ({focused}) => (
//     <TabBarIcon
//       focused={focused}
//       name={'home'}
//     />
//   ),
// };

// HomeStack.path = '';

function RootStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={config}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My app' }}
      />
    </Navigator>
  );
}

function OtherStack() {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{ gestureEnabled: false }}
    >
      <Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ user: 'me' }}
      />
    </Navigator>
  );
}

const Tab = createBottomTabNavigator();
// function tabNavigator(){
//   return (
    
//   )
// }

export default () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={{
      activeBackgroundColor: "#000000DD",
      inactiveBackgroundColor: "#000000DD",
      activeTintColor: colors.primary
      }}>
      <Tab.Screen
        name="seila"
        component={RootStack}
        options={{tabBarIcon: ({focused}) => (
          <TabBarIcon
            focused={focused}
            name={'person'}
          />
          )
        }}
      />
      {/* <Tab.Screen name="Appointment" Component={AppointmentStack} /> */}
      <Tab.Screen name="Other" component={OtherStack} />
    </Tab.Navigator>
  </NavigationContainer>)

//</NavigationContainer>export default tabNavigator;