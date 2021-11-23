import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import completedReducer from "./completedReducer";

// const rootReducers =
export default combineReducers({
    taskReducer,
    completedReducer
});

//  rootReducers;