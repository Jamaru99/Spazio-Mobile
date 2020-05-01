import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native'

import Styles from './Login.styles'
import { doLogin } from '@services'
import { doLoginDispatched } from '@state'

import { connect } from 'react-redux';


const LoginScreen = (props) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleOnLoginPress = async () => {
		const userData = await doLogin(password, login)
		//console.error(userData)
		if (!userData.error){
			props.doLoginDispatched(userData)
		} else{

		}
	}
	
    return(
        <View>
    		<ImageBackground source={require('../../img/Background.jpg')} style={Styles.background}>
				<View style={Styles.container}>
					<Text style={Styles.text}>Para acessar esta página, faça o login!</Text>
						
					<View style={Styles.container_inputs}>
						<TextInput style={Styles.input}
							onChangeText={(login) => setLogin(login)}
							placeholder= 'Digite seu email'
							// placeholderTextColor= '#'
							returnKeyType= 'next'
							keyboardType= 'email-address'
							autoCapitalize= 'none'
							autoCorrect= {false}
							// onSubmitEditing ={() => this.passwordInput.focus()}
						/>
						<TextInput style={Styles.input}
							onChangeText={(password) => setPassword(password)}
							placeholder= 'Digite sua senha'
							// placeholderTextColor= '#'
							returnKeyType= 'go'
							secureTextEntry
							// TODO campo email mandar para o de senha
							// ref={(input) => this.passwordInput = input}
						/>
					</View>
						{/* TODO criar condição para funcionar  */}
					<View style={Styles.container_buttons}>
						<TouchableOpacity style={Styles.button} onPress={handleOnLoginPress}>
							<Text style={Styles.button_text}>Login</Text>
						</TouchableOpacity>
						
						<TouchableOpacity style={Styles.button_cadastro}
							onPress= {() => alert('Faça o cadastro!') }
						>
							<Text style={Styles.button_text}>Cadastrar</Text>
						</TouchableOpacity>
							{/* TODO fazer um texto com link de esqueceu a senha */}
					</View>
				</View>
			</ImageBackground>
        </View>
    )
}

const mapStateToProps = (state) => {
  return{
    isLogged: state.isLogged
  }
}

const mapDispatchToProps = {
  doLoginDispatched,
}

export default connect (mapStateToProps, mapDispatchToProps	) (LoginScreen);