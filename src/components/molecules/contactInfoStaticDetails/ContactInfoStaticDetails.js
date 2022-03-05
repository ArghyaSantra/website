import React, { Component } from "react";
import _map from "lodash/map";
import * as FontAwesome from "react-icons/fa";
import styles from "./contactInfoStaticDetails.module.css";
import BtnWithLogo from "../../atoms/btnWithLogo";

export class ContactInfoStaticDetails extends Component {
  constructor(props) {
    super(props);
    this.contactInfoDetails = [
      {
        id: 1,
        icon: "FaPhoneAlt",
        name: "9123414324",
      },
      {
        id: 2,
        icon: "FaMailBulk",
        name: "jaintextile@gmail.com",
      },
      {
        id: 3,
        icon: "FaMapMarkedAlt",
        name: "METRO STATION, Ajmer Rd, Mansarovar, Jaipur, Rajasthan, 302020",
      },
    ];
  }

  renderContactInfoDetailsSection() {
    return _map(this.contactInfoDetails, function render(item) {
      return (
        <div className={styles.btnDetailGroup}>
          <BtnWithLogo key={item.id} item={item} />
          <div className={styles.info}>{item.name}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.contactInfoDetailsSection}>
        {this.renderContactInfoDetailsSection()}
      </div>
    );
  }
}

export default ContactInfoStaticDetails;
