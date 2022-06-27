import animelData from "../data/zoo.json";
import { useParams } from "react-router-dom";
import Animel from "../components/Animle";

function AnimalPage() {
  const { animleId } = useParams();
  const animle = animelData[animleId];
  return (
    <Animel {...animle}>
      <span>{animle.longData}</span>
      <span>1111</span>
    </Animel>
  );
}
export default AnimalPage;
