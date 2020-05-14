import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { ContentLoader } from '@components'
import { setAvailableSchedulesDispatched, updateNewAppointmentDispatched } from '@state'
import { getAvailableSchedules } from '@services'
import { SUMMARY_SCREEN } from '@navigation'
import { texts, formattedDate, nextDays } from '@utils'

import styles from './Schedule.styles';

const dates = nextDays()

const ScheduleScreen = (props) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setAvailableSchedules(0)
  }, [setAvailableSchedules])

  const setAvailableSchedules = async (index) => {
    setLoading(true)
    setSelectedDateIndex(index)
    const data = await getAvailableSchedules(dates[index].date, props.newAppointment.serviceId, props.newAppointment.employeeId)
    props.setAvailableSchedulesDispatched(data)
    setLoading(false)
  }

  const handleSchedulePress = (schedule) => {
    props.updateNewAppointmentDispatched({ schedule: `${dates[selectedDateIndex].date}T${schedule}` })
    props.navigation.navigate(SUMMARY_SCREEN)
  }

  return (
    <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
      <View style={styles.list_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{texts["schedule:date_title"]}</Text>
        </View>
        <FlatList
          data={dates}
          horizontal
          keyExtractor={(_, index) => index}
          renderItem={({item, index}) => (
            <DateItem
              date={formattedDate(item.date)}
              weekday={item.weekday}
              selected={selectedDateIndex === index}
              onPress={() => setAvailableSchedules(index)}
            />
          )}
        />
      </View>
      <View style={styles.list_container}>
        {loading
          ? <ContentLoader />
          : <ScheduleSection
              availableSchedules={props.availableSchedules}
              handleSchedulePress={handleSchedulePress}
            />
        }
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
      <Text style={[styles.date_item_text, props.selected && styles.date_item_text_selected]}>{props.weekday}</Text>
    </TouchableOpacity>
  )
}

const ScheduleSection = (props) => {
  return (
    props.availableSchedules.length > 0
      ? (
        <>
          <View style={styles.title_container}>
            <Text style={styles.title}>{texts["schedule:schedule_title"]}</Text>
          </View>
          <FlatList
            data={props.availableSchedules}
            keyExtractor={(_, index) => index}
            style={{marginBottom: 150}}
            renderItem={({item}) => (
              <ScheduleItem
                schedule={item}
                onPress={() => props.handleSchedulePress(item)}
              />
            )}
          />
        </>
      ) : (
        <View style={styles.title_container}>
          <Text style={styles.title}>{texts["schedule:no_schedule"]}</Text>
        </View>
      )
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
  setAvailableSchedulesDispatched,
  updateNewAppointmentDispatched
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)