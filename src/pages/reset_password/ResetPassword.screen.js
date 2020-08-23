import React, { useState } from 'react';
import {
  Text,
  View, 
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import { TextField } from 'react-native-material-textfield'

import { TouchableFooter } from '@components';
import { texts, colors } from '@utils';

import styles from './ResetPassword.styles';

const ResetPasswordScreen = (props) => {
  const [email, setEmail] = useState('')

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        <View style={styles.main}>
          <ScrollView>
            <TextField style={styles.input}
                value={email}
                label='Email'
                labelFontSize={20}
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
          </ScrollView>
        </View>
      </ImageBackground>
    </View>

  );
};


export default ResetPasswordScreen;
