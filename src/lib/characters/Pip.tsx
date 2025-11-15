import { MicroMeow } from "../micromeow/MicroMeow";
import { AnimateComponent } from "@/lib/animate/AnimateComponent";

export const PipStanding = () => (
    <MicroMeow
    eyeColor="#C8A031"
    color="gainsboro"
    mPattern="gray"
    furTip="gray"
    shortTail
    pose="sphinx"
    />
);

export const PipLying = () => (
    <MicroMeow
    eyeColor="#C8A031"
    color="gainsboro"
    mPattern="gray"
    furTip="gray"
    shortTail
    eyesClosed
    pose="lowCrouch"
    />
);

export const PipIdle = () => (
  <AnimateComponent interval={800}>
    <PipStanding />
    <PipLying />
  </AnimateComponent>
);