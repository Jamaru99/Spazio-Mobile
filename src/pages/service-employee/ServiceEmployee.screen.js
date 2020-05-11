import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { setServicesDispatched } from '@state';
import { getServices } from '@services';

import styles from './ServiceEmployee.styles';

const ServiceEmployeeScreen = (props) => {

  useEffect(() => {
    setServices()
  }, [setServices])

  const setServices = async () => {
    const data = await getServices()
    props.setServicesDispatched(data)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        <View style={{width: '90%'}}>
          <Text style={styles.text}>Selecione o serviço desejado</Text>
        </View>
        {props.services.map(service => <ServiceItem service={service} />)}
      </ImageBackground>
    </ScrollView>
  );
};

const ServiceItem = (props) => {
  return (
    <TouchableOpacity style={styles.service_item_container}>
      <View></View>
      <View>
        <Text style={styles.text}>{props.service.name}</Text>
        <Text style={styles.text}>{props.service.description}</Text>
      </View>
      <View>
        <Text style={styles.text}>{props.service.price}</Text>
        <Text style={styles.text}>{props.service.duration}</Text>
      </View>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state) => ({
  services: state.services
})

const mapDispatchToProps = {
  setServicesDispatched
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ServiceEmployeeScreen);