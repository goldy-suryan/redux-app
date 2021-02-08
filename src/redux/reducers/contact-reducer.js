import { CREATE_CONTACT, EDIT_CONTACT } from '../constants';

const initialState = {
    contacts: []
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [ ...state.contacts, action.payload ]
            }
        case EDIT_CONTACT:
            let contactList = [...state.contacts ];
            let index = contactList.findIndex(item => item.id == action.payload.id);
            contactList.splice(index, 1, action.payload);
            return {
                ...state,
                contacts: [ ...contactList ]
            }
        default:
            return state;
    }
};