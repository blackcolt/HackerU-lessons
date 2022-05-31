import Animel from "../components/Animle";
import zooData from "../data/zoo.json";

function ZooPage() {
  return zooData.length > 0 ? (
    zooData.map((animle, index) => <Animel {...animle} index={index} />)
  ) : (
    <p>No data :(</p>
  );
}

export default ZooPage;
