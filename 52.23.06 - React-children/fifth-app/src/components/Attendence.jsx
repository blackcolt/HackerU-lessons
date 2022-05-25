import Figure from "react-bootstrap/Figure";

function Attendence(props) {
  const { name = "", image = "" } = props;
  return (
    <Figure>
      <Figure.Image width={171} height={180} alt={name} src={image} />
      <Figure.Caption>{name}</Figure.Caption>
    </Figure>
  );
}

export default Attendence;
