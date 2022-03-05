import React from "react";
import styles from "./productCardHeading.module.css";

function ProductCardHeading(props) {
  const { heading } = props;
  return (
    <div className={styles.cardHeading}>
      <h1 className={styles.mainHeading}>{heading}</h1>
    </div>
  );
}

export default ProductCardHeading;
