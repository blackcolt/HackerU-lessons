import { useState } from "react";

function Input({ type = "", label, ...rest }) {
  const [userName, setName] = useState();
  let handleChange = ({ currentTarget }) => {
    setName(currentTarget.value);
  };
  return (
    <div className="form-group">
      <label>
        {userName}
        {label}
        <input onChange={handleChange} {...rest} type={type} />
      </label>
    </div>
  );
}

export default Input;
