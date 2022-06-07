import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import React, { Suspense } from "react";
import HexagonGrid from "./HexagonGrid";

const HexagonGridEnv: React.FC = () => {
  const { gridRadius, tileSpacing, tileWidth } = useControls({
    gridRadius: { value: 4, min: 1, max: 10, step: 1 },
    tileSpacing: { value: 2, min: 0, max: 10, step: 1 },
    tileWidth: { value: 4, min: 1, max: 10, step: 1 },
  });

  return (
    <div>
      <Canvas
        style={{ height: "100vh" }}
        camera={{ position: [0, 80, 0], zoom: 1 }}
      >
        <Suspense fallback={null}>
          <HexagonGrid
            gridRadius={gridRadius}
            tileSpacing={tileSpacing}
            tileWidth={tileWidth}
          />
          <Environment preset={"forest"} />
        </Suspense>
        <OrbitControls enablePan={false} />
        <gridHelper
          args={[200, 40, "#101010", "#050505"]}
          position={[0, -3, 0]}
          rotation={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default HexagonGridEnv;
