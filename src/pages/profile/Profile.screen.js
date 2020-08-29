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
  const [modalPasswordVisibility, setModalPasswordVisibility] = useState(false)
	const [newPassword, setNewPassword] = useState('')
	const [confirmedNewPassword, setConfirmedNewPassword] = useState('')
  // const [userDataChange, setUserDataChange] = useState({})

  // const [newPassword, setNewPassword] = useState({
  //   name: props.userData.name,
  //   gender: props.userData.gender
  // })


  const handleSaveUserData = async () => {
    var userDataChange
    if(password == props.userData.password){
      userDataChange = {
        password: password
      }
    }
    else if(login == props.userData.login){
      userDataChange = {
        name: name,
        birthDate: isoDate(birthDate),
        gender: gender
      }
    }
    else{
      userDataChange = {
        name: name,
        login: login,
        birthDate: isoDate(birthDate),
        gender: gender
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
    if((textLength === 2 || textLength === 5) && textLength > birthDate.length) 
      return text + '/'
    else
      return text
  }
  // TODO tirar modal do profile
// const ModalPassword = () => {
//   return (
//     <Modal
//               animationType="slide"
//               transparent={true}
//               visible={modalPasswordVisibility}
//               onRequestClose={() => {
//                   setModalPasswordVisibility(!modalPasswordVisibility);
//               }}
//             ><View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.text}>Hello World!</Text>
//             <View style={styles.container_inputs}>
//               {/* TODO arrumar o repita a senha */}
//               <TextField style={styles.inputModal}
//                 value= {password}
//                 label='Senha'
//                 labelFontSize= {20}
//                 textColor= {colors.accent}
//                 baseColor= {colors.accent}
//                 tintColor= {colors.accent}
//                 onChangeText={(password) => setPassword(password)}
//                 returnKeyType= 'next'
//                 secureTextEntry
//                 // error= {errorPassword}
//                 // errorColor= {colors.primary}
//               />
//               {/* TODO arrumar o repita a senha */}
//               <TextField style={styles.inputModal}
//                 value= {newPassword}
//                 label='Nova senha'
//                 labelFontSize= {20}
//                 textColor= {colors.accent}
//                 baseColor= {colors.accent}
//                 tintColor= {colors.accent}
//                 onChangeText={(newPassword) => setNewPassword(newPassword)}
//                 returnKeyType= 'next'
//                 secureTextEntry
//                 // error= {errorPassword}
//                 // errorColor= {colors.primary}
//               />
//               {/* TODO arrumar o repita a senha */}
//               <TextField style={styles.inputModal}
//                 value= {confirmedNewPassword}
//                 label='Confirme a nova senha'
//                 labelFontSize= {20}
//                 textColor= {colors.accent}
//                 baseColor= {colors.accent}
//                 tintColor= {colors.accent}
//                 onChangeText={(confirmedNewPassword) => setConfirmedNewPassword(confirmedNewPassword)}
//                 returnKeyType= 'next'
//                 secureTextEntry
//                 error= {errorPassword}
//                 errorColor= {colors.primary}
//               />
//             </View>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => {
//                   setModalPasswordVisibility(!modalPasswordVisibility);
//                 }}
//               >
//                 <Text style={styles.text}>Cancelar</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.button_new_password}
//                 onPress={() => {
//                   setModalPasswordVisibility(!modalPasswordVisibility);
//                 }}
//               >
//                 <Text style={styles.text_new_password}>Redefinir Senha</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//   )
// }

  return (
    <View>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
				<ScrollView>
          <View style={styles.container}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalPasswordVisibility}
              onRequestClose={() => {
                  setModalPasswordVisibility(!modalPasswordVisibility);
              }}
            ><View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.text}>Hello World!</Text>
            <View style={styles.container_inputs}>
              {/* TODO arrumar o repita a senha */}
              <TextField style={styles.inputModal}
                value= {password}
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
              {/* TODO arrumar o repita a senha */}
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
                error= {errorPassword}
                errorColor= {colors.primary}
              />
            </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setModalPasswordVisibility(!modalPasswordVisibility);
                }}
              >
                <Text style={styles.text}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button_new_password}
                onPress={() => {
                  setModalPasswordVisibility(!modalPasswordVisibility);
                }}
              >
                <Text style={styles.text_new_password}>Redefinir Senha</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
            <Text style={styles.text}>{props.userData.name}</Text>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{props.userData.login}</Text>
            <Text style={styles.text}>{login}</Text>
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

function ModalChangePassword({ modalVisible, setModalVisible }) {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextField label='Senha atual *' secureTextEntry />
          <TextField label='Nova senha *' secureTextEntry />
          <TextField label='Confirmar nova senha *' secureTextEntry />
          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Change Password</Text>
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