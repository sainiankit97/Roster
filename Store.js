import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import Duties from "./Reducers/DutiesReducer";

const rootReducer = combineReducers({
    Duties
});

const configstore = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}

export default configstore;