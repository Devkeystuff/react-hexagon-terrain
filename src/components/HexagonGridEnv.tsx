import React, { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import HexagonGrid from "./HexgaonGrid";

const HexagonGridEnv: React.FC = () => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ position: [45, 30, 0], zoom: 1 }}
    >
      <rectAreaLight
        width={10}
        height={10}
        color={"#fffbc3"}
        intensity={5}
        castShadow
        position={[10, 15, 0]}
      />
      {/* <ambientLight color={"#fff"} intensity={0.2} position={[0, 8, 0]} /> */}
      <Suspense fallback={null}>
        <HexagonGrid />
        {/* <Environment preset={"sunset"} /> */}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default HexagonGridEnv;
