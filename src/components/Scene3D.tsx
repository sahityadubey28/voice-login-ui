import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const FloatingCard = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[3, 4, 0.2]} />
      <meshStandardMaterial
        color="#FFF5EE"
        transparent
        opacity={0.6}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
};

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5]
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <FloatingCard />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};