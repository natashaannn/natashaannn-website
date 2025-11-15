"use client";

import { useEffect, useRef, useState } from "react";
import { colors } from "@/lib/colors/colors";

export type ColorSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
};

export const ColorSelect = ({ label, value, onChange, isOpen, onToggle }: ColorSelectProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [dropdownTop, setDropdownTop] = useState<number | null>(null);
  const entries = Object.entries(colors);
  const currentEntry = entries.find(([, v]) => v === value) ?? entries[0];
  const [currentName, currentColor] = currentEntry;

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 600);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !isOpen || !buttonRef.current) return;

    const updatePosition = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      setDropdownTop(rect.bottom + 8); // 8px spacing below the button
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isMobile, isOpen]);

  return (
    <div
      style={{
        marginBottom: "0.25rem",
        position: "relative",
        display: "inline-block",
      }}
    >
      <label style={{ display: "block", marginBottom: "0.25rem" }}>{label}</label>
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggle}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          padding: "0.25rem 0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer",
          width: "max-content",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              display: "inline-block",
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: currentColor,
              border: "1px solid #ccc",
            }}
          />
          <span style={{ textTransform: "capitalize" }}>{currentName}</span>
        </span>
        <span style={{ fontSize: "0.75rem" }}>▼</span>
      </button>
      {isOpen && (
        <div
          style={{
            position: isMobile ? "fixed" : "absolute",
            zIndex: 10,
            marginTop: isMobile ? 0 : "0.25rem",
            maxHeight: "12rem",
            overflowY: "auto",
            background: "white",
            borderRadius: "4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            border: "1px solid #ddd",
            minWidth: isMobile ? "100vw" : "max-content",
            width: isMobile ? "100vw" : "auto",
            left: isMobile ? 0 : undefined,
            right: isMobile ? 0 : undefined,
            top: isMobile && dropdownTop !== null ? dropdownTop : undefined,
          }}
        >
          {entries.map(([name, hex]) => (
            <button
              type="button"
              key={name}
              onClick={() => {
                onChange(hex);
                onToggle();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "0.25rem 0.5rem",
                border: "none",
                background: hex === value ? "#f0f0f0" : "white",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: hex,
                  border: "1px solid #ccc",
                }}
              />
              <span style={{ textTransform: "capitalize" }}>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
