export const getAppointments = (payload) => {
    return{
        type: 'GET_APPOINTMENTS',
        payload,
    }

}

export const doLogin = () =>{
    return{
        type: 'GET_USER',
        payload
    }
}