import Card from "react-bootstrap/Card";
import Attendence from "./Attendence";

function Appointment(props) {
  const {
    title = "no name",
    description,
    date,
    location = {},
    attendcies = [],
  } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>lat:{location.lat}</Card.Subtitle>
        <Card.Subtitle>long:{location.long}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Footer>{date}</Card.Footer>
        {props.children}
      </Card.Body>
    </Card>
  );
}

export default Appointment;
