import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-ionicons';


const Home = () => {
  return (
    <View>
      <Text>Quero morrer</Text>
      <Icon name="home-outline" />
      <Text>Quero morrer</Text>

      <Icon ios="ios-add" android="md-add" />
    </View>
  );
};

export default Home;
