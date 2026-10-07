import { Canvas } from '@react-three/fiber';
import { Suspense, type JSX } from 'react';
import KiboModel from './KiboModel';

export default function KiboCanvas(): JSX.Element {
	return (
		<Canvas
			camera={{ fov: 35, position: [0, 0.15, 5] }}
			dpr={[1, 2]}
			gl={{ antialias: true, alpha: true }}
			style={{ height: '100%', width: '100%' }}
		>
			<ambientLight intensity={1.8} />
			<directionalLight castShadow intensity={2.2} position={[3, 4, 5]} />
			<directionalLight intensity={0.8} position={[-3, 1, 2]} color="#b8d9c0" />
			<Suspense fallback={null}>
				<KiboModel />
			</Suspense>
		</Canvas>
	);
}
