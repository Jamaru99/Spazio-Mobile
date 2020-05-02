const initialState = {
    isLogged: false,
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
                isLogged: true,
                userData: action.payload,
            }
        default:
            return state
    }
}

export default reducer;
