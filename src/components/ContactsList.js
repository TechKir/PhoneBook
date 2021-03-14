/* eslint-disable max-len */
import sortContacts from '../js/sortContacts';
import fakeContacts from '../data/fakeData';
import renderContacts from '../js/renderContacts';
// import getContacts from '../js/getContacts';

function ContactsList() {
  // const contacts = getContacts('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json');
  // api sends no Access-Control-Allow-Origin in its responses, my frontend code can’t directly access responses from that api.
  // Even specifying mode: 'no-cors' can’t fix it.
  // I suppose you should change CORS options (https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors/43268098#43268098)

  const sortedContacts = sortContacts(fakeContacts);

  return (
    <div className="contactsList">
      <ul className="contactsList__ul">
        {renderContacts(sortedContacts)}
      </ul>
    </div>
  );
}

export default ContactsList;
