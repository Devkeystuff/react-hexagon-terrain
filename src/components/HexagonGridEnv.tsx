import React, { Suspense, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HexagonGrid, { HexgagonGridProps } from "./HexagonGrid";
import { StyledInput } from "../styles/Input.styled";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  position: "absolute";
  padding: 50px;
  width: 400px;
  margin: 10px;
  background-color: rgb(24, 24, 24);
  border-radius: 5px;
  border: 1px solid rgb(50, 50, 50);

  h3 {
    color: white;
    font-size: 12px;
    text-transform: uppercase;
  }
`;

const HexagonGridEnv: React.FC = () => {
  const [hexagonGridProps, setHexagonGridProps] = useState<HexgagonGridProps>({
    gridRadius: 4,
    position: [0, 0, 0],
    tileSpacing: 2,
    tileWidth: 4,
  });

  const handleChange = (newValue: HexgagonGridProps) => {
    setHexagonGridProps((prevState) => ({ ...prevState, ...newValue }));
  };

  return (
    <div>
      <StyledInputContainer>
        <h3>Radius</h3>
        <StyledInput
          value={hexagonGridProps.gridRadius}
          type={"range"}
          min={1}
          step={1}
          max={10}
          onChange={(e) =>
            handleChange({
              ...hexagonGridProps,
              gridRadius: parseInt(e.target.value),
            })
          }
        />
      </StyledInputContainer>
      {/* <StyledInput
        value={hexagonGridProps.tileSpacing}
        type={"number"}
        min={0}
        max={10}
        onChange={(e) =>
          handleChange({
            ...hexagonGridProps,
            tileSpacing: parseInt(e.target.value),
          })
        }
      />
      <StyledInput
        value={hexagonGridProps.tileWidth}
        type={"number"}
        min={1}
        max={50}
        onChange={(e) =>
          handleChange({
            ...hexagonGridProps,
            tileWidth: parseInt(e.target.value),
          })
        }
      /> */}
      <Canvas
        style={{ height: "100vh" }}
        camera={{ position: [0, 80, 0], zoom: 1 }}
      >
        <Suspense fallback={null}>
          <HexagonGrid
            gridRadius={hexagonGridProps.gridRadius}
            position={hexagonGridProps.position}
            tileSpacing={hexagonGridProps.tileSpacing}
            tileWidth={hexagonGridProps.tileWidth}
          />
          <Environment preset={"forest"} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default HexagonGridEnv;
