import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-ionicons';

export default function TabBarIcon(props) {
  return (
    <Icon
      // name={props.name}
      name={'home-outline'}
      size={26}
      style={{marginBottom: -3}}
      color={props.focused ? '#28F' : '#DDD'}
    />
  );
}