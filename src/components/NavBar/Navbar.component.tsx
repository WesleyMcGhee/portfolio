"use client";

import { Book, CaretDown, CaretUp, House } from "@phosphor-icons/react";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  function handleToggle() {
    setOpen(!isOpen);
  }

  return (
    <div className={`${styles.navbar} ${isOpen ? styles.navbarOpen : styles.navbarClosed}`}>
      <div className={styles.logoContainer}>
        <h1>WM</h1>
        <div onClick={handleToggle}>
          {isOpen ? <CaretUp size={20} /> : <CaretDown size={20} />}
        </div>
      </div>
      {isOpen && (
        <div className={styles.linksContainer}>
          <Link href="/">
            <div className={styles.linkContainer}>
              <House size={35} />
            </div>
          </Link>
          <Link href="/blog">
            <div className={styles.linkContainer}>
              <Book size={35} />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
