import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    console.log("i fire once");
  }, []);
  return <div>this is home page</div>;
}
