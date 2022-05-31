import Month from "./Month";
import { Container, Row } from "react-bootstrap/";

function Calender(props) {
  const { monts } = props;
  return (
    <Container>
      {chunk(3, monts).map((chunk, index) => {
        return (
          <Row key={index}>
            {chunk.map((month) => {
              return <Month key={month.number} {...month} />;
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

export default Calender;
