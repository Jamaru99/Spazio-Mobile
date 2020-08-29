import axios from 'axios';

const BASE_URL = 'https://spazio.mybluemix.net'
export const CUSTOMER_BASE_URL = `${BASE_URL}/customer`
export const APPOINTMENT_BASE_URL = `${BASE_URL}/appointment`
export const SERVICE_BASE_URL = `${BASE_URL}/service`
export const EMPLOYEE_BASE_URL = `${BASE_URL}/employee`

const config = {
    headers: {
      access: 'aqueleMarioSenpai',
    }
}

export const get = axios.get
export const post = axios.post
export const put = axios.put

export const getAuthorized = async (url) => {
    const data = await get(url, config);
    return data;
}