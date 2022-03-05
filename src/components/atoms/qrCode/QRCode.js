import React from "react";
import styles from "./qrCode.module.css";

function QRCode() {
  return (
    <div>
      <img
        className={styles.qrCode}
        src={require("../../../assets/youtubeQR.png")}
      />
    </div>
  );
}

export default QRCode;
