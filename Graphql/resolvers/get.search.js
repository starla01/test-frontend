const fetch = require("node-fetch");

function decimals(amount) {
  if (amount.toString().indexOf(".") > 0) {
    return amount.toString().split(".")[1];
  } else return 0;
}

module.exports = (parent, { strSearch }) => {
  const uri = `https:\/\/api.mercadolibre.com\/sites\/MLA\/search\?q\=\:${strSearch}&limit=4`;
  return fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const results = res.results;
      return results.map(
        ({ id, title, prices, shipping, condition, address, thumbnail }) => {
          return {
            id,
            title,
            state_name: address?.state_name,
            price: {
              currency: prices?.prices[0]?.currency_id,
              amount: prices?.prices[0]?.amount,
              decimals: decimals(prices?.prices[0]?.amount),
            },
            picture: thumbnail,
            condition,
            free_shipping: shipping?.free_shipping,
          };
        }
      );
    });
};
