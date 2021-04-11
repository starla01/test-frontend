const location = window.location.href;
const isLocal = location.includes("localhost");

const localConfig = {
  MAIN_GRAPHQL_ENDPOINT: "http://localhost:2020/_graphql",
};

const productionConfig = {
  MAIN_GRAPHQL_ENDPOINT: "/_graphql",
};
const env = isLocal ? localConfig : productionConfig;

export default env;
