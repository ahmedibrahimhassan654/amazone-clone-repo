export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
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
