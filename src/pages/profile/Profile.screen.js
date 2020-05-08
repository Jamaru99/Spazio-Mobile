import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

import styles from './Profile.styles';

const Profile = () => {
    return (
      <View>
        <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
          {/* TODO criar uma view branca arredondada e transparente para colocar os outros campos */}
          {/* TODO input text email, data de nascimento, nome, sexo */}
          {/* TODO criar um text input com titulo (placeholder) */}
          <TextInput>


          </TextInput>
          {/* TODO botao logout */}
          <TouchableOpacity style={styles.button} >Logout</TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };
  
  export default Profile;