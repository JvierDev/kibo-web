import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Suspense, type JSX } from "react";
import KiboModel, { type KiboAnimation } from "./KiboModel";

interface Props {
  animation?: KiboAnimation;
}

function LoadingFallback(): JSX.Element {
  return (
    <Html center className="kibo-loading">
      Loading Kibo...
    </Html>
  );
}

export default function KiboCanvas({ animation = "idle" }: Props): JSX.Element {
  return (
    <Canvas
      camera={{ fov: 40, position: [0, 0, 6] }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ height: "100%", width: "100%" }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight castShadow intensity={2.2} position={[3, 4, 5]} />
      <directionalLight intensity={0.8} position={[-3, 1, 2]} color="#b8d9c0" />
      <Suspense fallback={<LoadingFallback />}>
        <KiboModel animation={animation} />
      </Suspense>
    </Canvas>
  );
}
