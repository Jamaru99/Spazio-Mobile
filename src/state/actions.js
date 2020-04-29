export const getAppointments = (payload) => {
    return{
        type: 'GET_APPOINTMENTS',
        payload,
    }

}

export const login = () =>{
    return{
        type: 'DO_LOGIN'
    }
}
//criar action do login e arrumar o nome do type