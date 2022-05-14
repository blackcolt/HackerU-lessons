import React from "react";

function Promotion(props) {
  const bigStyle = {
    backgroundColor: "red",
    color: "red",
  };
  const { deal, precentage } = props;
  if (!deal || !precentage) return null;
  return (
    <p className="h1" style={precentage > 10 ? bigStyle : {}}>
      {deal}, {precentage}%
    </p>
  );
}

export default Promotion;
