import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const ContentLoader = () => (
    <View style={Styles.loader_container}>
        <ActivityIndicator size="large" color="#FF0000" />
    </View>
)

export const InnerLoader = () => <ActivityIndicator size="small" color="#FF0000" />

const Styles = StyleSheet.create({
  loader_container:{
    flex: 1,
    justifyContent: 'center'
  }
})