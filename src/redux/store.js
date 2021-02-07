import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    contacts: []
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CONTACT':
            return {
                ...state,
                contacts: [ action.payload, ...state.contacts ]
            }
        default:
            return state;
    }
};


const store = createStore(contactReducer, composeWithDevTools());

export default store;