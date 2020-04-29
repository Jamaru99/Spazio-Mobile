import axios from 'axios';

let config = {
    headers: {
      access: 'aqueleMarioSenpai',
    }
  }

export const getNextAppointments = async(id) => {
  const { data } = await axios.get(`https://spazio.mybluemix.net/appointment/list?customer=${id}`, config )
  return data
}