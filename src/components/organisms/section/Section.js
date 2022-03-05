import React from "react";
import SectionHeading from "./sectionHeading";
import ProductCard from "../../molecules/productCard/ProductCard";
import SectionContent from "./sectionContent";
import styles from "./section.module.css";

function Section(props) {
  const { children, sectionHeading } = props;
  return (
    <div className={styles.section}>
      <SectionHeading sectionHeading={sectionHeading} />
      <SectionContent>{children}</SectionContent>
    </div>
  );
}

export default Section;
