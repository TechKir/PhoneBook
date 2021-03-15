import fakeContacts from '../data/fakeData';

function filterContacts(searchText, setIdToDisplay) {
  const searchTextArray = searchText.split(' ');
  const name = searchTextArray[0];
  const surname = searchTextArray[1];

  const addOrLeave = (prevState, e) => {
    const filtredId = prevState.filter((id) => id === e.id);
    return filtredId.length > 0 ? [...prevState] : [...prevState, e.id];
  };

  const remove = (prevState, e) => prevState.filter((id) => id !== e.id);

  fakeContacts.forEach((e) => {
    const regExName = new RegExp(`^${name}`, 'i');
    const regExSurname = new RegExp(`^${surname}`, 'i');

    if (searchTextArray.length > 1) {
      if (regExName.test(e.first_name) && regExSurname.test(e.last_name)) {
        setIdToDisplay((prevState) => addOrLeave(prevState, e));
      } else {
        setIdToDisplay((prevState) => remove(prevState, e));
      }
    } else if (regExName.test(e.first_name)) {
      setIdToDisplay((prevState) => addOrLeave(prevState, e));
    } else {
      setIdToDisplay((prevState) => remove(prevState, e));
    }
  });
}

export default filterContacts;
