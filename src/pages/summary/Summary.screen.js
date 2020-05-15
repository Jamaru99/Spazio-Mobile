import React, { useEffect, useState } from 'react';
import {Text, View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { TouchableFooter } from '@components';
import { getEmployeeDetail } from '@services';
import { texts, formattedDatetime, reais } from '@utils'

import styles from './Summary.styles'

const SummaryScreen = (props) => {

    const [employeeName, setEmployeeName] = useState("");
    const [date, time] = formattedDatetime(props.newAppointment.schedule)

    useEffect(() => {
        setEmployee()
    })

    const setEmployee = async () => {
        const data = await getEmployeeDetail(props.newAppointment.employeeId)
        setEmployeeName(data.name)
    }

    return (
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scroll_container}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Serviço:</Text>
          </View>
          <View style={styles.employee_item_container}>
            <Text style={styles.employee_item_text}>{props.newAppointment.service.name}</Text>
          </View>
          <View style={styles.title_container}>
            <Text style={styles.title}>Profissional:</Text>
          </View>
          <View style={styles.employee_item_container}>
            <Text style={styles.employee_item_text}>{employeeName}</Text>
          </View>
          <View style={styles.title_container}>
            <Text style={styles.title}>Data e horário:</Text>
          </View>
          <View style={styles.employee_item_container}>
            <Text style={styles.employee_item_text}>{date} - {time}</Text>
          </View>
          <Text style={styles.total_text}>Total: {reais(props.newAppointment.service.price)}</Text>
          <Text style={styles.payment_text}>Pagamento em dinheiro ou cartão no próprio estabelecimento</Text>
        </ScrollView>
        <TouchableFooter onPress={() => {
            props.navigation.popToTop()
            props.navigation.navigate("MainTabNavigator")
        }} />
      </ImageBackground>
    )
}

const mapStateToProps = (state) => ({
  newAppointment: state.newAppointment
})

export default connect(mapStateToProps, null)(SummaryScreen);