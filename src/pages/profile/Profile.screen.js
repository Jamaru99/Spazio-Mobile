import React, { useState } from 'react';
import { View, 
         Text, 
         TouchableOpacity,
         TextInput, 
         ImageBackground 
         } from 'react-native';
import { TextField,
         FilledTextField,
         OutlinedTextField
         } from 'react-native-material-textfield'
import { RadioButton } from 'react-native-paper'
import styles from './Profile.styles';

const PROP = [
	{
		key: 'masculino',
		text: 'Masculino',
	},
	{
		key: 'feminino',
		text: 'Feminino',
	},
	{
		key: 'outro',
		text: 'Outro',
	},
];


const Profile = () => {
  // TODO: receber os dados de user e as outras
  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [birthDate, setBirthDate] = useState('')
  
  const [gender, setGender] = useState('first')
  

  fieldRef = React.createRef();

  onSubmit = () => {
    let { current: field } = this.fieldRef;

    console.log(field.value());
  };

  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');}

  return (
    <View>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        {/* TODO input text login, name, password, birthDate, gender */}
        <View style={styles.container_inputs}>

          <FilledTextField
            onChangeText={(login) => setLogin(login)}
            label='Nome'
            // keyboardType= 'phone-pad'
            autoCapitalize= 'none'
            autoCorrect= {false}
            returnKeyType= 'next'

          />
          <Text style={ styles.text }> Nome: </Text>
          <TextInput style={styles.input}
          onChangeText={(name) => setName(name)}
          placeholder= 'Digite seu name'
          // placeholderTextColor= '#'
          returnKeyType= 'next'
          // keyboardType= 'email-address'
          // autoCapitalize= 'none'
          // autoCorrect= {false}
          // onSubmitEditing ={() => this.passwordInput.focus()}
          />
          <Text style={ styles.text }> Email: </Text>
          <TextInput style={styles.input}
            onChangeText={(login) => setLogin(login)}
            placeholder= 'Digite seu email'
            // placeholderTextColor= '#'
            returnKeyType= 'next'
            keyboardType= 'email-address'
            autoCapitalize= 'none'
            autoCorrect= {false}
            // onSubmitEditing ={() => this.passwordInput.focus()}
          />
          <Text style={ styles.text }> Senha: </Text>
          <TextInput style={styles.input}
            onChangeText={(password) => setPassword(password)}
            placeholder= 'Digite sua senha'
            // placeholderTextColor= '#'
            returnKeyType= 'go'
            secureTextEntry
            // TODO campo email mandar para o de senha
            // ref={(input) => this.passwordInput = input}
          />
				</View>

        <Text style={ styles.text }>Radio Button</Text>

        <RadioButton
          value="first"
          status={gender === 'first' ? 'checked' : 'unchecked'}
          onPress={(gender) =>{ setGender('first')}}
        />
        <RadioButton
          value="second"
          status={gender === 'second' ? 'checked' : 'unchecked'}
          onPress={(gender) =>{ setGender('second')}}
        />
        <RadioButton
          value="third"
          status={gender === 'third' ? 'checked' : 'unchecked'}
          onPress={(gender) =>{ setGender('third')}}
        />

        <Text style={ styles.text }>Datetime</Text>
        {/* TODO botao logout funcionar */}
        {/* TODO botao atualizar funcionar */}
        <TouchableOpacity style={styles.button} >
          <Text> Logout </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
  
  export default Profile;