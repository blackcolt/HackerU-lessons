import Calender from "../components/Calender";
import calenderData from "../data/cal.json";

function Home() {
  return <Calender monts={calenderData} />;
}

export default Home;
