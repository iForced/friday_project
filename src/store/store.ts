import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";
import {loginReducer} from './loginization/loginReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    reducer,
    login: loginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

