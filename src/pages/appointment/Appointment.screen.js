import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';

import { connect } from 'react-redux';

import Styles from './Appointment.style';
import reducer from '../../state/reducer';
import { getNextAppointments } from '../../service/appointment.service';
import { getAppointments } from '../../state/actions';
import Login from '../login/Login.screen';

const AppointmentScreen = (props) => {
  useEffect(async () => {
    const data = await getNextAppointments('5e243f527e3ff81914f982a2');
    props.getAppointments(data);
  }, [])
  return (
    // #TODO adicionar a ImageBackground aqui
    <View>
      {
        props.isLogged 
        ? <AppointmentList nextAppointments={props.nextAppointments}/>
        :<Login />
      }
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
    <View>
      <View style= {Styles.view_appointment_container}>
        <View style= {Styles.view_content}>
          <View style={Styles.view_header}>
            <Text style={Styles.text_title}>{props.appointment.serviceData.name}</Text>
            <View>
              <Text style={Styles.text_appointment}>{day}/{month}/{year}</Text>
              <Text style={Styles.text_appointment}>{time}</Text>
            </View>
          </View>

          <View style={Styles.view_footer}>
            <Text style={Styles.text_price}>R$ {price}</Text>

            <TouchableOpacity style={Styles.button}
              onPress={() => alert('cancelado')}
            >

              <Text style={Styles.button_text}>Cancelar</Text>
            </TouchableOpacity>
          </View>

      </View>
  </View>
    </View>
  )
}

const AppointmentList = (props) => {
  return(

    <View style={Styles.view_container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={Styles.background}>
        
        {
          props.nextAppointments.map(item =>
            <AppointmentItem appointment={item} />
            )
          }
      </ImageBackground>
    </View>
  )
}

const mapStateToProps = (state) => {
  return{
    nextAppointments: state.nextAppointments,
    isLogged: state.isLogged
  }
}

const mapDispatchToProps = {
  getAppointments,
}

export default connect (mapStateToProps, mapDispatchToProps) (AppointmentScreen);