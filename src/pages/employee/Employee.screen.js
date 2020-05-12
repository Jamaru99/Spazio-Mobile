import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { ContentLoader } from '@components';
import { setEmployeesDispatched, updateNewAppointmentDispatched } from '@state';
import { getEmployees } from '@services';
import { texts } from '@utils';
import { SCHEDULE_SCREEN } from '@navigation';

import styles from './Employee.styles';

const EmployeeScreen = (props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setEmployees()
  }, [setEmployees])

  const setEmployees = async () => {
    setLoading(true)
    const data = await getEmployees()
    const filteredData = data.filter(e => props.route.params.serviceEmployees.includes(e._id))
    props.setEmployeesDispatched(filteredData)
    setLoading(false)
  }

  return (
    <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{texts["employee:title"]}</Text>
      </View>
      {loading
        ? <ContentLoader />
        : (
          <ScrollView contentContainerStyle={styles.scroll_container}>
          {
            props.employees.map(
              employee => (
                <EmployeeItem
                  navigation={props.navigation}
                  employee={employee}
                  updateNewAppointmentDispatched={props.updateNewAppointmentDispatched}
                />
              )
            )
          }
          </ScrollView>
        )
      }
    </ImageBackground>
  );
};

const EmployeeItem = (props) => {

  const handleOnPress = (id) => {
      props.updateNewAppointmentDispatched({ employeeId: id })
      props.navigation.navigate(SCHEDULE_SCREEN)
  }

  return (
    <TouchableOpacity style={styles.employee_item_container} onPress={() => handleOnPress(props.employee._id)}>
      <Text style={styles.employee_item_text}>{props.employee.name}</Text>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state) => ({
  employees: state.employees
})

const mapDispatchToProps = {
  setEmployeesDispatched,
  updateNewAppointmentDispatched
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeScreen);