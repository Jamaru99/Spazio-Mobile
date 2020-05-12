import React, { useState } from 'react';
import { Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './Schedule.styles';

const data = ["12/03", "13/03", "14/03", "15/03", "16/03", "17/03", "12/03", "13/03", "14/03", "15/03", "16/03", "17/03"]

const ScheduleScreen = (props) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0)

  return (
    <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
      <View style={styles.date_list_container}>
        <Text style={{color: 'white'}}>Escolha a data: </Text>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(_, index) => index}
          renderItem={({item, index}) => (
            <DateItem
              date={item}
              selected={selectedDateIndex === index}
              onPress={() => setSelectedDateIndex(index)}
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

const mapStateToProps = (state) => ({
  newAppointment: state.newAppointment
})
  
export default connect(mapStateToProps, null)(ScheduleScreen)