import { CREATE_USER_EVENT } from "./ActionType";
import Axios from "axios";

export function fetchUserEvent(userEvent) {
   return async (dispatch, getState) => { 
        dispatch(createUserEvent(userEvent))      
       await Axios.post(`https://release-react-app.firebaseio.com/${getState().auth.userId}/events.json`,userEvent)
       
   }
}

export function createUserEvent(userEvent) {
    return {
        type: CREATE_USER_EVENT,
        userEvent
    }
} 