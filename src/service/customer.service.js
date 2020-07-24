import { CUSTOMER_BASE_URL, post, put } from '@utils'

export const doLogin = async (password, login) => {
  try{
    const { data } = await post(`${CUSTOMER_BASE_URL}/login`, { password, login })
    return data
  }
  catch{
    return { error: true }
  }
}

export const putProfile = async (id, userData) => {
  try {
    const { data } = await put(`${CUSTOMER_BASE_URL}/update/${id}`, userData)
    return data
  } catch {
    return { error: true }
  }
}
