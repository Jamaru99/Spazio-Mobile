import axios from 'axios'


export const doLogin = async(password, login) => {
  const {data} = await axios.post(`https://spazio.mybluemix.net/login`, {password, login})
  return data
}