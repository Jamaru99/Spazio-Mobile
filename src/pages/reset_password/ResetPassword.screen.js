import React from 'react';
import {
  Text, 
  View, 
  Image,  
  TouchableOpacity,
  Linking, 
  ScrollView,
  ImageBackground
} from 'react-native';

import { TouchableFooter } from '@components';
import { dialCall, texts } from '@utils';

import styles from './ResetPassword.styles';

const ResetPasswordScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={styles.background}>
        <View style={styles.main}>
          <ScrollView>
            <Text>coco</Text>

          </ScrollView>
        </View>
      </ImageBackground>
    </View>

  );
};


export default ResetPasswordScreen;
