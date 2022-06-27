import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Animel(props) {
  const {
    name = "",
    type = "",
    bread = "",
    story = "",
    section = "",
    img = "holder.js/100px180",
    index = 0,
    children,
  } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Link to={`${index}`}>GO TO FULL PAGE</Link>
        <Card.Header>{name}</Card.Header>
        <Card.Title>{type}</Card.Title>
        <Card.Text>{story}</Card.Text>
      </Card.Body>
      <footer className="blockquote-footer">
        section : {section} bread: {bread}
      </footer>
      {children}
    </Card>
  );
}

export default Animel;
