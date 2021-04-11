// Librerias
import { useEffect } from "react";

//Componentes
import Item from "./Item";

//Estilos
import styles from "./index.module.sass";

export default function Search({ search, actions, state }) {
  useEffect(() => {
    actions.get_items(search);
  }, [search]);
  return (
    <div className={styles.plp}>
      <div className={styles.content}>
        {state?.items?.map((el, key) => (
          <Item key={key} el={el} />
        ))}
      </div>
    </div>
  );
}
