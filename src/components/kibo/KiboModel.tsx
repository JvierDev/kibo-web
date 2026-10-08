import { Center, Float, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, type JSX } from "react";
import type * as THREE from "three";

const MODEL_PATH = "/models/kibo.glb";

export type KiboAnimation = "idle" | "wave" | "stretch";

interface LoadedModelProps {
  animation: KiboAnimation;
}

function LoadedModel({ animation }: LoadedModelProps): JSX.Element {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const actionName = Object.keys(actions).find(
      (name) => name.toLowerCase() === animation,
    );
    const action = actionName ? actions[actionName] : undefined;

    action?.reset().fadeIn(0.25).play();

    return () => {
      action?.fadeOut(0.25);
    };
  }, [actions, animation]);

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} scale={0.85} rotation={[0, 0.15, 0]} />
      </Center>
    </group>
  );
}

interface Props {
  animation?: KiboAnimation;
}

export default function KiboModel({ animation = "idle" }: Props): JSX.Element {
  return (
    <Float floatIntensity={0.18} rotationIntensity={0.04} speed={1.2}>
      <LoadedModel animation={animation} />
    </Float>
  );
}
