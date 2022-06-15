import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Toast from 'react-native-tiny-toast';

import { InnerLoader } from '@components';
import { resetPassword, putProfile } from '@services';
import { texts, colors } from '@utils';

import styles from './ResetPassword.styles';

var randomCode = ''
var customerId = ''

const STEP_SEND_TOKEN = 0
const STEP_VERIFY_TOKEN = 1
const STEP_CHANGE_PASSWORD = 2

const ResetPasswordScreen = () => {
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(STEP_SEND_TOKEN)
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleOnSendTokenPress = async () => {
    setLoading(true)
    randomCode = generateRandomCode()
    const data = await resetPassword(email, randomCode)
    customerId = data._id
    setStep(STEP_VERIFY_TOKEN)
    setLoading(false)
  }

  const handleOnVerifyTokenPress = () => {
    if (token === randomCode) {
      setStep(STEP_CHANGE_PASSWORD)
    } else {
      Toast.show(texts["reset_password:toast_invalid_token"])
    }
  }

  const handleOnChangePasswordPress = async () => {
    setLoading(true)
    if (password === confirmPassword && password.length > 0) {
      const data = await putProfile(customerId, { password })
      if (data.error) {
        Toast.show(texts["error:connection"])
      } else {
        Toast.showSuccess(texts["reset_password:toast_password_changed"])
      }
    } else {
      Toast.show(texts["reset_password:toast_passwords_unmatch"])
    }
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        <ScrollView contentContainerStyle={styles.main}>
          {step === STEP_SEND_TOKEN &&
            <SendTokenSection
              loading={loading}
              handleOnSendTokenPress={handleOnSendTokenPress}
              setEmail={setEmail}
            />
          }
          {step === STEP_VERIFY_TOKEN &&
            <VerifyTokenSection
              handleOnVerifyTokenPress={handleOnVerifyTokenPress}
              setToken={setToken}
            />
          }
          {step === STEP_CHANGE_PASSWORD &&
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
    <Text style={styles.advise_text}>{texts["reset_password:send_token_advice"]}</Text>
    <TextField 
      style={styles.input}
      label={texts["email"]}
      labelFontSize={16}
      textColor={colors.accent}
      baseColor={colors.accent}
      tintColor={colors.accent}
      onChangeText={(text) => setEmail(text)}
      keyboardType='email-address'
      autoCapitalize='none'
      autoCorrect={false}
      errorColor={colors.primary}
    />
    <TouchableOpacity style={styles.button} onPress={handleOnSendTokenPress}>
      {
        loading
          ? <InnerLoader />
          : <Text style={styles.button_text}>{texts["reset_password:button_send_token"]}</Text>
      }
    </TouchableOpacity>
  </View>
)

const VerifyTokenSection = ({ handleOnVerifyTokenPress, setToken }) => (
  <View>
    <Text style={styles.advise_text}>{texts["reset_password:verify_token_advice"]}</Text>
    <TextField style={styles.input}
      label='Código'
      labelFontSize={16}
      textColor={colors.accent}
      baseColor={colors.accent}
      tintColor={colors.accent}
      onChangeText={(text) => setToken(text)}
      keyboardType='number-pad'
    />
    <TouchableOpacity style={styles.button} onPress={handleOnVerifyTokenPress}>
      <Text style={styles.button_text}>{texts["reset_password:button_verify_token"]}</Text>
    </TouchableOpacity>
  </View>
)

const ChangePasswordSection = ({ loading, handleOnChangePasswordPress, setPassword, setConfirmPassword }) => (
  <View>
    <View>
      <Text style={styles.advise_text}>{texts["reset_password:change_password_advice"]}</Text>
      <TextField style={styles.input}
        label={texts["password"]}
        labelFontSize={16}
        textColor={colors.accent}
        baseColor={colors.accent}
        tintColor={colors.accent}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize='none'
        secureTextEntry
      />
      <TextField style={styles.input}
        label={texts["confirm_password"]}
        labelFontSize={16}
        textColor={colors.accent}
        baseColor={colors.accent}
        tintColor={colors.accent}
        onChangeText={(text) => setConfirmPassword(text)}
        autoCapitalize='none'
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleOnChangePasswordPress}>
        {
          loading
            ? <InnerLoader />
            : <Text style={styles.button_text}>{texts["reset_password:change_password_button"]}</Text>
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

export default ResetPasswordScreen;
