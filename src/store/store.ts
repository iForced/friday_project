import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";
import {recovery_pass_reducer} from "./recovery_pass/recovery_pass_reducer";
import {loginReducer} from './loginization/loginReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    reducer,
    recovery_pass_reducer,
    login: loginReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))