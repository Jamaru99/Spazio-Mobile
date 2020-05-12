import React, { useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setEmployeesDispatched, updateNewAppointmentDispatched } from '@state';
import { getEmployees } from '@services';

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
          <Text style={styles.title}>Selecione o(a) profissional:</Text>
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
      props.navigation.navigate("ScheduleScreen")
  }

  return (
    <TouchableOpacity style={styles.employee_item_container} onPress={() => handleOnPress(props.employee._id)}>
      <View>
        <Text style={styles.employee_item_text}>{props.employee.name}</Text>
      </View>
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