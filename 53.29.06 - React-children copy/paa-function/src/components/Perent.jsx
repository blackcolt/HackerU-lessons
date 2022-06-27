import Child from "./Child";

function Perent() {
  const doSomething = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Child handleClick={doSomething} />
    </div>
  );
}

export default Perent;
