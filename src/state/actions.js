export const SET_APPOINTMENTS = 'SET_APPOINTMENTS'
export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_SERVICES = 'SET_SERVICES'

export const setAppointmentsDispatched = (payload) => {
    return {
        type: SET_APPOINTMENTS,
        payload,
    }
}

export const setUserDataDispatched = (payload) => {
    return {
        type: SET_USER_DATA,
        payload
    }
}

export const setServicesDispatched = (payload) => {
    return {
        type: SET_SERVICES,
        payload
    }
}