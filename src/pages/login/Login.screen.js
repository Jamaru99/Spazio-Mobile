import React from 'react';
import {View, Text, TouchableOpacity, TextInput,} from 'react-native';

import Styles from './Login.styles';

const Login = () => {
    return(
        <View style={Styles.container}>
					<Text>Para acessar esta página, faça o login</Text>
					<TextInput style={Styles.input}
						placeholder= 'Digite seu email'
					/>

					<TextInput style={Styles.input}
						placeholder= 'Digite sua senha'
						SecureTextEntry={true}
					/>

					<View style={Styles.container_buttons}>
						{/* TODO fazer buttons funcionar */}
						<TouchableOpacity style={Styles.button}
							onPress= {() => alert('Faça o cadastro!') }
						>
							<Text style={Styles.button_text}>Cadastrar</Text>
						</TouchableOpacity>
						<TouchableOpacity style={Styles.button}
							onPress= {() => alert('Faça o login!') }
						>
							<Text style={Styles.button_text}>Login</Text>
						</TouchableOpacity>

						{/* TODO fazer um texto com link de esqueceu a senha */}
					</View>
        </View>
    )
}