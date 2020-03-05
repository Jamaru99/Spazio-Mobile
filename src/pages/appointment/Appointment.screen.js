import React from 'react';
import {Text, View, FlatList} from 'react-native';
import { connect } from 'react-redux';

import Styles from './Appointment.style';
import reducer from '../../state/reducer';
// import getNextAppointments from '../../service/appointment.service';

const Appointment = (props) => {
  return (
    <View>
      {/* <FlatList
        data={props.nextAppointments}
        keyExtractor={item => item._id}
        renderItem={
          item => <Text> {item._id}</Text>
        }
      /> */}
      <FlatList
        data={props.nextAppointments}
        keyExtractor={item => item._id}
        renderItem={
          item => <Text style={Styles.text}> {item._id}</Text>
        }
      />
      <Text>Ola mundo</Text>
      {/* <Text>{JSON.stringify(props.nextAppointments)}</Text> */}
    </View>
  );
};

const mapStateToProps = (state) => {
  return{
    nextAppointments: state.nextAppointments
  }
}

export default connect (mapStateToProps, null) (Appointment);