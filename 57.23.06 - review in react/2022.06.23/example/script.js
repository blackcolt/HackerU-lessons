const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(App());
console.log(App());
function App() {
  return React.createElement(
    "div",
    {
      id: "my-div",
    },

    React.createElement(SayHi, {
      theBackgroundColorYouWant: "lightcoral",
    }),
    React.createElement("br", null),
    React.createElement(SayHi, null),
    React.createElement("br", null),
    React.createElement(SayHi, {
      theBackgroundColorYouWant: "lightblue",
      anyOtherContent: React.createElement("input", { type: "text" }),
    }),
    React.createElement(Counter, {
      min: -5,
      max: 5,
      start: 0,
    }),
    React.createElement(Counter, {
      min: -5,
      max: 10,
      start: 0,
    }),
    React.createElement(Counter, {
      min: -5,
      max: 5,
      start: 0,
    })
  );
}

function SayHi(props) {
  console.log(props);

  return React.createElement(
    "span",
    {
      style: {
        backgroundColor: props.theBackgroundColorYouWant,
      },
    },
    "hello from daniel",
    props.anyOtherContent
  );
}

function Counter({ min, max, start }) {
  const [counter, setCounter] = React.useState(start);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: () => {
          setCounter((counter) => {
            if (counter > min) {
              return counter - 1;
            }

            return counter;
          });
        },
      },
      "-"
    ),
    counter,
    React.createElement(
      "button",
      {
        onClick: () => {
          setCounter((counter) => {
            if (counter < max) {
              return counter + 1;
            }

            return counter;
          });
        },
      },
      "+"
    )
  );
}
