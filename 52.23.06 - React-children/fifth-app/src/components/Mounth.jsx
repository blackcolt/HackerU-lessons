import Card from "react-bootstrap/Card";

function Mounth(props) {
  const { title, numOfDays } = props;
  return (
    <div>
      {title}
      <div>{props.children}</div>
    </div>

    // <Card style={{ width: "18rem" }}>
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{numOfDays} Days</Card.Text>
    //   </Card.Body>
    // </Card>
  );
}

export default Mounth;
