import { INFO_BASE_URL, get } from '@utils'

export const getInfo = async () => {
  try {

    const { data } = await get(`${INFO_BASE_URL}/detail`)
    return data
  } catch {
    return { error: true }
  }
}