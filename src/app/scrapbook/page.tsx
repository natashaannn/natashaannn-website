"use client";

import styles from "../page.module.css";
import scrapbookStyles from "./page.module.css";
import ResponsiveGrid from "@/lib/scrapbook/ResponsiveGrid";
import { Feature } from "@/lib/scrapbook/FeaturePage";
import { Gallery } from "@/lib/scrapbook/GalleryPage";
import { scrapbookPosts } from "@/lib/scrapbook/posts";
import { useState } from "react";

export default function ScrapbookPage() {
  const [displayedPost, setDisplayedPost] = useState(0);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={scrapbookStyles["scrapbook-background"]}>
          <ResponsiveGrid className="scrapbook__aspect-ratio">
            <Feature
              {...scrapbookPosts[displayedPost]}
              className="scrapbook-page__container"
            />
            <Gallery
              header="Scrapbook"
              allPosts={scrapbookPosts}
              onPostClick={setDisplayedPost}
              className="scrapbook-page__container"
            />
          </ResponsiveGrid>
        </div>
      </main>
    </div>
  );
}