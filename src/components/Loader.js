import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '@utils';

export const ContentLoader = () => (
    <View style={Styles.loader_container}>
        <ActivityIndicator size="large" color={colors.primary} />
    </View>
)

export const InnerLoader = (props) => <ActivityIndicator size="small" color={props.color || colors.accent} />

const Styles = StyleSheet.create({
  loader_container:{
    flex: 1,
    justifyContent: 'center'
  }
})