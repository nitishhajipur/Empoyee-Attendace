import { combineReducers } from "redux";
import { appReducer } from "./reducer";

const mainReducer=combineReducers({
    application:appReducer
})
export default mainReducer