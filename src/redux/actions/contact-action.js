import { CREATE_CONTACT, EDIT_CONTACT } from '../constants';

export const addContact = (payload) => {
    return {
        type: CREATE_CONTACT,
        payload
    }
}

export const editContact = (payload) => {
    return {
        type: EDIT_CONTACT,
        payload
    }
}