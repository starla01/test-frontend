// Librerias
import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";

// Components
import ProductDetail from "./components/ProductDetail";
import Search from "./components/Search";
import Header from "./components/Header";
import BreacCrumb from "./components/BreadCrumb";

// Context
import { Context } from "./Providers";

//Styles
import styles from "./app.sass";

function App({ history }) {
  const { state, actions } = useContext(Context);
  const params = queryString.parse(history.location.search);
  return (
    <div className={styles.testMercadoLibre}>
      <Header />
      {history.location.pathname !== "/" && (
        <BreacCrumb state={state} history={history} />
      )}
      <div>
        <Switch>
          <Route
            exact
            path="/items"
            children={
              <Search search={params.search} actions={actions} state={state} />
            }
          />
          <Route
            path="/items/:id"
            children={<ProductDetail actions={actions} state={state} />}
          />
        </Switch>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default withRouter(App);
