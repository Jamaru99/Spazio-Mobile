import React from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground,} from 'react-native';

import Styles from './Login.styles';

const Login = () => {
    return(
        <View>
    		  <ImageBackground source={require('../../img/Background.jpg')} style={Styles.background}>
						<View style={Styles.container}>

							<Text style={Styles.text}>Para acessar esta página, faça o login!</Text>
							
							<View style={Styles.container_inputs}>

								<TextInput style={Styles.input}
									placeholder= 'Digite seu email'
								/>

								<TextInput style={Styles.input}
									placeholder= 'Digite sua senha'
									secureTextEntry={true}
								/>
							</View>

							<View style={Styles.container_buttons}>
								{/* TODO fazer buttons funcionar */}
								<TouchableOpacity style={Styles.button}
									onPress= {() => alert('Faça o login!') }
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

export default Login;