"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Book, CaretDown, CaretUp, House } from "@phosphor-icons/react";
import Link from "next/link";

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
      <div>
        {isOpen && (
          <div className={styles.linksContainer}>
            <Link href="/">
              <div className={styles.linkContainer}>
                <House size={35} color="white" />
              </div>
            </Link>
            <Link href="/blog">
              <div className={styles.linkContainer}>
                <Book size={35} color="white" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
