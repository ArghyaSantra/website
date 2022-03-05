import React from "react";
import ContactInfoClickables from "../../molecules/contactInfoClickables";
import ContactInfoStaticDetails from "../../molecules/contactInfoStaticDetails";
import styles from "./headerAndContacts.module.css";

function HeaderAndContacts() {
  return (
    <div className={styles.headerAndContacts}>
      <img src="https://cdn.dribbble.com/users/6151196/screenshots/14330138/media/3184bbe0dc087cf9218212d33c916828.jpg?compress=1&resize=400x300" />
      <div>
        <h1>Eco Evergreen Tableware</h1>
        <h2>Product/Service</h2>
        <ContactInfoClickables />
        <ContactInfoStaticDetails />
      </div>
    </div>
  );
}

export default HeaderAndContacts;
