"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { TypewriterWaveText } from "@/lib/animated-text/TypewriterWaveText";
import { NavLink } from "@/lib/nav/NavLink";

export function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <Link href="/">
          <span className={styles.titleRow}>
            <Image
              src="/favicon/favicon-32x32.png"
              alt="Natasha Ann favicon"
              width={28}
              height={28}
              className={styles.favicon}
              sizes="28px"
            />
            <TypewriterWaveText
              firstColor="var(--light-green)"
              secondColor="var(--dark-brown)"
            >
              Natasha Ann
            </TypewriterWaveText>
            <Image
              src="/favicon/favicon-32x32.png"
              alt="Natasha Ann favicon"
              width={28}
              height={28}
              className={styles.favicon}
              sizes="28px"
            />
          </span>
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <NavLink
            href="/scrapbook"
            activeColor="var(--dark-brown)"
            hoverColor="var(--light-green)"
          >
            📒 Scrapbook
          </NavLink>
          <NavLink
            href="/links"
            activeColor="var(--dark-brown)"
            hoverColor="var(--light-brown)"
          >
            🪴 Links
          </NavLink>
          <NavLink
            href="/contact"
            activeColor="var(--dark-brown)"
            hoverColor="var(--light-blue)"
          >
            🔔 Contact
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
