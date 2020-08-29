import { CUSTOMER_BASE_URL, post } from '@utils'

export const doLogin = async (password, login) => {
  try {
    const { data } = await post(`${CUSTOMER_BASE_URL}/login`, { password, login })
    return data
  } catch {
    return { error: true }
  }
}

export const resetPassword = async (email, token) => {
  try {
    const { data } = await post(`${CUSTOMER_BASE_URL}/resetpassword`, { email, token })
    return data
  } catch {
    return { error: true }
  }
}
