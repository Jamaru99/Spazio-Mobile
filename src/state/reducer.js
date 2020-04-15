const initialState = {
    isLogged: true,
    nextAppointments: [
        { 
            "status": "scheduled", 
            "_id": "5e2c84684d33255b8f992997", 
            "customerId": "5e243ede7e3ff81914f982a0", 
            "serviceId": "5e2a20b98c0fb8469ed65387", 
            "schedule": "2020-02-01T14:00:00.000Z", 
            "customerData": { 
              "_id": "5e243ede7e3ff81914f982a0", 
              "login": "matheus.euf@gmail.com", 
              "name": "Matheus Henrique", 
              "birthDate": "2011-02-02T00:00:00.000Z", 
              "gender": "male" 
            }, 
            "serviceData": { 
              "_id": "5e2a20b98c0fb8469ed65387", 
              "name": "Corte", 
              "description": "bla bla", 
              "duration": 2, 
              "price": 30 
            } 
        }, 
        { 
            "status": "scheduled", 
            "_id": "5e2df67c56d5b2222fa13bc0", 
            "customerId": "5e243ede7e3ff81914f982a0", 
            "serviceId": "5e2df07656d5b2222fa13bbe", 
            "schedule": "2020-05-24T12:00:00.000Z", 
            "customerData": { 
                "_id": "5e243ede7e3ff81914f982a0", 
                "login": "matheus.euf@gmail.com", 
                "name": "Matheus Henrique", 
                "birthDate": "2011-02-02T00:00:00.000Z", 
                "gender": "male" 
            }, 
            "serviceData": { 
                "_id": "5e2df07656d5b2222fa13bbe", 
                "name": "Unha", 
                "duration": 0.5, 
                "price": 15.2 
            } 
        } 
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_APPOINTMENTS":
            return {
                ...state, 
                // nextAppointments: action.payload,
            }
        default:
            return state
    }
}

export default reducer;

// {
// 	isLogged
// 	? <AppointmentList/>
// 	: <Login />

// }