const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

const myElements = React.createElement(
  "div",
  {
    id: "my-div",
  },

  React.createElement("input", {
    type: "text",
    value: "hello from input",
  }),
  React.createElement(
    "div",
    {
      id: "yet-another-div",
      className: "red",
    },
    React.createElement("span", null, "hello from a span")
  )
);
console.log(myElements);

root.render(myElements);

