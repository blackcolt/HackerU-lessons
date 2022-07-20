// TYPES
const BUY_CAR = "BUY_CAR";

// ACTION
const buyCar = (quantity = 1) => {
  return {
    type: BUY_CAR,
    payload: {
      quantity,
    },
  };
};

// REDUCER
const initialState = {
  numberOfCars: 0,
};

const carsReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numberOfCars: state.numberOfCars - action.payload.quantity,
      };

    default:
      return state;
  }
};

const { createStore } = require("redux");

const store = createStore(carsReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(buyCar(3));
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyCar());
