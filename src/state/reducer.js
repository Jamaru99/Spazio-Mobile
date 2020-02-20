const initialState = {
    nextAppointments: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_APPOINTMENTS":
            return {
                ...state, 
                action.payload
            }
    }
}

export default reducer;