import styles from "./page.module.css";
import { TypewriterWaveText } from "@/lib/animated-text/TypewriterWaveText";

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
          </div>

      </main>
    </div>
  );
}
