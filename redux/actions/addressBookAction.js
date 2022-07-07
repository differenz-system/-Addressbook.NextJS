import { ADD_CONTACT, EDIT_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "../actionTypes";

export const addContact = (payload) => ({
  type: ADD_CONTACT,
  payload: payload
});

export const editContact = (payload) => ({
  type: EDIT_CONTACT,
  payload: payload
});

export const updateContact = (payload) => ({
  type: UPDATE_CONTACT,
  payload: payload
});

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload: payload
});