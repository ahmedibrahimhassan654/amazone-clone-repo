export const initialState = {
  basket: [],
};
export const calculateSum = (basket) => {
  return basket?.reduce((price, item) => item.price + price, 0);
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
