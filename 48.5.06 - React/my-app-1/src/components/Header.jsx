import React from "react";

//props = {title=blabla}
function Header(props) {
  this.state = {
    title: "hi you!!",
  };
  setTimeout(() => {
    this.state.title = "bbbbbb";
  }, 30000);
  return (
    <div>
      <span>1/0</span>
      <span>{1 + 2}</span>
      <h1>{this.state.title}</h1>
      {/* {createSubTitle()} */}
    </div>
  );
}

export default Header;
