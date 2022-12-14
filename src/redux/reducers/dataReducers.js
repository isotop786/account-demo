import { ActionsTypes } from "../constants/action-types";

const initialState = {
    data:[
        {id : 1, name: "Resource", type: "debit", code : 100, parent_code: null},
        {id : 2, name: "Resource1", type: "debit", code : 101, parent_code: 100},
        {id : 3, name: "Resource2", type: "debit", code : 102, parent_code: 100},
        {id : 4, name: "Resource3", type: "debit", code : 103, parent_code: 101},
        {id : 5, name: "Resource4", type: "debit", code : 200, parent_code: null},
        {id : 6, name: "Resource5", type: "debit", code : 201, parent_code: 200},    
    ],
    selectedData:{}
}



export const dataReducers = (state = initialState, { type, payload }) => {

    switch (type){
        case ActionsTypes.GET_DATA:
            return state.data
        
        case ActionsTypes.SELECTED_DATA: 
            console.log(payload);
            return {...state, selectedData:payload}

        case ActionsTypes.ADD_DATA:              
            return {
                ...state,
                data: [...state.data, payload]
            }
        
        default:
            return state;
    }
}



