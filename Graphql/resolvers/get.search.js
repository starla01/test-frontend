const fetch = require("node-fetch");
module.exports = (parent) => {
  const uri = `https:\/\/api.mercadolibre.com\/sites\/MLA\/search\?q\=\:retratos&limit=2`;
  return fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(JSON.stringify(res.results));
      const results = res.results;
      return results.map((element, key) => {
        return {
          id: "MLID",
          title: "title",
          price: {
            currency: "MXN",
            amount: 0,
            decimals: 0,
          },
          picture: "",
          condition: "",
          free_shipping: false,
        };
      });
    });
};
