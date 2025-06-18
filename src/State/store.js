import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReaducer } from "./Auth/Reducer";
import { thunk } from "redux-thunk";

const rootReducer=combineReducers({
    auth:authReaducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));