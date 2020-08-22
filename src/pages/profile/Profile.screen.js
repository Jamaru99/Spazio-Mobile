import React, { useState } from 'react';
import { View, 
         Text, 
         TouchableOpacity,
         ImageBackground,
         ScrollView, 
       } from 'react-native';
import { InnerLoader } from '@components';
import { setUserDataDispatched } from '@state';
import { setUserDataInStorage } from '@services';
import { putProfile } from '@services';
import { colors, formattedDatetime, isoDate } from '@utils';
import { TextField } from 'react-native-material-textfield'
import { RadioButton } from 'react-native-paper'
import { connect } from 'react-redux';
import Toast from 'react-native-tiny-toast'
import styles from './Profile.styles';


const Profile = ( props ) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(props.userData.name)
  const [login, setLogin] = useState(props.userData.login)
	const [password, setPassword] = useState(props.userData.password)
  const [birthDate, setBirthDate] = useState(formattedDatetime(props.userData.birthDate)[0])
  const [gender, setGender] = useState(props.userData.gender)
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
	const [errorPassword, setErrorPassword] = useState('')
  const [errorBirthDate, setErrorBirthDate] = useState('')

  const handleSaveUserData = async () => {
    const userDataChange ={
      name: name,
      // login: login,
      // password: password,
      birthDate: isoDate(birthDate),
      gender: gender
    }
    setLoading(true)
    // alert(userDataChange)
    // alert(userDataChange.name)
    const userData = await putProfile(props.userData._id, userDataChange)
    if (!userData.error){
      props.setUserDataDispatched(userData)
      await setUserDataInStorage(userData)
      Toast.showSuccess('Dados alterado com sucesso')
    }else{
      Toast.show('Não foi possível alterar os dados')
    }
    setLoading(false)
  }

  const formatBirthDate = (text) => {
    const textLength = text.length
    if((textLength === 2 || textLength === 5) && textLength > birthDate.length) 
      return text + '/'
    else 
      return text
  }

  return (
    <View>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
				<ScrollView>
          <View style={styles.container}>
            <Text style={colors.primary}>{props.userData.password}</Text>
            <View style={styles.container_inputs}>
              <TextField style={styles.input}
                value= {name}
                label='Nome'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={(name) => setName(name)}
                returnKeyType= 'next'
                error= {errorName}
                errorColor= {colors.primary}
              />

              {/* TODO: não pode alterar o email */}
              <TextField style={styles.input}
                value= {login}
                label='Email'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={(login) => setLogin(login)}
                returnKeyType= 'next'
                keyboardType= 'email-address'
                autoCapitalize= 'none'
                autoCorrect= {false}
                error= {errorEmail}
                errorColor= {colors.primary}
              />

              <TextField style={styles.input}
                value= {password}
                label='Senha'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={(password) => setPassword(password)}
                returnKeyType= 'next'
                secureTextEntry
                error= {errorPassword}
                errorColor= {colors.primary}
              />

              {/* TODO arrumar mask do txtfield */}
              <TextField style={styles.input}
                value= {birthDate}
                label='Data de Nascimento'
                labelFontSize= {20}
                maxLength={10}
                keyboardType='phone-pad'
                formatText={formatBirthDate}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={(text) => setBirthDate(text)}
                returnKeyType= 'go'
                error= {errorBirthDate}
                errorColor= {colors.primary}
              />
              
            </View>

            <Text style={ styles.text }>Gênero</Text>

            <View style={ styles.container_radios }>
              <TouchableOpacity style={styles.button_radio} 
                    onPress={(gender) =>{ setGender('m')}}
              >
                <View style={ styles.content_radio }>
                  <RadioButton 
                    value="m"
                    status={gender === 'm' ? 'checked' : 'unchecked'}
                    onPress={(gender) =>{ setGender('m')}}
                    color={colors.primary}
                    uncheckedColor={colors.accent}
                  />
                  <Text style={ styles.radio_text }>Masculino</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button_radio} 
                    onPress={(gender) =>{ setGender('f')}}
              >
                <View style={ styles.content_radio }>
                  <RadioButton
                    value="f"
                    status={gender === 'f' ? 'checked' : 'unchecked'}
                    color={colors.primary}
                    uncheckedColor={colors.accent}
                  />
                  <Text style={ styles.radio_text }>Feminino</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_radio} 
                    onPress={(gender) =>{ setGender('o')}}
              >
                <View style={ styles.content_radio }>
                  <RadioButton
                    value="o"
                    status={gender === 'o' ? 'checked' : 'unchecked'}
                    color={colors.primary}
                    uncheckedColor={colors.accent}
                  />
                  <Text style={ styles.radio_text }>Outro</Text>
                </View>
              </TouchableOpacity>
                
              
            </View>
            
            {/* TODO botao salvar e logout funcionar */}
            <TouchableOpacity style={styles.button} onPress={handleSaveUserData}>
								{
									loading 
									? <InnerLoader />
									: <Text style={styles.button_text}>Salvar</Text>
								}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.button_text}> Logout </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
    userData: state.userData
  }
}

const mapDispatchToProps = {
  setUserDataDispatched,
}

export default connect (mapStateToProps, mapDispatchToProps	) (Profile);