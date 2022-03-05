import React from "react";
import _map from "lodash/map";
import ProductCardBtn from "../../atoms/productCardBtn";
import styles from "./productCardBtnGroup.module.css";

function ProductCardBtnGroup() {
  const btnCardGroup = [
    {
      id: 1,
      btnName: "ENQUIRY NOW",
    },
    {
      id: 2,
      btnName: "RATES NOW",
    },
  ];

  function renderProductCardBtnGroup() {
    return _map(btnCardGroup, function render(item) {
      return <ProductCardBtn key={item.id} item={item} />;
    });
  }
  return (
    <div className={styles.productCardBtnGroup}>
      {renderProductCardBtnGroup()}
    </div>
  );
}

export default ProductCardBtnGroup;
