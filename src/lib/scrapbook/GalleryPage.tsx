import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Post } from "./FeaturePage";
import styles from "./GalleryPage.module.css";

type GalleryProps = {
    header: string;
    allPosts: Post[];
    onPostClick: (i: number) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>,HTMLElement>

export const Gallery = ({ header, allPosts, onPostClick, className, ...rest }: GalleryProps) => {
  const [circled, setCircled] = useState(0);

  return (
    <>
      <section className={`${styles.gallery} ${className ?? ""}`} {...rest}>
        <h1>{header}</h1>
        <ul className={styles.galleryList}>
          {allPosts?.map((post, i) => (
            <li
              key={post.slug}
              className={styles.galleryItem}
              onMouseOver={() => onPostClick(i)}
              onMouseLeave={() => onPostClick(i)}
              onClick={() => {
                onPostClick(i);
                setCircled(i);
              }}
            >
              <div
                className={`${styles.galleryImageContainer} ${
                  i === circled ? styles.galleryImageCircled : ""
                }`}
              >
                <div className={styles.galleryImage}>
                  <Image
                    src={post.heroImage}
                    alt={post.heroImage}
                    fill
                    sizes="(max-width: 768px) 40vw, 12em"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};