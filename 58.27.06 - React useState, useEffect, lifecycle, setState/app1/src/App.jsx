import "./App.css";
import Counter from "./components/counter";
import CounterFn from "./components/counterFN";
import LifeCycleParent from "./components/lifecycleParent";
import LifeCycleParentFn from "./components/lifecycleParentFn";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <CounterFn /> */}
      {/* <LifeCycleParent /> */}
      <LifeCycleParentFn />
    </div>
  );
}

export default App;
