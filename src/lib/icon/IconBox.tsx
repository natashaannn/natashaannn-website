"use client";

import { PropsWithChildren } from "react";

type IconBoxProps = {
  background?: string;
};

export const IconBox = ({
  children,
  background = "white",
}: PropsWithChildren<IconBoxProps>) => {
  return (
    <>
      <i className="icon" suppressHydrationWarning>
        {children}
      </i>
      <style jsx>{`
        .icon {
          background: ${background};
          -webkit-border-radius: 7px;
          -moz-border-radius: 7px;
          -o-border-radius: 7px;
          border-radius: 7px;
          box-shadow: 0 0.2em gray;
          vertical-align: middle;
          position: relative;
          width: 25px;
          height: 25px;
          filter: grayscale(1);
          flex-shrink: 0;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};
