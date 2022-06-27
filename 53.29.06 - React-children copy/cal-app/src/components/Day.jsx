import { Col, Card } from "react-bootstrap";
function Day(props) {
  const { name, meetings = [] } = props;

  return (
    <Col className="pt-3">
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <hr />
          <Card.Text>
            {meetings.length
              ? meetings.map((meeting) => {
                  return <p>{meeting.title}</p>;
                })
              : "No meetings today :-)"}
          </Card.Text>
          <Card.Footer>Meetings Today:{meetings.length}</Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Day;
