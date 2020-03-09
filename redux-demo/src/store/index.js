import { createStore } from "redux";
import { counterReducer } from "./reducers";
import {addAction} from './actions'

let store = createStore(counterReducer);

store.dispatch(addAction)