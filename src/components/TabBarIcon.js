import React from 'react';
import Icon from 'react-native-ionicons';
import { colors } from '@utils';

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      size={26}
      style={{marginBottom: -3}}
      color={props.focused ? colors.primary : colors.accent}
    />
  );
}
