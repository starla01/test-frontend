//Librerias
import { Link } from "react-router-dom";

//Styles
import styles from "./index.module.sass";

export default function Item({ el }) {
  const { free_shipping, id, picture, price, state_name, title } = el;
  const { amount } = price;
  return (
    <div className={styles.itemContainer}>
      <Link to={`/items/${id}`} className={styles.link}>
        <div className={styles.pictureItem}>
          <img className={styles.plpImage} src={picture} alt={title} />
        </div>
        <div className={styles.contentInfo}>
          <h3>
            <label>${amount} </label>
            {free_shipping && (
              <img
                src="/images/ic_shipping@2x.png"
                width="24"
                alt="Envio Gratis"
              />
            )}
          </h3>
          <h2>{title}</h2>
          <p className={styles.stateName}>{state_name}</p>
        </div>
      </Link>
    </div>
  );
}
