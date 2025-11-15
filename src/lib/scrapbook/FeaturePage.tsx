import Image from "next/image";
import Link from "next/link";
import { GameButton } from "@/lib/button/GameButton";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./FeaturePage.module.css";

function reformatDate(fullDate: string) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

export type Post = {
  slug: string;
  title: string;
  date: string;
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
  slug,
  title,
  date,
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
          <h1 style={{ alignSelf: "flex-start", textAlign: "left" }}>{title}</h1>
          <p style={{ alignSelf: "flex-end", textAlign: "right" }}>{reformatDate(date)}</p>
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
            <p>{summary}</p>
            <Link href={link ?? { pathname: `/scrapbook/${slug}` }}>
              <GameButton color="var(--light-green)">{readMoreText}</GameButton>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};