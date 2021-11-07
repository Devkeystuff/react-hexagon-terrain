import React, { ReactNode } from "react";
import {} from "@react-three/drei";
import "@react-three/fiber";

interface IHexagonGridProps {
  maxHeight: number;
}

interface IGenerateHexagonGridParams {
  gridRadius: number;
  tileSpacing: number;
  tileWidth: number;
  y: number;
}

const HexagonGrid: React.FC = (props) => {
  const generateHexagonGrid = ({
    gridRadius,
    tileSpacing,
    tileWidth,
    y,
  }: IGenerateHexagonGridParams) => {
    let result: ReactNode[] = [];
    const tileSize = tileWidth * Math.sqrt(3);
    const startingTilePos: { x: number; z: number } = {
      x: (-gridRadius * (tileSize + tileSpacing)) / Math.sqrt(3),
      z: ((-gridRadius * (tileSize + tileSpacing)) / Math.sqrt(3)) * 1.2,
    };
    let currentRowTileCount = gridRadius - 1;
    for (let i = 0; i < gridRadius * 2 - 1; i++) {
      if (i < gridRadius) {
        currentRowTileCount++;
      } else if (i > gridRadius || i === gridRadius) {
        currentRowTileCount--;
      }
      const offset =
        ((currentRowTileCount - gridRadius) * (tileSize + tileSpacing)) / 2;
      for (let j = 0; j < currentRowTileCount; j++) {
        result.push(
          <mesh
            position={[
              startingTilePos.x + (tileSize + tileSpacing) * j - offset,
              y,
              startingTilePos.z +
                ((tileSize + tileSpacing) / Math.sqrt(3)) * 1.5 * i,
            ]}
            receiveShadow
          >
            <cylinderBufferGeometry args={[tileWidth, tileWidth, 6, 6]} />
            <meshStandardMaterial attach="material" color={"#fff"} />
          </mesh>
        );
      }
    }
    return result;
  };
  return (
    <>
      {generateHexagonGrid({
        gridRadius: 5,
        tileSpacing: 0,
        tileWidth: 6,
        y: 0,
      })}
    </>
  );
};

export default HexagonGrid;
