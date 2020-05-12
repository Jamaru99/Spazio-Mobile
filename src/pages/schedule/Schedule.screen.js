import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setAvailableSchedulesDispatched } from '@state'
import { getAvailableSchedules } from '@services'
import { date } from '@utils'

import styles from './Schedule.styles';

const dates = ["2020-05-13", "2020-05-14", "2020-05-15", "2020-05-16"]

const ScheduleScreen = (props) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0)

  useEffect(() => {
    setAvailableSchedules()
  }, [setAvailableSchedules])

  const setAvailableSchedules = async () => {
    const data = await getAvailableSchedules(dates[selectedDateIndex], props.newAppointment.serviceId, props.newAppointment.employeeId)
    props.setAvailableSchedulesDispatched(data)
  }

  return (
    <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
      <View style={styles.date_list_container}>
        <Text style={{color: 'white'}}>Escolha a data: </Text>
        <FlatList
          data={dates}
          horizontal
          keyExtractor={(_, index) => index}
          renderItem={({item, index}) => (
            <DateItem
              date={date(item)}
              selected={selectedDateIndex === index}
              onPress={() => setSelectedDateIndex(index)}
            />
          )}
        />
      </View>
      <View>
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

const mapStateToProps = (state) => ({
  newAppointment: state.newAppointment,
  availableSchedules: state.availableSchedules
})

const mapDispatchToProps = {
  setAvailableSchedulesDispatched
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)