import { ActionsTypes } from "../constants/action-types";

const initialState = {
    data:[
        {id : 1, name: "Resource",  type: "debit",category:"Resource", note:'', user_status:true,code : 100, parent_code: 202, children:[]},
        {id : 2, name: "Resource1", type: "debit",category:"Resource", note:'User note', user_status:true,code : 101, parent_code: 100,children:[]},
        {id : 3, name: "Resource2", type: "debit",category:"Resource", note:'', user_status:false,code : 102, parent_code: 100,children:[]},
        {id : 4, name: "Resource3", type: "debit",category:"Resource", note:'', user_status:true,code : 103, parent_code: 101,children:[]},
        {id : 5, name: "Resource4", type: "debit",category:"Resource", note:'', user_status:false,code : 200, parent_code: 103,children:[]},
        {id : 6, name: "Resource5", type: "debit",category:"Money",    note:'', user_status:true,code : 201, parent_code: 200,children:[]}
    ],
    selectedData:{}
}

export const dataReducers = (state = initialState, { type, payload }) => {
    const findItemIndex = ()=>{

    }
    switch (type){
        case ActionsTypes.GET_DATA:
            return state;

        case ActionsTypes.SELECTED_DATA: 
            console.log(payload);
            return {...state, selectedData:payload}

        case ActionsTypes.ADD_DATA: 
            console.log(payload);
            // state.data.forEach(item => {
            //     if (item.parent_code == payload.parent_code)
              
                    return {
                        ...state,
                        ...state.data.map(item => {
                            if (item.parent_code === payload.parent_code)
                            {
                                item['children'].push(payload);   
                            }
                        })
                    }
                
            // })
            // return {
            //     ...state,
            //     data:[...state.data, payload]
            // }
        
        default: 
            return state;
    }
}



