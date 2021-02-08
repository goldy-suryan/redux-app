import { combineReducers } from 'redux';
import { contactReducer } from './contact-reducer';

export default combineReducers({
    contactList: contactReducer
})