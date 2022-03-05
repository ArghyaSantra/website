import React from "react";
import styles from "./sectionContent.module.css";

function SectionContent(props) {
  const { children } = props;
  return <div className={styles.sectionContent}>{children}</div>;
}

export default SectionContent;
