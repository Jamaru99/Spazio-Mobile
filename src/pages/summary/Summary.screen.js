import React, { useEffect, useState } from 'react';
import {Text, View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { TouchableFooter } from '@components';
import { getEmployeeDetail, createAppointment } from '@services';
import { texts, formattedDatetime, reais } from '@utils'

import styles from './Summary.styles'

const SummaryScreen = (props) => {

    const [employeeName, setEmployeeName] = useState("")
    const [buttonText, setButtonText] = useState("CONFIRMAR")
    const [loading, setLoading] = useState(false)
    const [date, time] = formattedDatetime(props.newAppointment.schedule)

    useEffect(() => {
        setEmployee()
    })

    const setEmployee = async () => {
        const data = await getEmployeeDetail(props.newAppointment.employeeId)
        setEmployeeName(data.name)
    }

    const handleConfirmPress = async () => {
        setLoading(true)
        const data = {
            customerId: props.userData._id,
            serviceId: props.newAppointment.service._id,
            employeeId: props.newAppointment.employeeId,
            schedule: props.newAppointment.schedule
        }
        const appointment = await createAppointment(data)
        setLoading(false)
        if(appointment.error) setButtonText("Erro, tente novamente")
        else { 
            setButtonText("AGENDADO!")
            setTimeout(() => returnToHome(), 2300)
        }
    }

    const returnToHome = () => {
        props.navigation.popToTop()
        props.navigation.navigate("MainTabNavigator")
    }

    return (
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scroll_container}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Serviço:</Text>
          </View>
          <View style={styles.summary_item_container}>
            <Text style={styles.summary_item_text}>{props.newAppointment.service.name}</Text>
          </View>
          <View style={styles.title_container}>
            <Text style={styles.title}>Profissional:</Text>
          </View>
          <View style={styles.summary_item_container}>
            <Text style={styles.summary_item_text}>{employeeName}</Text>
          </View>
          <View style={styles.title_container}>
            <Text style={styles.title}>Data e horário:</Text>
          </View>
          <View style={styles.summary_item_container}>
            <Text style={styles.summary_item_text}>{date} - {time}</Text>
          </View>
          <Text style={styles.total_text}>Total: {reais(props.newAppointment.service.price)}</Text>
          <Text style={styles.payment_text}>Pagamento em dinheiro ou cartão no próprio estabelecimento</Text>
        </ScrollView>
        <TouchableFooter text={buttonText} onPress={handleConfirmPress} loading={loading} />
      </ImageBackground>
    )
}

const mapStateToProps = (state) => ({
  newAppointment: state.newAppointment,
  userData: state.userData
})

export default connect(mapStateToProps, null)(SummaryScreen);