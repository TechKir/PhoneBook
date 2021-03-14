import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

function Form() {
  return (
    <form className="form">
      <div className="form__searchIconBox">
        <SearchIcon />
      </div>
      <Input className="form__input" placeholder="Search" />
    </form>
  );
}

export default Form;
