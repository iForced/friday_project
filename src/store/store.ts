import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";
import {recovery_pass_reducer} from "./recovery_pass/recovery_pass_reducer";

const rootReducer = combineReducers({
    reducer,
    recovery_pass_reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))