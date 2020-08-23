import { APPOINTMENT_BASE_URL, getAuthorized, post } from '@utils'

export const getNextAppointments = async (id) => {
  try {
    const { data } = await getAuthorized(`${APPOINTMENT_BASE_URL}/list?customer=${id}`)
    return data
  } catch {
    return { error: true }
  }
}

export const getAvailableSchedules = async (date, service, employee) => {
  try {
    const { data } = await getAuthorized(`${APPOINTMENT_BASE_URL}/list/${date}?employee=${employee}&service=${service}`)
    return data
  } catch {
    return { error: true }
  }
}

export const createAppointment = async (data) => {
  try {
    await post(`${APPOINTMENT_BASE_URL}/create`, data)
    return { error: false }
  } catch {
    return { error: true }
  }
}