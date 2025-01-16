import { Html } from "@react-three/drei";
import { Ham } from "lucide-react";
import { useState } from "react";
import { appState$ } from "../lib/store";

export const Marker = () => {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <mesh
      position={[2, 2.5, -1.5]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <Html distanceFactor={10} zIndexRange={[100, 0]}>
        <div
          className="bg-black p-2 rounded-md opacity-90 hover:opacity-100 cursor-pointer transition-opacity "
          onClick={() => {
            appState$.isSidebarOpen.set(true);
          }}
        >
          <Ham />
        </div>
      </Html>
    </mesh>
  );
};
