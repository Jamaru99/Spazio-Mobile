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
import { texts, reais, formattedDatetime } from '@utils'

import Styles from './Appointment.style';

const AppointmentScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setAppointments()
  }, [setAppointments])

  const setAppointments = async () => {
    setLoading(true)
    const data = await getNextAppointments(props.userId)
    if(!data.error)
      props.setAppointmentsDispatched(data)
    else
      setErrorMessage(texts["error:connection"])
      setLoading(false)
  }

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
  const [date, time] = formattedDatetime(props.appointment.schedule)
  const price = reais(props.appointment.serviceData.price)
  //TODO tratamento com o price do serviço
  return (
    <View>
      <View style= {Styles.view_appointment_container}>
        <View style= {Styles.view_content}>
          <View style={Styles.view_header}>
            <Text style={Styles.text_title}>{props.appointment.serviceData.name}</Text>
            <View>
              <Text style={Styles.text_appointment}>{date}</Text>
              <Text style={Styles.text_appointment}>{time}</Text>
            </View>
          </View>

          <View style={Styles.view_footer}>
            <Text style={Styles.text_price}>{price}</Text>

          {/* TODO botao funcionar */}
          <TouchableOpacity style={Styles.button} onPress={() => alert('cancelado')}>
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
    userId: state.userData._id,
    newAppointment: state.newAppointment
  }
}

const mapDispatchToProps = {
  setAppointmentsDispatched,
}

export default connect (mapStateToProps, mapDispatchToProps) (AppointmentScreen);