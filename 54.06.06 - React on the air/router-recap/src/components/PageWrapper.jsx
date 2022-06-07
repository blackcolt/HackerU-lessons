import Header from "./Header";
import React from "react";
import Footer from "./Footer";

function PageWrapper(props) {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default PageWrapper;
