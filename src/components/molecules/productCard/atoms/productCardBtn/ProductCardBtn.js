import React from "react";
import Button from "@mui/material/Button";
import styles from "./productCardBtn.module.css";

function ProductCardBtn(props) {
  const { btnName } = props.item;
  return (
    <div className={styles.productCardBtn}>
      <Button variant="contained">{btnName}</Button>
    </div>
  );
}

export default ProductCardBtn;
