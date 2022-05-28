import Card from "react-bootstrap/Card";

function Mounth(props) {
  const { title, numOfDays } = props;
  return (
    <div>
      {title}
      <div>{props.children}</div>
    </div>
  );
}

export default Mounth;
