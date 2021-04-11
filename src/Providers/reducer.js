export default (state, action) => {
  if (action.type === "GET_ITEM") {
    return {
      ...state,
      product: action.payload,
    };
  } else if (action.type === "GET_ITEMS") {
    return {
      ...state,
      items: action.payload,
      product: "",
    };
  } else if (action.type === "SET_BREAKPOINT") {
    return {
      ...state,
      breakpoint: action.payload,
    };
  }
  return state;
};
