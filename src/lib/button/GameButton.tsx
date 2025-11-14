"use client";

import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "./GameButton.module.css";

export type GameButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: string;
};

export const GameButton = ({
  color = "lightgrey",
  children,
  ...rest
}: GameButtonProps) => {
  const { className, style, ...buttonProps } = rest;

  return (
    <button
      {...buttonProps}
      className={`${styles.gameButton} ${className ?? ""}`.trim()}
      style={{ ...(style || {}), background: color }}
    >
      <div className={styles.inner}>{children}</div>
    </button>
  );
};
