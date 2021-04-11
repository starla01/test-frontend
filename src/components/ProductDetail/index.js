// Librerias
import { useEffect } from "react";
import { useParams } from "react-router-dom";

//Estilos
import styles from "./index.module.sass";

export default function ProductDetail({ actions, state }) {
  const { product } = state;
  const { condition, description, picture, price, title } = product;
  let { id } = useParams();
  useEffect(() => {
    actions.get_item(id);
  }, [id]);
  const conditions = (condition === "new" && "Nuevo") || "Usado";
  const { amount } = price || {};
  return (
    <div className={styles.containerDetail}>
      <div className={styles.detail}>
        <div className={styles.mainDetail}>
          <div className={styles.picture}>
            <img src={picture} alt={title} loading="lazy" />
          </div>
          {condition && (
            <div className={styles.info}>
              <div className={styles.contentInfo}>
                <p className={styles.condition}>{conditions}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.amount}>${amount}</p>
                <div className={styles.addToCart}>Comprar</div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.description}>
          <h1>Descripcion del producto</h1>
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
    </div>
  );
}
