"use client"

import { AnimateComponent } from "@/lib/animate/AnimateComponent";
import { useState } from "react";
import { MicroMeow, type MicroMeowProps } from "@/lib/micromeow/MicroMeow";
import { ColorSelect } from "@/lib/color-select/ColorSelect";
import { TypewriterWaveText } from "@/lib/animated-text/TypewriterWaveText";

type Props =  {};

export default function MicroMeowPage({ }: Props) {
  const defaultValues: MicroMeowProps = {
    eyeColor: "lightblue",
    color: "gainsboro",
    mPattern: "gray",
    furTip: "gray",
    shortTail: true
  }
  const [values, setValues] = useState<MicroMeowProps>(defaultValues)
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  return (
    <>
        <h1 style={{ margin: "15px 0 0px 0", textAlign: "center" }}>
            <TypewriterWaveText firstColor="var(--light-brown)" secondColor="var(--light-green)">
                Make your own MicroMeow! 
            </TypewriterWaveText>
        </h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", paddingTop: "10%"}}>
          <form style={{ display: "flex", flexDirection:"column", gap: "0.75rem" }}>
            <ColorSelect
              label="Eye Color"
              value={values.eyeColor}
              onChange={(val) => setValues({ ...values, eyeColor: val })}
              isOpen={openSelect === "eye"}
              onToggle={() => setOpenSelect(openSelect === "eye" ? null : "eye")}
            />

            <ColorSelect
              label="Fur Color"
              value={values.color}
              onChange={(val) => setValues({ ...values, color: val })}
              isOpen={openSelect === "fur"}
              onToggle={() => setOpenSelect(openSelect === "fur" ? null : "fur")}
            />

            <ColorSelect
              label="M Pattern"
              value={values.mPattern ?? "gray"}
              onChange={(val) => setValues({ ...values, mPattern: val })}
              isOpen={openSelect === "mpattern"}
              onToggle={() => setOpenSelect(openSelect === "mpattern" ? null : "mpattern")}
            />

            <ColorSelect
              label="Fur Tip"
              value={values.furTip ?? "gray"}
              onChange={(val) => setValues({ ...values, furTip: val })}
              isOpen={openSelect === "furTip"}
              onToggle={() => setOpenSelect(openSelect === "furTip" ? null : "furTip")}
            />

            <label>Tail Length</label>
              <select
              value={values.shortTail ? "true" : "false"}
              onChange={(e) => setValues({...values, shortTail: Boolean(e.target.value)})}
              >
                <option value={""} key={"long"}>Long Tail</option>
                <option value={"true"} key={"short"}>Short Tail</option>
              </select>
          </form>
          <div style={{ 
            width: "25%", 
            padding: "20px"
            }}>
            <AnimateComponent interval={1000}>
              <MicroMeow
              {...values}
              />
              <MicroMeow
              {...values}
              eyesClosed
              pose="lowCrouch"
              />
            </AnimateComponent>
          </div>
      </div>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <a href="/">⬅️ Back to Home</a>
    </div>
    </>
  );
}