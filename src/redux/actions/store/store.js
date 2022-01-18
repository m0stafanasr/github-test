import { createStore, applyMiddleware } from "redux";
import Fav from '../reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
const store = createStore(Fav,composeWithDevTools(applyMiddleware(thunk)))

    
export default store;   