import React from "react";

import styles from "./LoadingComp.module.css";

const LoadingComp = () => {
  return (
    <div className={styles.loader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default LoadingComp;
