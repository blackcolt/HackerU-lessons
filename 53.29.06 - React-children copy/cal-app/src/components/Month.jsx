import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

function Month(props) {
  const { name = "", short = "", number = 0 } = props;
  return (
    <Col className="p-3">
      <a href={`month/${number}`}>
        <Card>
          <Card.Body>
            <Card.Title>{short}</Card.Title>
            <Card.Text>
              {name} {number}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}
export default Month;
