import {
    FETCH_EVENTLIST_START,
    FETCH_EVENTLIST_ERROR,
    FETCH_EVENTLIST_SUCCESS,
    DELETE_EVENT_START,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_ERROR
} from "../actions/ActionType";
const initialstate = {
    events: [],
    loading: false,
    error: null,
    loadingDelete: false
}
export default function eventListReducer(state = initialstate, action) {
    switch (action.type) {
        case FETCH_EVENTLIST_START:
            return {
                ...state,
                loading: true
            }

            case FETCH_EVENTLIST_SUCCESS:
                return {
                    ...state,
                    loading: false,
                        events: action.events
                }

                case FETCH_EVENTLIST_ERROR:
                    return {
                        ...state,
                        loading: false,
                            error: action.error
                    }
                    case DELETE_EVENT_START:
                        return {
                            ...state,
                            loadingDelete: true
                        }
                        case DELETE_EVENT_ERROR:
                            return {
                                ...state,
                                loadingDelete: false,
                                    error: action.error
                            }
                            case DELETE_EVENT_SUCCESS:
                                return {
                                    ...state,
                                    loadingDelete: false,
                                        events: state.events.filter(item => item.id !== action.id)
                                }
                                default:
                                    return state;
    }
}