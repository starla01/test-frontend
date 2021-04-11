//Librerias
import queryString from "query-string";

//Estilos
import styles from "./index.module.sass";

export default function BreadCrumb({ state, history }) {
  const path = history?.location?.pathname;
  const search = history?.location?.search;
  const params = queryString.parse(search);
  const title = state?.product?.title;
  const page = (path === "/items" && "Buscador") || "Detalle de producto";

  return (
    <div className={styles.containerBreadCrumb}>
      <div className={styles.breadCrumb}>
        {page} > <b>{(path === "/items" && params.search) || title}</b>
      </div>
    </div>
  );
}
