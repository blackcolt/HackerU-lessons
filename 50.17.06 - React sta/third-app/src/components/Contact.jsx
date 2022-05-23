import React from "react";
import PropTypes from "prop-types";

function Contact(props) {
  const { name, phone, age, isVip, birthDate } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{phone}</p>
      <p>{age}</p>
      <p>{isVip}</p>
      <p>{birthDate}</p>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  age: PropTypes.number.isRequired,
  isVip: PropTypes.bool,
  birthDate: PropTypes.string,
  title: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
};
// title = {
//   title: "blabla",
//   subtitle: ""
// }

Contact.defaultProps = {
  name: "no name",
  phone: "0526651266",
  // age: 72 / 2, no need, becuse its required
  isVip: false,
  birthDate: "",
};

export default Contact;
