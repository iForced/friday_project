import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {regReducer} from "./registration/registration_reducer";
import {recoveryPassReducer} from "./recoveryPass/recoveryPassReducer";
import {loginReducer} from './loginization/loginReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    registration: regReducer,
    recoveryPass: recoveryPassReducer,
    login: loginReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))