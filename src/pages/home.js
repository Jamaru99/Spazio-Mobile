import React from 'react';
import {Text, View, Image, Button, TouchableOpacity, Alert, StyleSheet, } from 'react-native';
import Icon from 'react-native-ionicons';


const Home = () => {
  return (
    <View>
      <Text>Quero morrer</Text>
      <Image style={styles.logo} source={{uri:'../img/logo.png'}}></Image>
      <Text style={styles.consulta}> Para agendar, basta toca no icone 
        <Icon name={'calendar'}/> 
        e marca o serviço que deseja. 
        Ou então ligue no numero: (11) XXXXX-XXXX ou pelo what's app
      </Text>

      <Text>Ou clique aqui</Text>
      <Button style={styles.schedule} title="Agendar" onPress={() => Alert.alert('Agendou agora vai agendar!!')}></Button>
      <Button title="Agendar" onPress={() => alert('Agendou agora vai agendar!!')}></Button>

      <Icon ios="ios-add" android="md-add" />
      <View style={styles.about}>
        <Text>Sobre nós: </Text> 
        <Text style={styles.aboutText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum."</Text> 
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  //add style
  logo:{
    width: 50,
    height: 50
  },
  consulta:{
    textAlign: "center",
    justifyContent: "center"
  },
  about:{
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#f00",
  },
  aboutText:{
    justifyContent: "center",
    textAlign: "justify" ,
  },
  schedule:{
    width: 100,
    height: 50,
  },
})

export default Home;
