/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import React, { useContext } from 'react';
import filterContacts from '../js/filterContacts';
import { AuthContext } from '../App';

function Form() {
  const { setIdToDisplay } = useContext(AuthContext);
  return (
    <form className="form">
      <div className="form__searchIconBox">
        <SearchIcon />
      </div>
      <Input className="form__input" placeholder="Search" onChange={(e) => filterContacts(e.target.value, setIdToDisplay)} />
    </form>
  );
}

export default Form;
