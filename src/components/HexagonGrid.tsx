import "@react-three/fiber";
import React, { ReactNode } from "react";

export interface HexgagonGridProps {
  position?: [number, number, number];
  gridRadius: number;
  tileSpacing: number;
  tileWidth: number;
}

interface IGenerateHexagonGridParams {
  gridRadius: number;
  tileSpacing: number;
  tileWidth: number;
  position: [number, number, number];
}

const HexagonGrid: React.FC<HexgagonGridProps> = (props) => {
  const generateHexagonGrid = ({
    gridRadius,
    tileSpacing,
    tileWidth,
    position,
  }: IGenerateHexagonGridParams) => {
    let result: ReactNode[] = [];

    const tileSize = (tileWidth / Math.sqrt(3)) * 3;

    const startingTilePos: { x: number; z: number } = {
      x:
        (-gridRadius * (tileSize + tileSpacing)) / 2 +
        (tileSize + tileSpacing) / 2,
      z:
        -(gridRadius - 1) *
        (tileWidth * 1.5 + (tileSpacing * Math.sqrt(3)) / 2),
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
              startingTilePos.x +
                (tileSize + tileSpacing) * j -
                offset +
                position[0],
              position[1],
              startingTilePos.z +
                (((tileSize + tileSpacing) * Math.sqrt(3)) / 2) * i +
                position[2],
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
        gridRadius: props.gridRadius,
        tileSpacing: props.tileSpacing,
        tileWidth: props.tileWidth,
        position: props.position ?? [0, 0, 0],
      })}
    </>
  );
};

export default HexagonGrid;
