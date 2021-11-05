import React from "react";
import "@react-three/fiber";

const HexagonGrid: React.FC = () => {
  return (
    <mesh position={[0, 0, 0]} receiveShadow>
      <cylinderBufferGeometry args={[6, 6, 6, 6]} />
      <meshStandardMaterial attach="material" color={"#fff"} />
    </mesh>
  );
};

export default HexagonGrid;
