import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReaducer } from "./Auth/Reducer";
import { thunk } from "redux-thunk";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

const rootReducer=combineReducers({
    auth:authReaducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));