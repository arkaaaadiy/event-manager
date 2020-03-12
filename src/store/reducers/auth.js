import {
    AUTH_SUCCESS,
    AUTH_LOGOUT,
    AUTH_ERROR,
    AUTH_CLEAR_ERROR
} from "../actions/ActionType";

const initialState = {
    token: null,
    userId: null,
    error: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                    userId: action.localId
            }

            case AUTH_LOGOUT:
                return {
                    ...state,
                    token: null,
                        userId: null
                }

                case AUTH_ERROR:
                    return {
                        ...state,
                        error: action.error
                    }
                case AUTH_CLEAR_ERROR:
                    return {
                        ...state,
                        error: null
                    }


                    default:
                        return state;
    }
}