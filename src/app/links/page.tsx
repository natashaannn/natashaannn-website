"use client"

import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { GameButton } from "@/lib/button/GameButton";
import { IconBox } from "@/lib/icon/IconBox";
import { TypewriterWaveText } from "@/lib/animated-text/TypewriterWaveText";

const colors = {
  lightBlue: "var(--light-blue)",
  darkBlue: "var(--dark-blue)",
  lightGreen: "var(--light-green)",
  darkGreen: "var(--dark-green)",
  lightBrown: "var(--light-brown)",
  darkBrown: "var(--dark-brown)",
  background: "var(--background)",
};

type LinkData = {
  href: string;
  src: string;
  alt: string;
  color: string;
  label: string;
};

type LinkSection = {
  heading: string;
  firstColor: string;
  secondColor: string;
  links: LinkData[];
};

const linkSections: LinkSection[] = [
  {
    heading: "🐈‍⬛Personal",
    firstColor: colors.lightGreen,
    secondColor: colors.lightBrown,
    links: [
      {
        href: "https://www.instagram.com/natashaannn/",
        src: "/links/instagram.svg",
        alt: "instagram logo",
        color: colors.lightBrown,
        label: "INSTAGRAM (18k+)",
      },
      {
        href: "https://www.linkedin.com/in/natashaannn/",
        src: "/links/linkedin.svg.webp",
        alt: "linkedin logo",
        color: colors.background,
        label: "LINKEDIN (2k+)",
      },
      {
        href: "https://www.tiktok.com/@natashaannn",
        src: "/links/tiktok.svg",
        alt: "tiktok logo",
        color: colors.lightBrown,
        label: "TIKTOK (17k+)",
      },
      {
        href: "https://www.youtube.com/@natashaannn",
        src: "/links/youtube.png",
        alt: "youtube logo",
        color: colors.background,
        label: "YOUTUBE (NEW!)",
      },
      {
        href: "https://www.airbnb.com.sg/rooms/1543938397049504025?guests=1&adults=1&s=67&unique_share_id=e2e7773e-c45b-45a6-9e0a-da74874e0610&source_impression_id=p3_1772441580_P3rxCtl44dQ1qQXg",
        src: "/links/airbnb.png",
        alt: "airbnb logo",
        color: colors.lightBrown,
        label: "AIRBNB",
      },
      {
        href: "https://github.com/natashaannn",
        src: "/links/github.png",
        alt: "github logo",
        color: colors.background,
        label: "GITHUB",
      }
    ],
  },
  {
    heading: "ragTech🎙️Tech podcast",
    firstColor: colors.lightBlue,
    secondColor: colors.lightBrown,
    links: [
      {
        href: "https://linktr.ee/ragtechdev",
        src: "/links/ragtechlogo.webp",
        alt: "ragTech logo",
        color: colors.lightGreen,
        label: "BIWEEKLY EPISODES",
      },
	  {
		href: "https://ragtechdev.com/techie-taboo",
		src: "/links/ragtechlogo.webp",
		alt: "ragTech logo",
		color: colors.background,
		label: "CARD GAME WAITLIST",
	  },
	  	  {
		href: "https://ragtechdev.com/blog",
		src: "/links/ragtechlogo.webp",
		alt: "ragTech logo",
		color: colors.lightGreen,
		label: "READ OUR BLOG",
	  }
    ],
  },
  {
    heading: "Women devs sg👩🏻‍💻Tech community",
    firstColor: colors.lightGreen,
    secondColor: colors.lightBlue,
    links: [
      {
        href: "https://www.meetup.com/women-devs-sg/",
        src: "/links/womendevs.png",
        alt: "women devs sg logo",
        color: colors.lightBlue,
        label: "UPCOMING EVENTS",
      },
      {
        href: "https://linktr.ee/womendevssg",
        src: "/links/womendevs.png",
        alt: "women devs logo",
        color: colors.background,
        label: "STAY UPDATED",
      },
      {
        href: "https://github.com/orgs/Women-Devs-SG/repositories",
        src: "/links/womendevs.png",
        alt: "women devs logo",
        color: colors.lightBlue,
        label: "CONTRIBUTE CODE",
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {linkSections.map((section, sectionIndex) => (
            <div key={sectionIndex} suppressHydrationWarning>
              <TypewriterWaveText
                firstColor={section.firstColor}
                secondColor={section.secondColor}
              >
                {section.heading}
              </TypewriterWaveText>
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex} suppressHydrationWarning>
                  <Link href={link.href}>
                    <GameButton
                      color={link.color}
                      style={{ width: "auto" }}
                      className="game-button"
                    >
                      <IconBox>
                        <Image src={link.src} alt={link.alt} width={25} height={25} />
                      </IconBox>
                      {link.label}
                    </GameButton>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
      <style jsx>{`
       @media screen and (min-width: 48em) {
         .game-button {
           width: 90vw;
         }
       }

        @media screen and (min-width: 80em) {
          .game-button {
            width: 50vw;
          }
        }
      `}</style>
    </div>
  );
}
