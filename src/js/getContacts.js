/* eslint-disable no-console */
async function getContacts(apiData) {
  const users = await fetch(apiData)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return users;
}

export default getContacts;
