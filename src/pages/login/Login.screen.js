import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { doLogin, setUserDataInStorage } from '@services';
import { setUserDataDispatched } from '@state';
import { InnerLoader } from '@components';
import { REGISTER_SCREEN, RESET_PASSWORD_SCREEN } from '@navigation';

import styles from './Login.styles'

const handleOnLoginPress = async () => {
	setLoading(true)
	const userData = await doLogin(password, login)
	if (!userData.error){
		props.setUserDataDispatched(userData)
		await setUserDataInStorage(userData)
		setErrorLogin('')
	}else{
		setErrorLogin('Email ou senha inválidos')
	}
	setLoading(false)
}

const LoginScreen = (props) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [errorLogin, setErrorLogin] = useState('')

	const handleOnLoginPress = async () => {
		setLoading(true)
		const userData = await doLogin(password, login)
		if (!userData.error){
			props.setUserDataDispatched(userData)
			await setUserDataInStorage(userData)
			setErrorLogin('')
		}else{
			setErrorLogin('Email ou senha inválidos')
		}
		setLoading(false)
	}
	
    return(
    		<ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
					<View style={styles.container}>
						<Text style={styles.text}>Para acessar esta página, faça o login!</Text>
							
						<View style={styles.container_inputs}>
							<TextInput style={styles.input}
								onChangeText={(login) => setLogin(login)}
								placeholder= 'Digite seu email'
								returnKeyType= 'next'
								keyboardType= 'email-address'
								autoCapitalize= 'none'
								autoCorrect= {false}
							/>
							<TextInput style={styles.input}
								onChangeText={(password) => setPassword(password)}
								placeholder= 'Digite sua senha'
								returnKeyType= 'go'
								secureTextEntry
								// TODO campo email mandar para o de senha
							/>
						</View>
							{/* TODO criar condição para funcionar  */}

						<Text style={styles.text_error}>{errorLogin}</Text>

					<View style={styles.container_buttons}>
						<TouchableOpacity style={styles.button} onPress={handleOnLoginPress}>
							{
								loading 
								? <InnerLoader />
								: <Text style={styles.button_text}>Login</Text>
							}
						</TouchableOpacity>
						
						<TouchableOpacity style={styles.button_register} onPress= {() => props.navigation.navigate(REGISTER_SCREEN) }>
							<Text style={styles.button_text}>Cadastrar</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button_forgot_password} onPress= {() => props.navigation.navigate(RESET_PASSWORD_SCREEN) }>
							<Text style={styles.forgot_password_link}>Esqueci a senha</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
    )
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged
  }
}

const mapDispatchToProps = {
  setUserDataDispatched,
}

export default connect (mapStateToProps, mapDispatchToProps	) (LoginScreen);