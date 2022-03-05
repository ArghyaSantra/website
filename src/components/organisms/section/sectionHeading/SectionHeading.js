import React from "react";
import styles from "./sectionHeading.module.css";

function SectionHeading(props) {
  const { sectionHeading } = props;
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionText}>{sectionHeading}</div>
    </div>
  );
}

export default SectionHeading;
