import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';

import Styles from './Appointment.style';
import reducer from '../../state/reducer';
import { getNextAppointments } from '../../service/appointment.service';
import { getAppointments } from '../../state/actions';
// import { TouchableOpacity } from 'react-native-gesture-handler';
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
      {/* <Text>Ola mundo</Text> */}
    </View>
  );
};

const AppointmentItem = (props) => {
  const [date, timer] = props.appointment.schedule.split("T")
  const [year, month, day] = date.split('-')
  const time = timer.slice(0,5)
  const price = ((props.appointment.serviceData.price).toString()).replace('.',',')
  //TODO tratamento com o price do serviço
  return (
    <View style= {Styles.view_appointment_conteiner}>
      <View style= {Styles.view_content}>
        <View style={Styles.view_header}>
          <Text style={Styles.text_title}>{props.appointment.serviceData.name}</Text>
          <View>
            <Text>{day}/{month}/{year}</Text>
            <Text>{time}</Text>
          </View>
        </View>

        {/* <Text style={Styles.text_description}>{props.appointment.serviceData.description}</Text> */}
        <View style={Styles.view_footer}>
          {/* <Text style={Styles.text_price}>R$ {props.appointment.serviceData.price}</Text> */}
          <Text style={Styles.text_price}>R$ {price}</Text>
          {/* <Button> Aperte para cancelar</Button> */}
          <TouchableOpacity style={Styles.button}
            onPress={alert('cancelado')}
          >

            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>


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