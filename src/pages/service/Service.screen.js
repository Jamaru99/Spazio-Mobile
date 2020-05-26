import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { ContentLoader } from '@components';
import { setServicesDispatched, updateNewAppointmentDispatched } from '@state';
import { getServices } from '@services';
import { texts, reais, floatToTime } from '@utils';
import { SCHEDULE_SCREEN, EMPLOYEE_SCREEN } from '@navigation';

import styles from './Service.styles';

const ServiceScreen = (props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setServices()
  }, [setServices])

  const setServices = async () => {
    setLoading(true)
    const data = await getServices()
    props.setServicesDispatched(data)
    setLoading(false)
  }

  return (
    <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{texts["service:title"]}</Text>
      </View>
      {loading
        ? <ContentLoader />
        : (
          <ScrollView contentContainerStyle={styles.scroll_container}>
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
        )
      }
    </ImageBackground>
  );
};

const ServiceItem = (props) => {

  const handleOnPress = (id) => {
    if(props.service.employees.length > 1) {
      props.updateNewAppointmentDispatched({ serviceId: id })
      props.navigation.navigate(EMPLOYEE_SCREEN, { serviceEmployees: props.service.employees })
    } else {
      props.updateNewAppointmentDispatched({
        serviceId: id,
        employeeId: props.service.employees[0] || ""
      })
      props.navigation.navigate(SCHEDULE_SCREEN)
    }
  }

  return (
    <TouchableOpacity style={styles.service_item_container} onPress={() => handleOnPress(props.service._id)}>
      <View>
        <Text style={styles.service_item_text_primary}>{props.service.name}</Text>
        <Text style={styles.service_item_text_secondary}>{props.service.description}</Text>
      </View>
      <View>
        <Text style={styles.service_item_text_primary}>{reais(props.service.price)}</Text>
        <Text style={styles.service_item_text_secondary}>{texts["service:duration_prefix"]} {floatToTime(props.service.duration)}</Text>
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