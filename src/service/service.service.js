import { SERVICE_BASE_URL, getAuthorized } from '@utils'

export const getServices = async () => {
  try {
    const { data } = await getAuthorized(`${SERVICE_BASE_URL}/list`)
    return data
  } catch {
    return { error: true }
  }
}