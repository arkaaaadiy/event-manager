import { INITIALIZED_SUCCESS } from "../actions/ActionType"

const initalState = {
    initialized: false
}


export const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:            
            return {
                ...state, 
                initialized: true
            }
    
        default:
            return state
    }
} 