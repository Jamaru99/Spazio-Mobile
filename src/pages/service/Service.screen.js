import React, { useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setServicesDispatched, updateNewAppointmentDispatched } from '@state';
import { getServices } from '@services';

import styles from './Service.styles';

const ServiceScreen = (props) => {

  useEffect(() => {
    setServices()
  }, [setServices])

  const setServices = async () => {
    const data = await getServices()
    props.setServicesDispatched(data)
  }

  return (
    <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scroll_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Selecione o serviço desejado:</Text>
        </View>
        {
          props.services.map(
            service => (
              <ServiceItem
                navigation={props.navigation}
                service={service}
                updateNewAppointmentDispatched={props.updateNewAppointmentDispatched}
              />
            )
          )
        }
      </ScrollView>
    </ImageBackground>
  );
};

const ServiceItem = (props) => {

  const handleOnPress = (id) => {
    if(props.service.employees.length > 1) {
      props.updateNewAppointmentDispatched({ serviceId: id })
      props.navigation.navigate("EmployeeScreen")
    } else {
      props.updateNewAppointmentDispatched({
        serviceId: id,
        employeeId: props.service.employees[0] || ""
      })
      props.navigation.navigate("ScheduleScreen")
    }
  }

  return (
    <TouchableOpacity style={styles.service_item_container} onPress={() => handleOnPress(props.service._id)}>
      <View>
        <Text style={styles.service_item_text}>{props.service.name}</Text>
        <Text style={styles.service_item_text}>{props.service.description}</Text>
      </View>
      <View>
        <Text style={styles.service_item_text}>{props.service.price}</Text>
        <Text style={styles.service_item_text}>{props.service.duration}</Text>
      </View>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state) => ({
  services: state.services
})

const mapDispatchToProps = {
  setServicesDispatched,
  updateNewAppointmentDispatched
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ServiceScreen);