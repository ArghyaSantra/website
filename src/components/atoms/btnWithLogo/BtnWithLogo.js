import React, { Component } from "react";
import styles from "./btnWithLogo.module.css";

import * as FontAwesome from "react-icons/fa";

export class BtnWithLogo extends Component {
  constructor(props) {
    super(props);
    const { icon } = this.props.item;
    this.faIcon = FontAwesome[icon];
  }
  render() {
    return (
      <div className={styles.btnWithLogo}>
        <span className={styles.logo}>{<this.faIcon />}</span>
      </div>
    );
  }
}

export default BtnWithLogo;
