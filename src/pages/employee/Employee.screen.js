import React, { useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setEmployeesDispatched, updateNewAppointmentDispatched } from '@state';
import { getEmployees } from '@services';
import { texts } from '@utils';
import { SCHEDULE_SCREEN } from '@navigation';

import styles from './Employee.styles';

const EmployeeScreen = (props) => {

  useEffect(() => {
    setEmployees()
  }, [setEmployees])

  const setEmployees = async () => {
    const data = await getEmployees()
    const filteredData = data.filter(e => props.route.params.serviceEmployees.includes(e._id))
    props.setEmployeesDispatched(filteredData)
  }

  return (
    <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scroll_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{texts["employee:title"]}</Text>
        </View>
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