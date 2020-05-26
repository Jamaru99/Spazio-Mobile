import React from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';

const SummaryScreen = (props) => {
    return (
      <View>
        <Text>{JSON.stringify(props.newAppointment)}</Text>
      </View>
    )
}

const mapStateToProps = (state) => ({
  newAppointment: state.newAppointment
})

export default connect(mapStateToProps, null)(SummaryScreen);