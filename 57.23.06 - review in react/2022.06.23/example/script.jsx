function App(props) {
    return (
      <div id="my-div">
        <SayHi a={5} theColorYouWantForTheBackground="lightcoral" />
        <br />
        <SayHi />
        <br />
        <SayHi
          a={<input type="text" />}
          theColorYouWantForTheBackground="lightblue"
        />
        <br />
        <button onClick={() => alert("hello")}>click me if you can!</button>
        <Counter min={-5} max={5} start={0} />
      </div>
    );
  }\
  
  function SayHi(props) {
    return (
      <span style={{ backgroundColor: props.theColorYouWantForTheBackground }}>
        hello from daniel {props.a}
      </span>
    );
  }
  
  function Counter({ min, max, start }) {
    const [counter, setCounter] = React.useState(start);
    return (
      <div>
        <button
          onClick={() => {
            setCounter((counter) => {
              if (counter > min) {
                return counter - 1;
              }
  
              return counter;
            });
          }}
        >
          -
        </button>
        {counter}
        <button
          onClick={() => {
            setCounter((counter) => {
              if (counter < max) {
                return counter + 1;
              }
  
              return counter;
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
  