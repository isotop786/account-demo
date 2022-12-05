import { ActionsTypes } from "../constants/action-types";

export const getData = (all_data) => {
    return {
        type: ActionsTypes.GET_DATA,
        payload: all_data
    }
}

export const selectedData = (data) => {
    return {
        type: ActionsTypes.SELECTED_DATA,
        payload: data
    }
}
export const addData = (data) => {
    return {
        type: ActionsTypes.ADD_DATA,
        payload: data
    }
}