import Input from "./UI/Input";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Input
        type="search"
        name="name"
        aria-label="search box"
        placeholder="Search for photo"
        onChange={props.onChange}
      />
      {props.searched && !props.loading && (
        <h2>
          Search Results for <span>"{props.enteredValue}"</span>
        </h2>
      )}

      {props.searched && props.loading && (
        <h2>
          Searching for <span>"{props.enteredValue}"</span>
        </h2>
      )}
    </div>
  );
};

export default Header;
