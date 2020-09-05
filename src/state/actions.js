export const SET_INFO = 'SET_INFO'
export const SET_APPOINTMENTS = 'SET_APPOINTMENTS'
export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_SERVICES = 'SET_SERVICES'
export const SET_EMPLOYEES = 'SET_EMPLOYEES'
export const SET_AVAILABLE_SCHEDULES = 'SET_AVAILABLE_SCHEDULES'
export const UPDATE_NEW_APPOINTMENT = 'UPDATE_NEW_APPOINTMENT'

export const setInfoDispatched = (payload) => {
    return {
        type: SET_INFO,
        payload
    }
}

export const setAppointmentsDispatched = (payload) => {
    return {
        type: SET_APPOINTMENTS,
        payload
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

export const setEmployeesDispatched = (payload) => {
    return {
        type: SET_EMPLOYEES,
        payload
    }
}

export const setAvailableSchedulesDispatched = (payload) => {
    return {
        type: SET_AVAILABLE_SCHEDULES,
        payload
    }
}

export const updateNewAppointmentDispatched = (payload) => {
    return {
        type: UPDATE_NEW_APPOINTMENT,
        payload
    }
}