import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Post } from "./FeaturePage";

type GalleryProps = {
    header: string;
    allPosts: Post[];
    onPostClick: (i: number) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>,HTMLElement>

export const Gallery = ({ header, allPosts, onPostClick, className, ...rest }: GalleryProps) => {
  const [circled, setCircled] = useState(0)
  return (
    <>
    <section className={className} {...rest}>
      <h1>{header}</h1>
      <ul>
        {allPosts && allPosts.length > 0 &&
          allPosts.map((post, i) => (
            <li
            key={post.slug}
            onMouseOver={() => onPostClick(i)} 
            onMouseLeave={() => onPostClick(i)}
            onClick={() => { 
              onPostClick(i);
              setCircled(i)
            }}>
              <div className={`gallery_image-container ${i == circled ? "gallery_image-circled" : ""}`}>
                <div className={'gallery_image'}>
                  <Image
                    src={post.heroImage}
                    alt={post.heroImage}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
    <style jsx>{`
      ul {
        list-style-type: none; /* Remove bullets */
        margin: 0; /* Remove margins */
        padding-left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
      }

      li {
        transition: 0.3s;
        width: 12em;
        height: 12em;
      }

      .gallery_image:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }

      .gallery_image {
        position: relative;
        width: 68%;
        height: 68%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      }

      .gallery_image-container {
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        display: flex; /* Add flexbox display properties as needed */
      }

      .gallery_image-circled {
        border: 3px solid IndianRed  ;
        border-radius: 100% 70% 130%;
        transform: rotate(-5deg);
      }

      @media screen and (max-width: 500px) {
        li {
          width: 6em;
          height: 6em;
        }
      }
    `}</style>
    </>
  )
}