import classNames from "classnames";

const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        name={name}
        className={classNames("form-control", { "is-invalid": error })}
      />
      <span className="invalid-feedback">{error}</span>
    </div>
  );
};

export default Input;
