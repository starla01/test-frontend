const fetch = require("node-fetch");
module.exports = (parent) => {
  const uri = `https://api.mercadolibre.com/items?ids=${parent.id}/description`;
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((res) => res[0]?.body?.plain_text);
};
