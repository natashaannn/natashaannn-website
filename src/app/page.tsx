import { PipIdle } from "@/lib/characters/Pip";
import { PoIdle } from "@/lib/characters/Po";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <div style={{ transform: "scale(2)"}}>
            <PipIdle />
          </div>
          <img
            src={"/avatar/avatar-front.png"}
            alt={"Pixel avatar of Natasha facing front."}
            style={{ display: "block" }}
          />
          <div style={{ transform: "scale(2)"}}>
            <PoIdle />
          </div>
        </div>
      </main>
    </div>
  );
}
