import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setAvailableSchedulesDispatched } from '@state'
import { getAvailableSchedules } from '@services'
import { date } from '@utils'

import styles from './Schedule.styles';

const dates = ["2021-05-13", "2021-05-14", "2021-05-15", "2021-05-16"]

const ScheduleScreen = (props) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0)

  useEffect(() => {
    setAvailableSchedules(0)
  }, [setAvailableSchedules])

  const setAvailableSchedules = async (index) => {
    setSelectedDateIndex(index)
    const data = await getAvailableSchedules(dates[index], props.newAppointment.serviceId, props.newAppointment.employeeId)
    props.setAvailableSchedulesDispatched(data)
  }

  return (
    <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
      <View style={styles.list_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Selecione a data:</Text>
        </View>
        <FlatList
          data={dates}
          horizontal
          keyExtractor={(_, index) => index}
          renderItem={({item, index}) => (
            <DateItem
              date={date(item)}
              selected={selectedDateIndex === index}
              onPress={() => setAvailableSchedules(index)}
            />
          )}
        />
      </View>
      <View style={styles.list_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Escolha o horário:</Text>
        </View>
        <FlatList
          data={props.availableSchedules}
          keyExtractor={(_, index) => index}
          style={{marginBottom: 150}}
          renderItem={({item}) => (
            <ScheduleItem
              schedule={item}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

const DateItem = (props) => {
  return (
    <TouchableOpacity
      style={[styles.date_item_container, props.selected && styles.date_item_container_selected]}
      onPress={props.onPress}
    >
      <Text style={[styles.date_item_text, props.selected && styles.date_item_text_selected]}>{props.date}</Text>
    </TouchableOpacity>
  )
}

const ScheduleItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.schedule_item_container}
      onPress={props.onPress}
    >
      <Text style={styles.schedule_item_text}>{props.schedule}</Text>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state) => ({
  newAppointment: state.newAppointment,
  availableSchedules: state.availableSchedules
})

const mapDispatchToProps = {
  setAvailableSchedulesDispatched
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)