import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-ionicons';

export default function TabBarIcon(props) {
  return (
    <Icon
      // name={props.name}
      name={'home'}
      size={26}
      style={{marginBottom: -3}}
      color={props.focused ? '#28F' : '#DDD'}
    />
    // <Icon ios="ios-add" android="md-add" />
    // <Icon name="information-circle-outline" />
    // <Icon name="add" />
  );
}
