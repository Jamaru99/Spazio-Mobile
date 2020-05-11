import { SET_APPOINTMENTS, SET_USER_DATA, SET_SERVICES, UPDATE_NEW_APPOINTMENT } from './actions'

const initialState = {
    isLogged: false,
    userData: {},
    nextAppointments: [],
    services: [],
    newAppointment: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type){
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
