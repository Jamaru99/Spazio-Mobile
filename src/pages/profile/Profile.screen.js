import React, { useState } from 'react';
import { View, 
         Text, 
         TouchableOpacity,
         ImageBackground,
         ScrollView, 
       } from 'react-native';
import { TextField } from 'react-native-material-textfield'
import { RadioButton } from 'react-native-paper'

import { colors } from '@utils';
import styles from './Profile.styles';
import { color } from 'react-native-reanimated';

const Profile = () => {
  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [birthDate, setBirthDate] = useState('')
  
  const [gender, setGender] = useState('first')

  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');}

  return (
    <View>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
				<ScrollView>

          <View style={styles.container}>
            <View style={styles.container_inputs}>
              {/* <Text style={ styles.text }> Nome: </Text> */}
              <TextField style={styles.input}
                label='Nome'
                labelFontSize= {20}
                textColor= {colors.primary}
                baseColor= {colors.accent}
                tintColor= {colors.primary}
                onChangeText={(name) => setName(name)}
                returnKeyType= 'next'
                // autoCapitalize= 'none'
                // autoCorrect= {false}
                error= 'Erro'
                errorColor= {colors.primary}
              />

              <TextField style={styles.input}
                label='Email'
                labelFontSize= {20}
                textColor= {colors.primary}
                baseColor= {colors.accent}
                tintColor= {colors.primary}
                onChangeText={(login) => setLogin(login)}
                returnKeyType= 'next'
                keyboardType= 'email-address'
                autoCapitalize= 'none'
                autoCorrect= {false}
                // onSubmitEditing ={() => this.passwordInput.focus()}
                error= 'Erro'
                errorColor= {colors.primary}
              />

              <TextField style={styles.input}
                label='Senha'
                labelFontSize= {20}
                textColor= {colors.primary}
                baseColor= {colors.accent}
                tintColor= {colors.primary}
                onChangeText={(password) => setPassword(password)}
                returnKeyType= 'go'
                secureTextEntry
                error= 'Erro'
                errorColor= {colors.primary}
              />

              <TextField style={styles.input}
                label='Data de Nascimento'
                labelFontSize= {20}
                textColor= {colors.primary}
                baseColor= {colors.accent}
                tintColor= {colors.primary}
                onChangeText={(password) => setPassword(password)}
                returnKeyType= 'go'
                secureTextEntry
                error= 'Erro'
                errorColor= {colors.primary}
              />
              
            </View>

            <Text style={ styles.text }>Radio Button</Text>

            <RadioButton
              value="first"
              status={gender === 'first' ? 'checked' : 'unchecked'}
              onPress={(gender) =>{ setGender('first')}}
            />
            <RadioButton
              value="second"
              status={gender === 'second' ? 'checked' : 'unchecked'}
              onPress={(gender) =>{ setGender('second')}}
            />
            <RadioButton
              value="third"
              status={gender === 'third' ? 'checked' : 'unchecked'}
              onPress={(gender) =>{ setGender('third')}}
            />

            {/* TODO botao atualizar e logout funcionar */}
            <TouchableOpacity style={styles.button} >
              <Text> Atualizar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
              <Text> Logout </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}
  
  export default Profile;