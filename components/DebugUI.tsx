import { Html } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useState } from "react";

export function DebugUI() {
  const { camera } = useThree();
  const [cameraState, setCameraState] = useState({
    position: camera.position.toArray(),
    rotation: camera.rotation.toArray(),
    zoom: camera.zoom,
  });

  useFrame(() => {
    setCameraState({
      position: camera.position.toArray(),
      rotation: camera.rotation.toArray(),
      zoom: camera.zoom,
    });
  });

  return (
    <Html>
      <div className="absolute p-4 bg-gray-800 text-white rounded-lg text-sm">
        <h3 className="font-bold">Camera Debug</h3>
        <p>
          Position: {cameraState.position.map((n) => n.toFixed(2)).join(", ")}
        </p>
        <p>
          Rotation:{" "}
          {cameraState.rotation.map((n) =>
            typeof n === "number" ? n.toFixed(2) : 0
          )}
        </p>
        <p>Zoom: {cameraState.zoom.toFixed(2)}</p>
      </div>
    </Html>
  );
}
