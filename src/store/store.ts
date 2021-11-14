import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";
import {regReducer} from "./registration/registration_reducer";


const rootReducer = combineReducers({
    reducer,
    registration: regReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))