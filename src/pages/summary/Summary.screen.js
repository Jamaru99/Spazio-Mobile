import React from 'react';
import {Text, View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { TouchableFooter } from '@components';
import { texts } from '@utils'

import styles from './Summary.styles'

const SummaryScreen = (props) => {
    return (
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scroll_container}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Serviço:</Text>
          </View>
          <View style={styles.employee_item_container}>
            <Text style={styles.employee_item_text}>Corte</Text>
          </View>
        </ScrollView>
        <TouchableFooter onPress={() => {
            props.navigation.popToTop()
            props.navigation.navigate("MainTabNavigator")
        }} />
      </ImageBackground>
    )
}

const mapStateToProps = (state) => ({
  newAppointment: state.newAppointment
})

export default connect(mapStateToProps, null)(SummaryScreen);