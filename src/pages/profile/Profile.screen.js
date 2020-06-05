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

const Profile = () => {
  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [birthDate, setBirthDate] = useState('banana')
  
  const [gender, setGender] = useState('')

  const handleChangeText = (e) => {
   setBirthDate('seila')
  }
  return (
    <View>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
				<ScrollView>

          <View style={styles.container}>
            <View style={styles.container_inputs}>
              <TextField style={styles.input}
                label='Nome'
                labelFontSize= {20}
                textColor= {colors.primary}
                baseColor= {colors.accent}
                tintColor= {colors.primary}
                onChangeText={(name) => setName(name)}
                returnKeyType= 'next'
                // error= 'Erro'
                // errorColor= {colors.primary}
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
                // error= 'Erro'
                // errorColor= {colors.primary}
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
                // error= 'Erro'
                // errorColor= {colors.primary}
              />

              {/* TODO arrumar mask do txtfield */}
              <Text style={ styles.text }>{birthDate}</Text>
              <TextField style={styles.input}
                value= {birthDate}
                label='Data de Nascimento'
                labelFontSize= {20}
                keyboardType='phone-pad'
                textColor= {colors.primary}
                baseColor= {colors.accent}
                tintColor= {colors.primary}
                // onChangeText={(birthDate) => setBirthDate(birthDate)}
                onChangeText= { handleChangeText }
                setValue={birthDate}
                // formatText={birthDate}
                returnKeyType= 'go'
                // error= ''
                // errorColor= {colors.primary}
              />
              
            </View>

            <Text style={ styles.text }>Gênero</Text>

            <View style={ styles.container_radios }>
              <View style={ styles.content_radio }>
                <RadioButton
                  value="male"
                  status={gender === 'male' ? 'checked' : 'unchecked'}
                  onPress={(gender) =>{ setGender('male')}}
                  color={colors.primary}
                  uncheckedColor={colors.accent}
                />
                <Text style={ styles.radio_text }>Masculino</Text>
              </View>
              <View style={ styles.content_radio }>
                <RadioButton
                  value="female"
                  status={gender === 'female' ? 'checked' : 'unchecked'}
                  onPress={(gender) =>{ setGender('female')}}
                  color={colors.primary}
                  uncheckedColor={colors.accent}
                >
                </RadioButton>
                <Text style={ styles.radio_text }>Feminino</Text>
              </View>
              <View style={ styles.content_radio }>
                <RadioButton
                  value="other"
                  status={gender === 'other' ? 'checked' : 'unchecked'}
                  onPress={(gender) =>{ setGender('other')}}
                  color={colors.primary}
                  uncheckedColor={colors.accent}
                />
                <Text style={ styles.radio_text }>Outro</Text>
              </View>
            </View>
            
            
            

            {/* TODO botao salvar e logout funcionar */}
            <TouchableOpacity style={styles.button} >
              <Text> Salvar </Text>
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

// formatedText = (text) => {
//     // return text.replace(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)
// }


export default Profile;