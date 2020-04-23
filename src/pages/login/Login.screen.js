import React from 'react'
import {View, Text, TouchableOpacity, TextInput, ImageBackground,} from 'react-native'

import Styles from './Login.styles'
import {doLogin} from '../../service/customer.service'

const Login = () => {
		const [text, setText] = useState('')
    return(
        <View>
    		  <ImageBackground source={require('../../img/Background.jpg')} style={Styles.background}>
						<View style={Styles.container}>

							<Text style={Styles.text}>Para acessar esta página, faça o login!</Text>
							
							<View style={Styles.container_inputs}>

								<TextInput style={Styles.input}
									onChangeText={(text) => setLogin(text)}
									placeholder= 'Digite seu email'
								/>

								<TextInput style={Styles.input}
									onChangeText={(text) => setPassword(text)}
									placeholder= 'Digite sua senha'
									secureTextEntry={true}
								/>
							</View>

							{/* TODO criar condição para funcionar  */}
							<View style={Styles.container_buttons}>
								<TouchableOpacity style={Styles.button}
									onPress= {() => {
										// alert('Faça o login!') 
										doLogin()
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

// const setLogin = () => {

// }


export default Login;