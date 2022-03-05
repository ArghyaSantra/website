import React, { Component } from "react";
import ProductCardHeading from "./atoms/productCardHeading/ProductCardHeading";
import ProductCardBtnGroup from "./molecules/productCardBtnGroup/ProductCardBtnGroup";
import styles from "./productCard.module.css";

export class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.productCard}>
        <ProductCardHeading heading={this.props.heading} />
        <div>
          <img
            className={styles.productCardImage}
            src="https://www.craftcoffeeguru.com/wp-content/uploads/2020/03/mug.jpg"
          />
        </div>
        <ProductCardBtnGroup />
      </div>
    );
  }
}

export default ProductCard;
