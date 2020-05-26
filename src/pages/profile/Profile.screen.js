import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import RadioButton from '../../components/radioButton';

import styles from './Profile.styles';

const PROP = [
	{
		key: 'samsung',
		text: 'Samsung',
	},
	{
		key: 'apple',
		text: 'Apple',
	},
	{
		key: 'motorola',
		text: 'Motorola',
	},
	{
		key: 'lenovo',
		text: 'Lenovo',
  },
];

const Profile = () => {
  // TODO: receber os dados de user e as outras
  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

  return (
    <View>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        {/* TODO input text login, name, password, birthDate, gender */}
        <View style={styles.container_inputs}>
          <Text style={ styles.text }> Nome: </Text>
          <TextInput style={styles.input}
          onChangeText={(name) => setName(name)}
          placeholder= 'Digite seu name'
          // placeholderTextColor= '#'
          returnKeyType= 'next'
          // keyboardType= 'email-address'
          // autoCapitalize= 'none'
          // autoCorrect= {false}
          // onSubmitEditing ={() => this.passwordInput.focus()}
          />
          <Text style={ styles.text }> Email: </Text>
          <TextInput style={styles.input}
            onChangeText={(login) => setLogin(login)}
            placeholder= 'Digite seu email'
            // placeholderTextColor= '#'
            returnKeyType= 'next'
            keyboardType= 'email-address'
            autoCapitalize= 'none'
            autoCorrect= {false}
            // onSubmitEditing ={() => this.passwordInput.focus()}
          />
          <Text style={ styles.text }> Senha: </Text>
          <TextInput style={styles.input}
            onChangeText={(password) => setPassword(password)}
            placeholder= 'Digite sua senha'
            // placeholderTextColor= '#'
            returnKeyType= 'go'
            secureTextEntry
            // TODO campo email mandar para o de senha
            // ref={(input) => this.passwordInput = input}
          />
				</View>
        {/* TODO input text com a mascara de data */}

        <View style={styles.container}>
        <RadioButton PROP={PROP} />
        </View>
        {/* TODO botao logout funcionar */}
        <TouchableOpacity style={styles.button} >
          <Text> Logout </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
  
  export default Profile;