import { combineReducers } from "redux";
import authReducer from "./auth";
import eventCreatorReducer from "./eventCreator";



export default combineReducers({
    auth: authReducer,
    eventCreator: eventCreatorReducer
})
