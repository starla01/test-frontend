// Environment
import env from "../env";

//Const
import { QUERY_PRODUCT, QUERY_SEARCH } from "../constants";
const uri = env.MAIN_GRAPHQL_ENDPOINT;

export default (dispatch) => ({
  get_item: (id) => {
    return fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        query: QUERY_PRODUCT,
        variables: { id },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const product = data?.data?.viewer?.detailProduct;
        dispatch({
          type: "GET_ITEM",
          payload: product,
        });
        return data;
      });
  },
  get_items: (strSearch) => {
    return fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        query: QUERY_SEARCH,
        variables: { strSearch },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const iList = data?.data?.viewer?.products;
        dispatch({
          type: "GET_ITEMS",
          payload: iList,
        });
        return data;
      });
  },
  setBreakpoint: (breakpoint) => {
    dispatch({ type: "SET_BREAKPOINT", payload: breakpoint });
  },
});
