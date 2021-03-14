function compareLastname(a, b) {
  if (a.last_name < b.last_name) return -1;
  if (a.last_name > b.last_name) return 1;
  return 0;
}

const sortContacts = (contacts) => contacts.sort(compareLastname);

export default sortContacts;
