import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>Wellcome to the ZOO</div>
      <Link to="/animels">click to visit all the animels</Link>
      <div></div>
    </div>
  );
}

export default HomePage;
