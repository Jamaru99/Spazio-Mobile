import React, { useState } from 'react';
import { View, 
         Text, 
         TouchableOpacity,
         ImageBackground,
         ScrollView, 
       } from 'react-native';
import { TextField } from 'react-native-material-textfield'
import { RadioButton } from 'react-native-paper'
import { setUserDataDispatched } from '@state';
import { connect } from 'react-redux';
import { InnerLoader } from '@components';

// import Toast, {DURATION} from 'react-native-easy-toast'
import Toast from 'react-native-tiny-toast'
import { colors } from '@utils';
import styles from './Profile.styles';

const Profile = ( props ) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(props.userData.name)
  const [login, setLogin] = useState(props.userData.login)
	const [password, setPassword] = useState(props.userData.password)
  const [birthDate, setBirthDate] = useState(props.userData.birthDate)
  const [gender, setGender] = useState(props.userData.gender)
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
	const [errorPassword, setErrorPassword] = useState('')
  const [errorBirthDate, setErrorBirthDate] = useState('')

  const handleSaveUserData = async () => {
    const userDataChange ={
      name: name,
      login: login,
      password: password,
      birthDate: birthDate,
      gender: gender
    }
    setLoading(true)
    const userData = await putProfile(props.userId, userDataChange)
    if (!userData.error){
      props.setUserDataDispatched(userData)
      await setUserDataInStorage(userData)
      Toast.show('Dados alterado com sucesso')
    }else{
      Toast.show('Não foi possível alterar os dados',DURATION.LENGTH_LONG)
      // setUpdateMessage('Não foi possível alterar os dados')
    }
    setLoading(false)
  }
  return (
    <View>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
				<ScrollView>
          <View style={styles.container}>
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
                returnKeyType= 'go'
                secureTextEntry
                error= {errorPassword}
                errorColor= {colors.primary}
              />

              {/* TODO arrumar mask do txtfield */}
              <TextField style={styles.input}
                value= {birthDate}
                label='Data de Nascimento'
                labelFontSize= {20}
                keyboardType='phone-pad'
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={(birthDate) => setBirthDate(birthDate)}
                setValue={birthDate}
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