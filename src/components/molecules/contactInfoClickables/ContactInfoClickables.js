import React from "react";
import styles from "./contactInfoClickables.module.css";
import ReactWhatsapp from "react-whatsapp";

import _map from "lodash/map";
import BtnWithNameAndLogo from "../../atoms/btnWithNameAndLogo";

function ContactInfoClickables() {
  const contactInfoList = [
    {
      id: 1,
      icon: "FaPhoneAlt",
      name: "Call",
    },
    {
      id: 2,
      icon: "FaWhatsapp",
      name: "WhatsApp",
    },
    {
      id: 3,
      icon: "FaMapMarkerAlt",
      name: "Direction",
    },
    {
      id: 4,
      icon: "FaMailBulk",
      name: "Mail",
    },
  ];

  function renderContactInfoBar() {
    return _map(contactInfoList, function render(item) {
      return (
        <>
          <BtnWithNameAndLogo key={item.id} item={item} />
          <p>
            My whatsapp +1 987654321{" "}
            <a href="https://api.whatsapp.com/send?phone=9829113757">Web</a> |{" "}
            <br />
            {/*<a href="whatsapp://send?phone=0000000000">App</a>*/}
            <br />
          </p>
          {/*<ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />*/}
          <a href="tel:+9971863733">Call: 9971863733</a>
        </>
      );
    });
  }

  return <div className={styles.contactInfoBar}>{renderContactInfoBar()}</div>;
}

export default ContactInfoClickables;
