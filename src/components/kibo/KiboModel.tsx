import type { JSX } from 'react';

export default function KiboModel(): JSX.Element {
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
