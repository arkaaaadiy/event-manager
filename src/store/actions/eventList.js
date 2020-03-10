import {
    FETCH_EVENTLIST_START,
    FETCH_EVENTLIST_SUCCESS,
    FETCH_EVENTLIST_ERROR,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_ERROR,
    DELETE_EVENT_START
} from "./ActionType"
import axios from "../../API/axiosAPI"

export function fetchUserEventList(home = false) {
    return async (dispatch) => {
        dispatch(fetchUserEventListStart())
        try {
            let userID = null
            home ? userID = `wsSJDYXMKTaEkO62hoX2LV8gJwh1` : userID = localStorage.getItem('userId')
            
            const data = await axios.get(`${userID}/events.json`).then(response => response.data)
            const events = []

            Object.entries(data).forEach((key, value) => {
                events.push({
                    id: key[0],
                    ...key[1]
                })
            })
            dispatch(fetchUserEventListSuccess(events))
        } catch (e) {
            dispatch(fetchUserEventListError(e))
        }
    }
}
export function fetchHomeEventList() {
    return (dispatch) => {
    dispatch(fetchUserEventList(true))
    }
}
export function deleteUserEvent(id) {
    return async (dispatch) => {
        dispatch(startDeleteEvent())
        try {
            await axios.delete(`${localStorage.getItem('userId')}/events/${id}.json`)
            dispatch(deleteEvent(id))
        } catch (e) {
            dispatch(errorDeleteEvent(e))
        }
    }
}

export function fetchUserEventListStart() {
    return {
        type: FETCH_EVENTLIST_START
    }
}
export function fetchUserEventListSuccess(events) {
    return {
        type: FETCH_EVENTLIST_SUCCESS,
        events
    }
}
export function fetchUserEventListError(e) {
    return {
        type: FETCH_EVENTLIST_ERROR,
        error: e
    }
}
export function deleteEvent(id) {
    return {
        type: DELETE_EVENT_SUCCESS,
        id
    }
}
export function startDeleteEvent() {
    return {
        type: DELETE_EVENT_START
    }
}
export function errorDeleteEvent(e) {
    return {
        type: DELETE_EVENT_ERROR,
        error: e
    }
}