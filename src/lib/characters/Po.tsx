import { MicroMeow } from "../micromeow/MicroMeow";
import { AnimateComponent } from "@/lib/animate/AnimateComponent";

export const PoStanding = () => (
    <MicroMeow
    eyeColor="#caa926ff"
    color="black"
    shadeColor="#000000"
    furTip="#000000ff"
    pose="sphinx"
    />
);

export const PoLying = () => (
    <MicroMeow
    eyeColor="#C8A031"
    color="black"
    furTip="#000000ff"
    eyesClosed
    pose="lowCrouch"
    />
);

export const PoIdle = () => (
  <AnimateComponent interval={800}>
    <PoLying />
    <PoStanding />
  </AnimateComponent>
);