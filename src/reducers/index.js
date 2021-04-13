import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import productReducers from './productReducers';
import productReducer from './productReducers'
export default combineReducers({
    errors:errorReducer,
    products:productReducers});