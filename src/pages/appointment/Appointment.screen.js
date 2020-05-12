import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';

import { getNextAppointments } from '@services';
import { setAppointmentsDispatched } from '@state';
import { ContentLoader } from '@components';
import { texts } from '@utils'

import Styles from './Appointment.style';

const AppointmentScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(async () => {
    setLoading(true)
    const data = await getNextAppointments(props.userId)
    if(!data.error)
      props.setAppointmentsDispatched(data)
    else
      setErrorMessage(texts["error:connection"])
    setLoading(false)
  }, [])

  return (
    <View style={Styles.view_container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={Styles.background}>
        {
          loading
          ? <ContentLoader />
          : props.nextAppointments.map(item =>
              <AppointmentItem appointment={item} />
            )
        }
        <Text style={Styles.text_error_message}>{errorMessage}</Text>
      </ImageBackground>
    </View>
  )
}

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

          {/* TODO botao funcionar */}
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

const mapStateToProps = (state) => {
  return {
    nextAppointments: state.nextAppointments,
    isLogged: state.isLogged,
    userId: state.userData._id
  }
}

const mapDispatchToProps = {
  setAppointmentsDispatched,
}

export default connect (mapStateToProps, mapDispatchToProps) (AppointmentScreen);