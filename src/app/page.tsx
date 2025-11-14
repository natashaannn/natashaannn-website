import styles from "./page.module.css";
import { TypewriterWaveText } from "@/lib/animated-text/TypewriterWaveText";
import { NavLink } from "@/lib/nav/NavLink";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <div className={styles.header}>
          <h1>
            <TypewriterWaveText
              firstColor="var(--light-green)"
              secondColor="var(--dark-brown)"
            >
              Natasha Ann
            </TypewriterWaveText>
          </h1>
          <nav>
            <ul className={styles.navList}>
              <NavLink
                href="#scrapbook"
                activeColor="var(--dark-brown)"
                hoverColor="var(--light-green)"
              >
                📒 Scrapbook
              </NavLink>
              <NavLink
                href="#links"
                activeColor="var(--dark-brown)"
                hoverColor="var(--light-brown)"
              >
                🪴 Links
              </NavLink>
              <NavLink
                href="#contact"
                activeColor="var(--dark-brown)"
                hoverColor="var(--light-blue)"
              >
                🔔 Contact
              </NavLink>
            </ul>
          </nav>
        </div>

      </main>
    </div>
  );
}
