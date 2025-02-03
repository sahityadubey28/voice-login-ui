import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Suspense } from "react";
import * as THREE from "three";

const FloatingCard = () => {
  return (
    <motion.mesh
      initial={{ y: 0 }}
      animate={{ y: 0.2 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut"
      }}
    >
      <boxGeometry args={[3, 4, 0.2]} />
      <meshStandardMaterial
        color="#FFF5EE"
        transparent
        opacity={0.6}
        roughness={0.3}
        metalness={0.2}
      />
    </motion.mesh>
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