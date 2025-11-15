import Image from "next/image";
import Link from "next/link";
import { GameButton } from "@/lib/button/GameButton";
import { DetailedHTMLProps, HTMLAttributes } from "react";

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
      <section className={`feature__container ${className ?? ""}`} {...rest}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <h1 style={{ alignSelf: "flex-start", textAlign: "left" }}>{title}</h1>
          <p style={{ alignSelf: "flex-end", textAlign: "right" }}>{reformatDate(date)}</p>
        </div>

        <div className='feature__content-container'>
          <div className={"feature__image-container"}>
            <Image
              src={heroImage}
              alt={heroImage}
              fill
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
      <style jsx>{`
        .feature__container {
          padding: 0% 8% 0% 8%;
        }

        .feature__content-container {
          display: flex;
          flex-direction: row;
          height: 100%;
          overflow: scroll;
        }

        .feature__image-container {
          position: relative;
        }

        @media (min-width: 500px) {
          .feature__container {
            padding: 10% 8% 0% 10%;
          }
          .feature__content-container {
            flex-direction: column;
          }
          .feature__image-container {
            width: 100%;
            height: 50%;
          }
        }
      `}</style>
    </>
  );
};