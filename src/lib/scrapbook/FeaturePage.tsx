import Image from "next/image";
import Link from "next/link";
import { GameButton } from "@/lib/button/GameButton";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./FeaturePage.module.css";

export type Post = {
  title: string;
  heroImage: string;
  link: string;
  readMoreText?: string;
  summary: string;
};

type FeatureProps = Post &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    readMoreText?: string;
  };

export const Feature = ({
  title,
  heroImage,
  link,
  summary,
  className,
  readMoreText = "READ MORE",
  ...rest
}: FeatureProps) => {
  return (
    <>
      <section className={`${styles.featureContainer} ${className ?? ""}`} {...rest}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <h1 className={styles.title}>{title}</h1>
        </div>

        <div className={styles.featureContent}>
          <div className={styles.featureImageContainer}>
            <Image
              src={heroImage}
              alt={heroImage}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          <div>
            <p style={{ margin: "0px" }}>{summary}</p>
            <Link href={link}>
              <GameButton color="var(--light-green)">{readMoreText}</GameButton>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};