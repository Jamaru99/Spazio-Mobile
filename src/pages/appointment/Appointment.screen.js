import React, { useEffect } from 'react';
import {Text, View, FlatList} from 'react-native';
import { connect } from 'react-redux';

import Styles from './Appointment.style';
import reducer from '../../state/reducer';
import { getNextAppointments } from '../../service/appointment.service'
import { getAppointments } from '../../state/actions'
// import getNextAppointments from '../../service/appointment.service';

const Appointment = (props) => {
  useEffect(async () => {
    const data = await getNextAppointments('5e243f527e3ff81914f982a2');
    props.getAppointments(data);
  }, [])
  return (
    <View>
      {/* <FlatList
        data={props.nextAppointments}
        keyExtractor={item => item._id}
        renderItem={
          item => <Text> {item._id}</Text>
        }
      /> */}
      {/* <FlatList
        data={props.nextAppointments}
        keyExtractor={item => item._id}
        renderItem={
          item => <Text style={Styles.text}> {item.schedule}</Text>
        }
      /> */}
      {
        props.nextAppointments.map(item =>
          <AppointmentItem appointment={item} />
        )
      }
      <Text>Ola mundo</Text>
    </View>
  );
};

const AppointmentItem = (props) => {
  return (
    <View>
      <Text>{props.appointment.serviceData.name}</Text>
    </View>
  )
}

const mapStateToProps = (state) => {
  return{
    nextAppointments: state.nextAppointments
  }
}

const mapDispatchToProps = {
  getAppointments,
}

export default connect (mapStateToProps, mapDispatchToProps) (Appointment);