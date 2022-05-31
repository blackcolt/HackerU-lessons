import { useParams } from "react-router-dom";
import monthData from "../data/cal.json";
import Day from "../components/Day";
import { Container, Row } from "react-bootstrap";

function Month() {
  const { monthId } = useParams();
  const currentMobth = monthData[monthId - 1];
  return (
    <Container>
      <span>{currentMobth.name}</span>
      {chunk(7, currentMobth.days).map((daysCunk, index) => {
        return (
          <Row key={index}>
            {daysCunk.map((day, index) => {
              return <Day key={index} {...day} />;
            })}
          </Row>
        );
      })}
    </Container>
  );

  function chunk(chunkSize, array) {
    var R = [];
    for (var i = 0; i < array.length; i += chunkSize)
      R.push(array.slice(i, i + chunkSize));
    return R;
  }
}

export default Month;
