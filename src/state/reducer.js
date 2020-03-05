const initialState = {
    nextAppointments: [
        {
          "status": "scheduled",
          "_id": "5e400167c91bc04e2d27ce8d",
          "customerId": "5e243f527e3ff81914f982a2",
          "serviceId": "5e2a20b98c0fb8469ed65387",
          "serviceData": {
            "_id": "5e2a20b98c0fb8469ed65387",
            "name": "Corte",
            "description": "bla bla ",
            "duration": 2,
            "price": 30
          },
          "employeeId": "5e3fea1be209df4aa8a62ca8",
          "schedule": "2020-02-12T12:00:00.000Z"
        },
        {
          "status": "ended",
          "_id": "5e4833ae45dc8f2218b79b50",
          "customerId": "5e243f527e3ff81914f982a2",
          "serviceId": "5e2a20b98c0fb8469ed65387",
          "serviceData": {
            "_id": "5e2df07656d5b2222fa13bbe",
            "name": "Unha",
            "duration": 0.5,
            "price": 15.2
          },
          "employeeId": "5e3fea1be209df4aa8a62ca8",
          "schedule": "2020-02-24T13:00:00.000Z"
        }
      ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_APPOINTMENTS":
            return {
                ...state, 
                nextAppointments: action.payload,
            }
        default:
            return state
    }
}

export default reducer;