import Card from "react-bootstrap/Card";
import Mounth from "./Mounth";

function Calender() {
  const monthes = [
    {
      title: "Jan",
      numOfDays: 31,
    },
    {
      title: "Fab",
      numOfDays: 29,
    },
    {
      title: "March",
      numOfDays: 31,
    },
  ];
  return monthes.map((month) => <Mounth key={month.title} {...month} />);
}

export default Calender;
