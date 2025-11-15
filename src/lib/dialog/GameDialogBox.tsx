"use client"

import getChildrenLetters from "./utils/getChildrenString";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { GameButton } from "../button/GameButton";

type GameDialogBoxProps = {
  header: string;
  color: string;
  borderColor: string;
  onClick: () => void;
  buttonLabel?: string;
}

export const GameDialogBox = ({ borderColor, buttonLabel, children, color, header, onClick }: PropsWithChildren<GameDialogBoxProps>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const letters = getChildrenLetters(children);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!letters || letters.length === 0) {
      setDisplayedText("");
      setIsComplete(true);
      return;
    }

    // reset
    setDisplayedText("");
    setIsComplete(false);

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setDisplayedText(letters.slice(0, index).join(""));

      if (index >= letters.length) {
        window.clearInterval(id);
        intervalRef.current = null;
        setIsComplete(true);
      }
    }, 30);

    intervalRef.current = id;

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [letters]);

  const handleClick = () => {
    if (!letters || letters.length === 0) {
      onClick();
      return;
    }

    // If text isn't fully revealed yet, reveal it instead of advancing
    if (!isComplete) {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayedText(letters.join(""));
      setIsComplete(true);
      return;
    }

    // Once complete, advance to the next dialog
    onClick();
  }
  
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          margin: "0 auto",
          padding: "5px",
          border: "1px solid #888",
          width: "100%",
          maxWidth: "640px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "7px",
          boxShadow: "0 .2em gray",
        }}
      >
        <span
          style={{
            padding: "5px",
          }}
        >
          {header}
        </span>
        <div
          style={{
            backgroundColor: color,
            filter: "brightness(110%)",
            padding: "20px",
            borderRadius: "2px",
            border: `1px solid ${borderColor}`,
          }}
        >
          <div>{displayedText}</div>
        </div>
        <div
          style={{
            margin: "auto",
            padding: "5px",
          }}
        >
          <GameButton onClick={handleClick} color={color}>
            {buttonLabel ?? "OK"}
          </GameButton>
        </div>
      </div>
    </>
  )
}