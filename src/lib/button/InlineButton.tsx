"use client";

import { AnchorHTMLAttributes, DetailedHTMLProps, CSSProperties } from "react";
import styles from "./InlineButton.module.css";

export type InlineButtonProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  primaryColor?: string; // background
  secondaryColor?: string; // border + text
};

export const InlineButton = ({
  children,
  primaryColor,
  secondaryColor,
  ...rest
}: InlineButtonProps) => {
  const { className, style, ...anchorProps } = rest;

  const inlineStyle: CSSProperties = {
    ...(style || {}),
    ...(primaryColor ? { backgroundColor: primaryColor } : {}),
    ...(secondaryColor
      ? { borderColor: secondaryColor, color: secondaryColor }
      : {}),
  };

  return (
    <a
      {...anchorProps}
      className={`${styles.inlineButton} ${className ?? ""}`.trim()}
      style={inlineStyle}
    >
      {children}
    </a>
  );
};
