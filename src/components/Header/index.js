// Librerias
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

//Styles
import styles from "./index.module.sass";

export default function Header() {
  const [strSearch, setStrSearch] = useState(null);
  let history = useHistory();
  function handleSearch(e) {
    setStrSearch(e.target.value);
  }

  function handleRedirection(e) {
    var key = e.keyCode || e.which;
    if (key === 13) {
      history.push(`/items?search=${strSearch}`);
    }
  }

  const handleClickRedirection = () =>
    strSearch && strSearch.length && history.push(`/items?search=${strSearch}`);

  return (
    <div className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/images/Logo_ML@2x.png" alt="Mercado Libre" />
          </Link>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              onChange={handleSearch}
              className={styles.inputText}
              onKeyPress={handleRedirection}
              placeholder="Nunca dejes de buscar"
            />
          </div>
          <div className={styles.searchButton} onClick={handleClickRedirection}>
            <img src="/images/ic_Search@2x.png" alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
}
