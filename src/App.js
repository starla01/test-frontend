// Librerias
import { Switch, Route, useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";

// Components
import ProductDetail from "./components/ProductDetail";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const history = useHistory();
  const params = queryString.parse(history.location.search);
  return (
    <div className="testMercadoLibre">
      <Header />
      <div>
        <Switch>
          <Route
            exact
            path="/items"
            children={<Search search={params.search} />}
          />
          <Route path="/items/:id" children={<ProductDetail />} />
        </Switch>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default withRouter(App);
