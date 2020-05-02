export const getAppointmentsDispatched = (payload) => {
    return{
        type: 'GET_APPOINTMENTS',
        payload,
    }

}

export const doLoginDispatched = (payload) =>{
    return{
        type: 'GET_USER',
        payload
    }
}