export const getAppointments = (payload) => {
    return{
        type: 'GET_APPOINTMENTS',
        payload,
    }

}

export const doLoginDispatched = () =>{
    return{
        type: 'GET_USER',
        payload
    }
}