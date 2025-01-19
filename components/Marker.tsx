import { appState$ } from "@/lib/store";
import { Html } from "@react-three/drei";
import { Ham } from "lucide-react";

export const Marker = () => {
  return (
    <mesh position={[2, 2.5, -1.5]}>
      <Html distanceFactor={10} zIndexRange={[100, 0]}>
        <div
          className={`bg-black border-[#2e2e2e] p-2 rounded-md opacity-90 border-[1px] hover:opacity-100 cursor-pointer transition-opacity`}
          onClick={() => {
            appState$.isSidebarOpen.set(true);
          }}
        >
          <Ham color="white" />
        </div>
      </Html>
    </mesh>
  );
};
