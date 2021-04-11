const fetch = require("node-fetch");

function decimals(amount) {
  if (amount.toString().indexOf(".") > 0) {
    return amount.toString().split(".")[1];
  } else return 0;
}

module.exports = (parent, { id }) => {
  const uri = `https://api.mercadolibre.com/items?ids=${id}`;
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const data = res[0]?.body;
      const {
        id,
        title,
        pictures,
        condition,
        shipping,
        price,
        currency_id,
      } = data;
      const picture = pictures[0]?.url;
      return {
        id,
        title,
        state_name: "",
        price: {
          currency: currency_id,
          amount: price,
          decimals: decimals(price),
        },
        picture,
        condition,
        free_shipping: shipping?.free_shipping,
      };
    });
};
