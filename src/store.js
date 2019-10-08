import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initState = {};

export default createStore(rootReducer, initState, applyMiddleware(thunk));
