import { Center, Float, useGLTF } from "@react-three/drei";
import { useEffect, useState, type JSX } from "react";

const MODEL_PATH = "/models/kibo.glb";

function PlaceholderModel(): JSX.Element {
  return (
    <group position={[0, -0.15, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.45, 1.65, 1.1]} />
        <meshStandardMaterial color="#f8fbf7" roughness={0.7} />
      </mesh>

      <mesh position={[-0.28, 0.18, 0.57]}>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial color="#4f8061" roughness={0.5} />
      </mesh>
      <mesh position={[0.28, 0.18, 0.57]}>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial color="#4f8061" roughness={0.5} />
      </mesh>

      <mesh position={[0, 0.98, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.28, 16]} />
        <meshStandardMaterial color="#78a889" roughness={0.5} />
      </mesh>
      <mesh position={[0, 1.15, 0]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial color="#78a889" roughness={0.5} />
      </mesh>
    </group>
  );
}

function LoadedModel(): JSX.Element {
  const { scene } = useGLTF(MODEL_PATH);

  return (
    <Center>
      <primitive object={scene} scale={0.85} rotation={[0, 0.15, 0]} />
    </Center>
  );
}

export default function KiboModel(): JSX.Element {
  const [modelAvailable, setModelAvailable] = useState(false);

  useEffect(() => {
    let active = true;

    fetch(MODEL_PATH, { method: "HEAD" })
      .then((response) => {
        if (active) setModelAvailable(response.ok);
      })
      .catch(() => {
        if (active) setModelAvailable(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Float floatIntensity={0.18} rotationIntensity={0.04} speed={1.2}>
      {modelAvailable ? <LoadedModel /> : <PlaceholderModel />}
    </Float>
  );
}
