import React, { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HexagonGrid from "./HexagonGrid";

const HexagonGridEnv: React.FC = () => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ position: [0, 80, 0], zoom: 1 }}
    >
      <Suspense fallback={null}>
        <HexagonGrid />
        <Environment preset={"forest"} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default HexagonGridEnv;
