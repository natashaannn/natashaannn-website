import { ReactNode } from "react";

// Extracts all text from React children and returns an array of characters.
// Returns null if there is no text content.
export default function getChildrenLetters(children: ReactNode): string[] | null {
  const parts: string[] = [];

  const walk = (node: ReactNode): void => {
    if (node == null || typeof node === "boolean") return;

    if (typeof node === "string" || typeof node === "number") {
      parts.push(String(node));
      return;
    }

    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }

    if (typeof node === "object" && "props" in (node as any)) {
      const maybeChildren = (node as any).props?.children as ReactNode | undefined;
      if (maybeChildren !== undefined) {
        walk(maybeChildren);
      }
    }
  };

  walk(children);

  const text = parts.join("");
  if (!text) return null;

  return Array.from(text);
}
