import React, { Component } from "react";
import styles from "./btnWithNameAndLogo.module.css";

import * as FontAwesome from "react-icons/fa";

export class BtnWithNameAndLogo extends Component {
  constructor(props) {
    super(props);
    const { icon } = this.props.item;
    this.faIcon = FontAwesome[icon];
  }
  render() {
    const { name } = this.props.item;
    return (
      <div className={styles.btnWithNameAndLogo}>
        <span className={styles.logo}>{<this.faIcon />}</span>
        <span className={styles.name}>{name}</span>
      </div>
    );
  }
}

export default BtnWithNameAndLogo;
