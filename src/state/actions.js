export const getAppointments = (payload) => {
    return{
        type: 'GET_APPOINTMENTS',
        payload,
    }

}