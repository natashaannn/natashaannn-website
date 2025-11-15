"use client";

import { useId } from "react";

export type MicroMeowProps = {
  color: string;
  eyeColor: string;
  shadeColor?: string;
  mPattern?: string;
  furTip?: string;
  shortTail?: boolean;
  eyesClosed?: boolean;
  pose?: "sphinx" | "lowCrouch";
  width?: number;
  height?: number;
};

export const MicroMeow = ({
  color,
  eyeColor,
  shadeColor,
  mPattern,
  furTip,
  shortTail,
  eyesClosed,
  pose = "sphinx",
  width,
  height,
}: MicroMeowProps) => {
  const uid = useId();
  const earOuterId = `${uid}-earOuterFill`;
  const earInnerId = `${uid}-earInnerFill`;
  const earTopShadeId = `${uid}-earTopShade`;
  const faceFillId = `${uid}-faceFill`;
  const eyeId = `${uid}-eye`;
  const mPatternId = `${uid}-mPattern`;
  const svgWidth = width ?? 64;
  const svgHeight = height ?? 52;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,16,13"
        width={svgWidth}
        height={svgHeight}
        style={{ imageRendering: "pixelated", display: "block" }}
      >
        <g id="body" transform="translate(6,3)">
          <g
            transform="translate(0,1)"
            fill={color}
            stroke={color}
            strokeWidth={0.1}
          >
            <rect width="6" height="1" />
            <rect y="1" width="8" height="1" />
            <rect y="2" width="8" height="2" />
            {furTip && renderBodyFurTip(furTip)}
          </g>
          <g
            fill={shadeColor ?? color}
            stroke={shadeColor ?? color}
            strokeWidth={0.1}
          >
            <rect width="6" height="1" />
            <rect x="7" y="2" width="1" height="3" />
            <rect y="5" width="8" height="1" />
            <rect x="6" y="1" width="1" height="1" />
          </g>
        </g>

        <g id="arm" transform="translate(0,7)">
          <g fill={color} stroke={color} strokeWidth={0.1}>
            <rect width="1" height="1" />
            <rect width="6" height="1" />
            {furTip && renderArmFurTip(furTip)}
          </g>
          <g
            fill={shadeColor ?? color}
            stroke={shadeColor ?? color}
            strokeWidth={0.1}
          >
            <rect y="1" width="6" height="1" />
          </g>
        </g>

        <g id="tail" transform="translate(11,5)">
          <g fill={color} stroke={color} strokeWidth={0.1}>
            {shortTail ? renderShortTail() : renderLongTail()}
          </g>
          <g
            fill={shadeColor ?? color}
            stroke={shadeColor ?? color}
            strokeWidth={0.1}
          >
            {shortTail ? renderShortTailShade() : renderLongTailShade()}
          </g>
        </g>

        <g
          id="head"
          transform={
            pose == "sphinx"
              ? "translate(1,0)"
              : pose == "lowCrouch"
              ? "translate(1,1)"
              : "translate(1,0)"
          }
        >
          <g id="ear">
            <g id="earFill">
              <g
                id={earOuterId}
                fill={color}
                stroke={color}
                strokeWidth={0.1}
              >
                <rect width="3" height="2" x="0" y="0" />
              </g>
              <use xlinkHref={`#${earOuterId}`} transform="translate(8,0) scale(-1,1)" />
              <g fill="pink" id={earInnerId}>
                <rect
                  width="1"
                  height="1"
                  x="0"
                  y="1"
                  opacity={0.3}
                  filter="brightness(50%)"
                />
                <rect width="1" height="2" opacity={0.8} />
              </g>
              <use xlinkHref={`#${earInnerId}`} transform="translate(7,0) scale(-1,1)" />
            </g>
            <g
              id="earShade"
              fill={shadeColor ?? color}
              stroke={shadeColor ?? color}
              strokeWidth={0.1}
            >
              <rect x="2" width="1" height="1" id={earTopShadeId} />
              <use xlinkHref={`#${earTopShadeId}`} transform="translate(5,0) scale(1,1)" />
              <rect x="7" y="1" width="1" height="1" opacity={0.4} />
            </g>
          </g>

          <g id="face" transform="translate(0,1)">
            <g
              id={faceFillId}
              fill={color}
              stroke={color}
              strokeWidth={0.1}
            >
              <rect height="1" width="1" x="4" />
              <rect height="3" width="1" y="1" />
              <rect height="1" width="1" x="1" y="4" />
              <rect width="3" height="3" x="1" y="1" />
              <rect width="2" height="2" x="2" y="4" />
            </g>
            <use xlinkHref={`#${faceFillId}`} transform="translate(8,0) scale(-1,1)" />

            <g
              transform="translate(0,0)"
              fill={shadeColor ?? color}
              stroke={shadeColor ?? color}
              strokeWidth={0.1}
            >
              <rect height="1" width="4" x="2" y="5" />
              <rect height="1" width="1" x="6" y="4" />
              <rect height="4" width="1" x="7" />
            </g>

            {eyesClosed ? (
              <g id={eyeId} transform="translate(1,3)">
                <rect width="2" height="0.5" fill="gray" />
              </g>
            ) : (
              <g id={eyeId} transform="translate(1,2)">
                <rect
                  width="1"
                  height="1"
                  x="1"
                  fill={eyeColor}
                  stroke={eyeColor}
                  strokeWidth={0.1}
                  filter={`brightness(50%)`}
                />
                <rect
                  width="1"
                  height="1"
                  x="1"
                  y="1"
                  fill={eyeColor}
                  stroke={eyeColor}
                  strokeWidth={0.1}
                />
                <rect width="1" height="1" x="1" y="2" fill="pink" opacity={0.2} />
              </g>
            )}
            <use xlinkHref={`#${eyeId}`} transform="translate(8,0) scale(-1,1)" />
          </g>

          {mPattern && renderMPattern(mPattern, mPatternId)}
        </g>
      </svg>
    </>
  );
};

const renderMPattern = (color: string, id: string) => {
  return (
    <>
      <g id={id} transform="translate(2,1)" fill={color} opacity={0.8}>
        <rect width="1.25" height="1" x="2" />
        <rect width="0.25" height="1" x="1" y="1" />
        <rect width="0.25" height="1" x="2" y="1" />
      </g>
      <use xlinkHref={`#${id}`} transform="translate(8,0) scale(-1,1)" />
    </>
  );
};

const renderBodyFurTip = (color: string) => {
  return (
    <g id="furTip" fill={color} stroke={color} opacity={0.3}>
      <rect x="3" width="2" height="0.5" opacity={0.7} />
      <rect x="5.5" y="1" width="1.5" height="0.75" />
      <rect x="1" y="1" width="4" height="0.5" opacity={0.7} />
      <rect x="1" y="1" width="3" height="0.75" opacity={0.5} />
    </g>
  );
};

const renderArmFurTip = (color: string) => {
  return (
    <g id="furTip" fill={color} stroke={color} opacity={0.3}>
      <rect x="3" width="0.5" height="0.75" opacity={0.7} />
      <rect x="2" width="0.25" height="0.75" opacity={0.7} />
    </g>
  );
};

const renderShortTail = () => {
  return (
    <>
      <rect x="2" y="2" width="1" height="1" />
      <rect x="3" y="2" width="1" height="1" />
    </>
  );
};

const renderShortTailShade = () => {
  return (
    <>
      <rect x="3" y="3" width="1" height="1" />
    </>
  );
};

const renderLongTail = () => {
  return (
    <>
      <rect x="2" y="1" width="1" height="4" />
      <rect x="1" y="5" width="2" height="1" />
      <rect y="6" width="2" height="1" />
    </>
  );
};

const renderLongTailShade = () => {
  return (
    <>
      <rect x="2" width="1" height="1" />
      <rect x="3" y="1" width="1" height="5" />
      <rect x="2" y="6" width="1" height="1" />
      <rect y="7" width="2" height="1" />
    </>
  );
};
