import Month from "./Month";
import { Button, Container, Row } from "react-bootstrap/";
import { useState, setState } from "react";

function Calender(props) {
  const { monts } = props;
  const { isRed, setIsRed } = useState(false);
  const { counter, setCounter } = useState(0);

  const handleClick = () => {
    setCounter(counter++);
    setIsRed(true);
  };

  return (
    <Container>
      <Button onClick={handleClick} />
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
