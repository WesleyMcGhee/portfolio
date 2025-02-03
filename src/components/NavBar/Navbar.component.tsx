"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { CaretDown, CaretUp, House } from "@phosphor-icons/react";

export function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  function handleExpand() {
    setOpen(!isOpen);
  }

  return (
    <div
      className={`${styles.navbarContainer} ${
        isOpen ? styles.navbarContainerOpened : styles.navbarContainerClosed
      }`}
    >
      <div>
        <h1 className={styles.logo}>WM</h1>
        <div className={styles.expandContainer} onClick={handleExpand}>
          {isOpen ? <CaretUp size={20} /> : <CaretDown size={20} />}
        </div>
      </div>
      {isOpen ?? (
        <div>
          <House size={35} />
        </div>
      )}
    </div>
  );
}
