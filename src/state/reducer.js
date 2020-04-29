const initialState = {
    isLogged: true,
    userData:{},
    nextAppointments: [],

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_APPOINTMENTS":
            return {
                ...state, 
                nextAppointments: action.payload,
            }
        case "GET_USER":
            return{
                ...state,
                userData: action.payload,
            }
        default:
            return state
    }
}

export default reducer;
