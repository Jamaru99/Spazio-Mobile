import {
    SET_INFO,
    SET_APPOINTMENTS,
    SET_USER_DATA,
    SET_SERVICES,
    SET_EMPLOYEES,
    SET_AVAILABLE_SCHEDULES,
    UPDATE_NEW_APPOINTMENT
} from './actions'

const initialState = {
    isLogged: false,
    info: {},
    userData: {},
    nextAppointments: [],
    services: [],
    employees: [],
    newAppointment: {},
    availableSchedules: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INFO:
            return {
                ...state, 
                info: action.payload,
            }
        case SET_APPOINTMENTS:
            return {
                ...state, 
                nextAppointments: action.payload,
            }
        case SET_USER_DATA:
            return {
                ...state,
                isLogged: true,
                userData: action.payload,
            }
        case SET_SERVICES:
            return {
                ...state,
                services: action.payload,
            }
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
            }
        case SET_AVAILABLE_SCHEDULES:
            return {
                ...state,
                availableSchedules: action.payload,
            }
        case UPDATE_NEW_APPOINTMENT:
            return {
                ...state,
                newAppointment: {
                    ...state.newAppointment,
                    ...action.payload
                }
            }
        default:
            return state
    }
}

export default reducer;
