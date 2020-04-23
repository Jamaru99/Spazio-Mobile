import axios from 'axios'

// TODO consertar o url do post
export const doLogin = async(password, login) => {
  try{
    const {data} = await axios.post(`https://spazio.mybluemix.net/customer/login`, {password, login})
    return data
  }
  catch{
    return {error: true}
  }
}
