import { combineReducers, createStore } from "redux";
import storingReducer from "./feature/storing";

//initialize reducer nya
const reducer = combineReducers({
  storing: storingReducer,
});

const appStore = createStore(reducer);

export default appStore;
