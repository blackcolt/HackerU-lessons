import React from "react";
function Product(props) {
  const updatAmount = () => {
    console.log(111);
  };

  let amount = 0;
  const {
    name = "",
    price = 0,
    description = "",
    isInStock = true,
    category = "",
  } = props;
  return (
    <div data-price={price}>
      <p data-role="amount">כמות:{amount}</p>
      <p>{name}</p>
      <pre>{description}</pre>
      <p>${price}</p>
      <p>במלאי:{isInStock ? "כן" : "לא"}</p>
      <p>קטגוריה:{category}</p>
      <button
        onClick={updatAmount}
        // data-attr={() => {
        // }}
      >
        קנה אותי
      </button>
    </div>
  );

  function idan(str) {
    console.log(str);
  }

  // const david = "11111";
  // const haim = "2222";
  // idan(david);
  // idan(haim);

  // idan("aSasaS");

  // const fn = () => {
  //   console.log(111);
  // };

  // moshe(fn);

  // function moshe(callback) {
  //   callback();
  // }

  function callback() {
    console.log("this is a callback");
    return 5;
  }

  function passMeAfunc(fn) {}

  passMeAfunc(callback());
  passMeAfunc(callback);
}

export default Product;
