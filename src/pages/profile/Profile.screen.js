import React, { useState } from 'react';
import { View, 
         Text, 
         TouchableOpacity,
         ImageBackground,
         ScrollView,
         Modal,
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
  const [form, setForm] = useState({...props.userData, birthDate: formattedDatetime(props.userData.birthDate)[0]})
  const [loading, setLoading] = useState(false)
  const [gender, setGender] = useState(props.userData.gender)
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
	const [errorPassword, setErrorPassword] = useState('')
  const [errorBirthDate, setErrorBirthDate] = useState('')
  const [modalPasswordVisibility, setModalPasswordVisibility] = useState(false)

  const onChange = field => text => {
    setForm({...form, [field]: text})
  }

  const handleSaveUserData = async () => {
    var userDataChange
    if(form.password != props.userData.password){
      userDataChange = {
        password: form.password
      }
    }
    else if(form.login == props.userData.login){
      userDataChange = {
        name: form.name,
        birthDate: isoDate(form.birthDate),
        gender: form.gender
      }
    }
    else{
      userDataChange = {
        name: form.name,
        login: form.login,
        birthDate: isoDate(form.birthDate),
        gender: form.gender
      }
    }
    SaveUserData(userDataChange)
  }

  const SaveUserData = async (userDataChange) => {
    setLoading(true)
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
    if((textLength === 2 || textLength === 5) && textLength > form.birthDate.length) 
      return text + '/'
    else
      return text
  }

  return (
    <View>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
				<ScrollView>
          <View style={styles.container}>
          <ModalPassword 
            visibility={modalPasswordVisibility}
            setVisibility={setModalPasswordVisibility}
            password={form.password}
          />
            <Text style={styles.text}>{props.userData.name}</Text>
            <Text style={styles.text}>{form.name}</Text>
            <View style={styles.container_inputs}>
              <TextField style={styles.input}
                value= {form.name}
                label='Nome'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={onChange("name")}
                returnKeyType= 'next'
                error= {errorName}
                errorColor= {colors.primary}
              />

              <TextField style={styles.input}
                value= {form.login}
                label='Email'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={onChange("login")}
                returnKeyType= 'next'
                keyboardType= 'email-address'
                autoCapitalize= 'none'
                autoCorrect= {false}
                error= {errorEmail}
                errorColor= {colors.primary}
              />

              <TextField style={styles.input}
                value= {form.password}
                label='Senha'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                editable= {false}
                returnKeyType= 'next'
                secureTextEntry
                error= {errorPassword}
                errorColor= {colors.primary}
              />

              <TextField style={styles.input}
                value= {form.birthDate}
                label='Data de Nascimento'
                labelFontSize= {20}
                maxLength={10}
                keyboardType='phone-pad'
                formatText={formatBirthDate}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={onChange("birthDate")}
                returnKeyType= 'go'
                error= {errorBirthDate}
                errorColor= {colors.primary}
              />
              
            </View>

            <Text style={ styles.text }>Gênero</Text>

            <View style={ styles.container_radios }>
              <TouchableOpacity style={styles.button_radio} 
                    onPress={onChange("gender")}
                    // onPress={(gender) =>{ setGender('m')}}
              >
                <View style={ styles.content_radio }>
                  <RadioButton 
                    value="m"
                    status={form.gender === 'm' ? 'checked' : 'unchecked'}
                    onPress={onChange("gender")}
                    // onPress={(gender) =>{ setGender('m')}}
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
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setModalPasswordVisibility(!modalPasswordVisibility)
                }}
              >
              <Text style={styles.button_text}> Alterar Senha </Text>
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

  const ModalPassword = (props) => {
    // const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
  	const [confirmedNewPassword, setConfirmedNewPassword] = useState('')
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visibility}
        onRequestClose={() => {
          props.setVisibility(!props.visibility);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}>Hello World!</Text>
            <Text style={styles.text}>{props.password}</Text>
            <View style={styles.container_inputs}>
              <TextField style={styles.inputModal}
                value= {''}
                label='Senha'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={(password) => setPassword(password)}
                returnKeyType= 'next'
                secureTextEntry
                // error= {errorPassword}
                // errorColor= {colors.primary}
              />
              {/* TODO arrumar o repita a senha */}
              <TextField style={styles.inputModal}
                value= {newPassword}
                label='Nova senha'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={(newPassword) => setNewPassword(newPassword)}
                returnKeyType= 'next'
                secureTextEntry
                // error= {errorPassword}
                // errorColor= {colors.primary}
              />
              {/* TODO arrumar o confirma repita a senha */}
              <TextField style={styles.inputModal}
                value= {confirmedNewPassword}
                label='Confirme a nova senha'
                labelFontSize= {20}
                textColor= {colors.accent}
                baseColor= {colors.accent}
                tintColor= {colors.accent}
                onChangeText={(confirmedNewPassword) => setConfirmedNewPassword(confirmedNewPassword)}
                returnKeyType= 'next'
                secureTextEntry
                // error= {errorPassword}
                // errorColor= {colors.primary}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.setVisibility(!props.visibility);
              }}
            >
              <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>

            {/* TODO: verificar se senha é igual ao props.form.password */}
            <TouchableOpacity
              style={styles.button_new_password}
              onPress={() => {
                props.setVisibility(!props.visibility);
              }}
            >
              <Text style={styles.text_new_password}>Redefinir Senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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