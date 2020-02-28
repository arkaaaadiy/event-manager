import { CREATE_USER_EVENT } from "../actions/ActionType";

const initialState = {
    userEvent: {}
}

export default function eventCreatorReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER_EVENT:            
            return {
                ...state,
                userEvent: action.userEvent
            }
    
        default:
            return state;
    }
}