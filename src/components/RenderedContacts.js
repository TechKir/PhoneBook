/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import { AuthContext } from '../App';
import toggleArrayItem from '../utils/toggleArrayItem';

function RenderedContacts({ contacts }) {
  const {
    checkedContacts, setCheckedContacts, idToDisplay
  } = useContext(AuthContext);
  console.log(checkedContacts); // DO NOT DELETE - TASK REQUIREMENT

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
      <li key={contact.id} className="contactsList__li" style={{ display: `${idToDisplay.find(((element) => element === contact.id)) ? 'flex' : 'none'}` }}>

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
            control={<GreenCheckbox id={contact.id.toString()} checked={checkedContacts.find((e) => parseInt(e, 10) === contact.id) && true} onChange={handleChange} name="checked" />}
          />
        </div>

      </li>
    );
  });
}

export default RenderedContacts;
