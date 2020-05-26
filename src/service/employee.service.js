import { EMPLOYEE_BASE_URL, getAuthorized } from '@utils'

export const getEmployees = async () => {
  try {
    const { data } = await getAuthorized(`${EMPLOYEE_BASE_URL}/list`)
    return data
  } catch {
    return { error: true }
  }
}