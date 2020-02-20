import { Linking } from 'react-native'
const dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${11996471809}';
    }
    else {
      phoneNumber = 'telprompt:${11996471809}';
    }
 
    Linking.openURL(phoneNumber);
  };

  export default dialCall;