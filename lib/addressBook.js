// check whether contact is available or not in the existing contact list
export const isContactAvailable = (contactList, contact) => {
  const index = contactList.findIndex(x => x.phone === contact.phone && x.id !== contact.id);

  // if contact exist return true otherwise false
  if (index > -1) {
    return true;
  }

  return false;
}