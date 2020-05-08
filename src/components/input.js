// https://react-native-elements.github.io/react-native-elements/docs/input.html
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-ionicons';

import { Input, View } from 'react-native-elements';

<Input
  placeholder='INPUT WITH ERROR MESSAGE'
  // leftIcon={{ type: 'font-awesome', name: 'comment' }}
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
      color={props.focused ? colors.primary : colors.accent}
    />
  }
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
  secureTextEntry={true}
></Input>

export const nameInput = () =>{
  return(
    <View>
      <Input
        placeholder='Insira seu nome'
        leftIcon={
          <Icon
            name='person'
            size={24}
            color={props.focused ? colors.primary : colors.accent}

          ></Icon>
        }
      
        errorStyle={{ color: 'red' }}
        errorMessage='ENTER A VALID ERROR HERE'
      ></Input>
    </View>
  )
}

export const emailInput = () =>{
  return(
    <View>
      <Input
        placeholder='Insira seu email'
        leftIcon={
          <Icon
            name='mail'
            size={24}
            color={props.focused ? colors.primary : colors.accent}

          ></Icon>
        }
      
        errorStyle={{ color: 'red' }}
        errorMessage='ENTER A VALID ERROR HERE'
      ></Input>
    </View>
  )
}

export const passwordInput = () =>{
  return(
    <View>
      <Input
        placeholder='Insira seu email'
        leftIcon={
          <Icon
            name='lock-closed'
            size={24}
            color={props.focused ? colors.primary : colors.accent}

          ></Icon>
        }

        errorStyle={{ color: 'red' }}
        errorMessage='ENTER A VALID ERROR HERE'
        secureTextEntry={true}
      ></Input>
    </View>
  )
}
