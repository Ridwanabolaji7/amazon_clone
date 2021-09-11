export const initialState = {
  basket: [],
  logginUser: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "SET_LOGIN":
      return {
        ...state,
        logginUser: action.user,
      };
    // case "REMOVE_FROM_CART":
    //   let newCart = [...state.basket];
    //   const index = state.basket.findIndex(
    //     (basketItem) => basketItem.id === action.id
    //   );
    //   if (index >= 0) {
    //     newCart.splice(index, 1);
    //   } else {
    //     console.log("erro removing item from the cart");
    //   }
    //   return { ...state, basket: newCart };
    //   console.log(newCart);
  }
};

export default reducer;
