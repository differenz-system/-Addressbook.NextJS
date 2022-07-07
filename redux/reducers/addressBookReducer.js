
import { ADD_CONTACT, EDIT_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../actionTypes';

const initialState = {
  contactList: [],
};

const addressBookReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    //add contact to contact list
    case ADD_CONTACT: {
      return { ...state, contactList: [...state.contactList, payload] };
    }

    //make contact editable
    case EDIT_CONTACT:
      return { ...state, contactList: state.contactList.map((contact) => contact.id === payload.id ? { ...contact, isEditable: !contact.isEditable } : { ...contact, isEditable: false }) };

    //update/modify contact to contact list
    case UPDATE_CONTACT:
      return { ...state, contactList: state.contactList.map((contact) => contact.id === payload.id ? payload : contact) };

    //delete contact from contact list
    case DELETE_CONTACT:
      return { ...state, contactList: state.contactList.filter((contact) => contact.id !== payload.id) };

    default:
      return state;
  }
};

export default addressBookReducer;