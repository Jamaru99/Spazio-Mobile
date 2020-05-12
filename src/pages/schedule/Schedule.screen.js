import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const ScheduleScreen = (props) => {
  return (
    <View>
      <Text>Selecione data e horário {JSON.stringify(props.newAppointment)}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  newAppointment: state.newAppointment
})
  
export default connect(mapStateToProps, null)(ScheduleScreen)