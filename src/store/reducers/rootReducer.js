import { combineReducers } from "redux";
import authReducer from "./auth";
import eventCreatorReducer from "./eventCreator";
import eventListReducer from "./eventList";



export default combineReducers({
    auth: authReducer,
    eventCreator: eventCreatorReducer,
    eventList: eventListReducer,
})
