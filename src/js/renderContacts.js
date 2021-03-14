/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import toggleArrayItem from '../utils/toggleArrayItem';

function renderContacts(contacts) {
  const [checkedContacts, setCheckedContacts] = useState([]);
  console.log('Checked contacts IDs is:', checkedContacts);

  return contacts.map((contact) => {
    const [checkbox, setCheckbox] = useState({
      checked: false
    });

    const GreenCheckbox = withStyles({
      root: {
        color: green[400],
        '&$checked': {
          color: green[600]
        }
      },
      checked: {}
    })((props) => <Checkbox color="default" {...props} />);

    const handleChange = (event) => {
      setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });

      setCheckedContacts((prevState) => toggleArrayItem(prevState, event.target.id));
    };

    const avatar = contact.avatar || contact.first_name[0] + contact.last_name[0];

    return (
      <li key={contact.id} className="contactsList__li">

        <div className="contactsList__div">
          {avatar === contact.avatar ? <img className="contactsList__img" src={avatar} alt="avatar" /> : <div className="contactsList__img">{avatar}</div> }
          <p>
            {contact.first_name}
            {' '}
            {contact.last_name}
          </p>
        </div>

        <div>
          <FormControlLabel
            control={<GreenCheckbox id={contact.id.toString()} checked={checkbox.checked} onChange={handleChange} name="checked" />}
          />
        </div>

      </li>
    );
  });
}

export default renderContacts;
