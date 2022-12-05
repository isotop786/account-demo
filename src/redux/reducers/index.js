import { combineReducers } from "redux";
import { dataReducers } from "./dataReducers";

const reducers = combineReducers({
    allData: dataReducers
})

export default reducers