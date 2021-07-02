import { combineReducers } from "redux"
import { contactRequestReducer } from "./contactRequestReducer";

export const rootReducer = combineReducers({
    contact_requests: contactRequestReducer
})