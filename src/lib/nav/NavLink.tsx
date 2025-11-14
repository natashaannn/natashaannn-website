"use client";

import { CSSProperties, PropsWithChildren } from "react";

export type NavLinkProps = {
  href: string;
  activeColor: string;
  hoverColor: string;
};

export const NavLink = ({
  activeColor,
  children,
  href,
  hoverColor,
}: PropsWithChildren<NavLinkProps>) => {
  return (
    <li>
      <a
        href={href}
        style={{
          "--nav-active-color": activeColor,
          "--nav-hover-color": hoverColor,
        } as CSSProperties}
      >
        {children}
      </a>
    </li>
  );
};
