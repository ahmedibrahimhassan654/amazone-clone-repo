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
    case "REMOVE_FROM_BaSKET":
      //مش هتنفع دى علشان هيشيل كل المنتجات اللى انا اخترتها اللى بنفس ال اى دى
      // return {
      //   ...state,
      //   basket: state.basket.filter((item) => item.id !== action.id),
      // };
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product(id:${action.id} with name ${action.name}) as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
     
    default:
      return state;
  }
};

export default reducer;
