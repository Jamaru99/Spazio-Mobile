import React, { useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { connect } from 'react-redux';

import Styles from './Appointment.style';
import { getNextAppointments } from '@services';
import { getAppointmentsDispatched } from '@state';
import { LoginScreen } from '@pages';

const AppointmentScreen = (props) => {
  
  return (
    // #TODO adicionar a ImageBackground aqui
    <View>
      {
        props.isLogged 
        ? <AppointmentList
            nextAppointments={props.nextAppointments}
            getAppointments={props.getAppointmentsDispatched}
            userId={props.userId}
          />
        : <LoginScreen />
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
  useEffect(async () => {
    const data = await getNextAppointments(props.userId);
    props.getAppointments(data);
  }, [])
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
    isLogged: state.isLogged,
    userId: state.userData._id
  }
}

const mapDispatchToProps = {
  getAppointmentsDispatched,
}

export default connect (mapStateToProps, mapDispatchToProps) (AppointmentScreen);