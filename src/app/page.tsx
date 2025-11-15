import Link from "next/link";
import { PipIdle } from "@/lib/characters/Pip";
import { PoIdle } from "@/lib/characters/Po";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.heroRow}>
          <Link href="/micromeow">
            <div className={styles.heroCharacter}>
              <PipIdle />
            </div>
          </Link>
          <img
            src={"/avatar/avatar-front.png"}
            alt={"Pixel avatar of Natasha facing front."}
            className={styles.heroAvatar}
          />
          <Link href="/micromeow">
            <div className={styles.heroCharacter}>
              <PoIdle />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
