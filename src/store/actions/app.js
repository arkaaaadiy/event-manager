import { autoLogin } from "./auth"
import { INITIALIZED_SUCCESS } from "./ActionType";

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(autoLogin())
    promise.then(dispatch(initializedSuccess()))        
    
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})