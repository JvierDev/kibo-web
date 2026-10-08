import type { JSX } from "react";
import KiboCanvas from "./KiboCanvas";
import type { KiboAnimation } from "./KiboModel";

interface Props {
  animation?: KiboAnimation;
}

export default function Kibo3D({ animation = "idle" }: Props): JSX.Element {
  return <KiboCanvas animation={animation} />;
}
