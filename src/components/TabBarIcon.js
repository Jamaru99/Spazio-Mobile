import React from 'react';
import Icon from 'react-native-ionicons';

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      size={26}
      style={{marginBottom: -3}}
      color={props.focused ? '#9e0308' : '#DDD'}
    />
  );
}
