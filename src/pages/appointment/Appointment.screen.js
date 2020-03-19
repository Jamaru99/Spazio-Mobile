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
      
      {
        props.nextAppointments.map(item =>
          <AppointmentItem appointment={item} />
        )
      }
      {/* <Text>{reducer.nextAppointments[0].status}</Text> */}
      {/* <Text>{JSON.stringify(reducer.nextAppointments)}</Text> */}
      <Text>Ola mundo</Text>
    </View>
  );
};

const AppointmentItem = (props) => {
  const [date, time] = props.appointment.schedule.split("T")
  const [year, month, day] = date.split('-')
  return (
    <View>
      <View style= {Styles.view_header}>
        <Text style= {Styles.text_header}>situação {props.appointment.status}</Text>
        <Text style= {Styles.text_header}>{day}/{month}/{year}</Text>
        <Text style= {Styles.text_header}>{time}</Text>

      </View>
      <View style= {Styles.view_appointment_conteiner}>

        <Text style={Styles.text_title}>{props.appointment.serviceData.name}</Text>
        <View style={Styles.view_description}>

          <Text style={Styles.text_description}>{props.appointment.serviceData.description}</Text>
        </View>
        <View style= {Styles.view_price}>

          <Text style={Styles.text_price}>R${props.appointment.serviceData.price}</Text>
        </View>
        {/* <Text>{props.appointment.serviceData.duration}</Text> */}
      </View>
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