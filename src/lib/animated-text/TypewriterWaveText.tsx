"use client";

import { CSSProperties, PropsWithChildren } from "react";
import getChildrenLetters from "./getChildrenLetters";

export type TypewriterWaveTextProps = {
  firstColor: string;
  secondColor: string;
};

export const TypewriterWaveText = ({
  children,
  firstColor,
  secondColor,
}: PropsWithChildren<TypewriterWaveTextProps>) => {
  const letters = getChildrenLetters(children);

  if (!letters) {
    return null;
  }

  return (
    <>
      <span>
        {letters.map((letter: string, index: number) => {
          const style = {
            animationDelay: `${0.5 + index / 10}s`,
          } as CSSProperties;

          return (
            <span aria-hidden="true" key={index} style={style} suppressHydrationWarning={true}>
              {letter}
            </span>
          );
        })}
      </span>
      <style jsx>{`
        span {
          font-size: xx-large;
        }

        span span {
          color: ${firstColor};
          position: relative;
          opacity: 0;
          animation: move-text 4s infinite;
        }

        span span:nth-of-type(2n) {
          color: ${secondColor};
        }

        @keyframes move-text {
          0% {
            bottom: -0.1em;
            opacity: 1;
          }

          15% {
            bottom: 0em;
          }

          35% {
            bottom: 0.2em;
          }

          50%,
          100% {
            bottom: 0;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
