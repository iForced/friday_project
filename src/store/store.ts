import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {regReducer} from "./registration/registration_reducer";
import {recoveryPassReducer} from "./recoveryPass/recoveryPassReducer";
import {loginReducer} from './loginization/loginReducer';
import {profileReducer} from './profilePage/profileReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    registration: regReducer,
    recoveryPass: recoveryPassReducer,
    login: loginReducer,
    profile: profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store