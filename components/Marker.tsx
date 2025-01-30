import React, { useEffect, useRef } from "react";
import { Line } from "@react-three/drei";
import { Vector3 } from "three";
import * as THREE from "three";

interface MarkerWithLineProps {
  position: [number, number, number];
  onClick?: () => void;
}

export const MarkerWithLine: React.FC<MarkerWithLineProps> = ({
  position,
  onClick,
}) => {
  const markerRef = useRef<THREE.Mesh>(null);

  const startPoint = new Vector3(...position);
  const endPoint = new Vector3(position[0], 0.1, position[2]);

  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    if (isHovered) {
      markerRef.current!.scale.set(1.2, 1.2, 1.2);
    } else {
      markerRef.current!.scale.set(1, 1, 1);
    }
  }, [isHovered]);

  return (
    <>
      <mesh
        ref={markerRef}
        position={position}
        receiveShadow
        onClick={onClick}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color={"#ff8fab"} />
      </mesh>

      <Line
        points={[startPoint, endPoint]}
        color="#ff8fab"
        lineWidth={1.5}
        dashed={false}
      />
    </>
  );
};
