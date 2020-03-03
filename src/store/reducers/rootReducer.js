import { combineReducers } from "redux";
import authReducer from "./auth";
import eventCreatorReducer from "./eventCreator";
import eventListReducer from "./eventList";
import { appReducer } from "./app";



export default combineReducers({
    auth: authReducer,
    eventCreator: eventCreatorReducer,
    eventList: eventListReducer,
    app: appReducer
})
