import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Suspense } from "react";

const FloatingCard = () => {
  return (
    <motion.group
      initial={{ y: 0 }}
      animate={{
        y: [0, 0.2, 0],
        rotateY: [0, Math.PI / 8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <mesh>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial
          color="#FFF5EE"
          transparent
          opacity={0.6}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    </motion.group>
  );
};

export const Scene3D = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
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