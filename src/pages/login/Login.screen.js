import React from 'react'
import {View, Text, TouchableOpacity, TextInput, ImageBackground,} from 'react-native'

import Styles from './Login.styles'
import {doLogin} from '../../service/customer.service'

const Login = () => {
		const [login, setLogin] = useState('')
		const [password, setPassword] = useState('')
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
									// keyboardType= 'email-address'
									// autoCapitalize= 'none'
									// autoCorrect= {false}
									// onSubmitEditing ={() => this.passwordInput.focus()}
								/>

								<TextInput style={Styles.input}
									onChangeText={(password) => setPassword(password)}
									placeholder= 'Digite sua senha'
									// placeholderTextColor= '#'
									returnKeyType= 'go'
									// secureTextEntry={true}
									secureTextEntry

									// ref={(input) => this.passwordInput = input}
								/>
							</View>

							{/* TODO criar condição para funcionar  */}
							<View style={Styles.container_buttons}>
								<TouchableOpacity style={Styles.button}
									onPress= {async() => {
										const userData = await doLogin(password, login)
										if (!userData.error){

										}
										else{

										}
									}}
								>
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

//arrumar map para login
const mapStateToProps = (state) => {
  return{
    nextAppointments: state.nextAppointments,
    isLogged: state.isLogged
  }
}


export default connect (mapStateToProps) (LoginScreen);

// export default Login;