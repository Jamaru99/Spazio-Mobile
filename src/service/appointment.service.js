import axios from 'axios';

let config = {
    headers: {
      access: 'aqueleMarioSenpai',
    }
  }
  
  // let data = {
  //   'HTTP_CONTENT_LANGUAGE': self.language
  // }
  
  // axios.post(URL, data, config).then(...)

export const getNextAppointments = async(id) => {
  const { data } = await axios.get(`https://spazio.mybluemix.net/appointment/list?customer=${id}`, config )
  return data
}