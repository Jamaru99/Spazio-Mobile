export const getAppointments = (payload) => {
    return{
        type: 'GET_APPOINTMENTS',
        payload,
    }

}

//criar action do login