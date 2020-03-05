import axios from 'axios';
import { Value } from 'react-native-reanimated';

let config = {
    headers: {
      header1: value,
    }
  }
  
  let data = {
    'HTTP_CONTENT_LANGUAGE': self.language
  }
  
  axios.post(URL, data, config).then(...)

const getNextAppointments = () => {}