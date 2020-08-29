import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield'
import Toast from 'react-native-tiny-toast'

import { TouchableFooter, InnerLoader } from '@components';
import { resetPassword, putProfile } from '@services';
import { texts, colors } from '@utils';

import styles from './ResetPassword.styles';

var randomCode = 0

const ResetPasswordScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleOnSendTokenPress = async () => {
    setLoading(true)
    randomCode = generateRandomCode()
    await resetPassword(email, randomCode)
    setStep(1)
    setLoading(false)
  }

  const handleOnVerifyTokenPress = () => {
    if (token === randomCode) {
      setStep(2)
    } else {
      Toast.show('Código inválido')
    }
  }

  handleOnChangePasswordPress = async () => {
    setLoading(true)
    if(password === confirmPassword) {
      const data = await putProfile(props.customerData._id, { password })
      if(data.error) {
        Toast.show('Erro inesperado')
      } else {
        Toast.showSuccess('Senha alterada!')
      }
    } else {
      Toast.show('Não coincide')
    }
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        <ScrollView contentContainerStyle={styles.main}>
          {step === 0 &&
            <SendTokenSection
              loading={loading}
              handleOnSendTokenPress={handleOnSendTokenPress}
              setEmail={setEmail} />
          }
          {step === 1 &&
            <VerifyTokenSection
              handleOnVerifyTokenPress={handleOnVerifyTokenPress}
              setToken={setToken} />
          }
          {step === 2 &&
            <ChangePasswordSection
              loading={loading}
              handleOnChangePasswordPress={handleOnChangePasswordPress}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
            />
          }
        </ScrollView>
      </ImageBackground>
      
    </View>
  );
};

const SendTokenSection = ({ loading, handleOnSendTokenPress, setEmail }) => (
  <View>
    <Text style={styles.advise_text}>Enviaremos um código para seu email, para que consiga alterar sua senha</Text>
    <TextField style={styles.input}
      label='Email'
      labelFontSize={16}
      textColor={colors.accent}
      baseColor={colors.accent}
      tintColor={colors.accent}
      onChangeText={(text) => setEmail(text)}
      returnKeyType='next'
      keyboardType='email-address'
      autoCapitalize='none'
      autoCorrect={false}
      errorColor={colors.primary}
    />
    <TouchableOpacity style={styles.button} onPress={handleOnSendTokenPress}>
      {
        loading
          ? <InnerLoader />
          : <Text style={styles.button_text}>Enviar código</Text>
      }
    </TouchableOpacity>
  </View>
)

const VerifyTokenSection = ({ handleOnVerifyTokenPress, setToken }) => (
  <View>
    <Text style={styles.advise_text}>Digite o código enviado para seu email</Text>
    <TextField style={styles.input}
      label='Código'
      labelFontSize={16}
      textColor={colors.accent}
      baseColor={colors.accent}
      tintColor={colors.accent}
      onChangeText={(text) => setToken(text)}
      returnKeyType='next'
      keyboardType='number'
    />
    <TouchableOpacity style={styles.button} onPress={handleOnVerifyTokenPress}>
      <Text style={styles.button_text}>Conferir</Text>
    </TouchableOpacity>
  </View>
)

const ChangePasswordSection = ({ loading, handleOnChangePasswordPress, setPassword, setConfirmPassword }) => (
  <View>
    <View>
    <Text style={styles.advise_text}>Digite o código enviado para seu email</Text>
    <TextField style={styles.input}
      label='Senha'
      labelFontSize={16}
      textColor={colors.accent}
      baseColor={colors.accent}
      tintColor={colors.accent}
      onChangeText={(text) => setPassword(text)}
      returnKeyType='next'
      secureTextEntry
    />
    <TextField style={styles.input}
      label='Confirmar senha'
      labelFontSize={16}
      textColor={colors.accent}
      baseColor={colors.accent}
      tintColor={colors.accent}
      onChangeText={(text) => setConfirmPassword(text)}
      returnKeyType='next'
      secureTextEntry
    />
    <TouchableOpacity style={styles.button} onPress={handleOnChangePasswordPress}>
      {
        loading
          ? <InnerLoader />
          : <Text style={styles.button_text}>Alterar senha</Text>
      }
    </TouchableOpacity>
  </View>
  </View>
)

function generateRandomCode() {
  var randomCode = "";
  for (let i = 0; i < 4; i++) {
    randomCode += Math.floor(Math.random() * 10)
  }
  return randomCode;
}

const mapStateToProps = (state) => ({
  customerData: state.customerData
})

export default connect(mapStateToProps, null)(ResetPasswordScreen);
