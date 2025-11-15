"use client";

import { useState } from "react";
import { GameDialogBox } from "@/lib/dialog/GameDialogBox";

type Props = {};

const natDialog = [
  "I’m a software engineer and storyteller who translates complex technology into clear, compelling narratives for the public, policymakers, and internal teams.",
  "With experience building first-of-its-kind apps, shaping technical strategy across organizations, and creating accessible content on TikTok, Instagram, and podcasts, I bridge the gap between engineering, society, and responsible AI.",
  "I combine systems thinking, research experience, and a passion for science communication to help people understand how emerging technologies work—and why they matter.",
  "These are my rescue cats from my time as a critical care kitten fosterer, Pip and Po.",
  "Thanks Pip. Po doesn't talk much but she's a great company. Click Pip or Po for a special surprise!",
];

export const LandingPrompt = (props: Props) => {
  const [page, setPage] = useState(0);
  const [pipDialog, setPipDialog] = useState(false);

  const handleNatClick = () => {
    if (page < natDialog.length - 2) {
      setPage(page + 1);
    } else if (page === natDialog.length - 2) {
      setPipDialog(true);
    } else {
      setPage(0);
      setPipDialog(false);
    }
  };

  const handlePipClick = () => {
    setPage(page + 1);
    setPipDialog(false);
  };

  return (
    <>
      {!pipDialog && (
        <GameDialogBox
          borderColor={"gray"}
          color="var(--light-brown)"
          header="Natasha Ann"
          buttonLabel={page === natDialog.length - 1 ? "RESTART" : "OK"}
          onClick={handleNatClick}
        >
          {natDialog[page]}
        </GameDialogBox>
      )}

      {pipDialog && (
        <GameDialogBox
          borderColor={"gray"}
          color="var(--light-green)"
          header="Pip"
          onClick={handlePipClick}
        >
          Meow.
        </GameDialogBox>
      )}
    </>
  );
};
