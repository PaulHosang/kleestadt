"use client";
import { CameraControls } from "@/components/CameraControls";
import { MarkerWithLine } from "@/components/Marker";
import { Model } from "@/components/Model";
import { Wrapper } from "@/components/Sidebar";
import { appState$ } from "@/lib/store";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
export default function Home() {
  const [position, setPosition] = useState({ x: 10, y: 10, z: 10 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });

  function onChange(idx: number = 0) {
    let position = { x: 10, y: 10, z: 10 };
    let target = { x: 0, y: 0, z: 0 };
    if (idx === 1) {
      position = { x: 0, y: 20, z: 20 };
      target = { x: 0, y: 10, z: 0 };
    } else if (idx === 2) {
      position = { x: 20, y: 0, z: 20 };
      target = { x: 0, y: 0, z: 10 };
    }
    setPosition(position);
    setTarget(target);
  }

  return (
    <main className="w-screen h-screen">
      <Wrapper>
        <Canvas
          style={{
            height: "90vh",
            position: "absolute",
            top: 0,
            borderBottom: "1px solid rgb(31, 31, 31)",
          }}
          camera={{
            position: [10, 10, 10],
          }}
          shadows="basic"
          eventSource={document.getElementById("root")!}
          eventPrefix="client"
        >
          <ambientLight intensity={Math.PI / 2} />
          <Suspense
            fallback={
              <Html>
                <div className="flex items-center justify-center">
                  <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                </div>
              </Html>
            }
          >
            <Model />
            {appState$.attractions.get().map((attraction, idx) => (
              <MarkerWithLine
                key={idx}
                position={attraction.position}
                onClick={() => {
                  appState$.selectedAttraction.set(attraction);
                  appState$.isSidebarOpen.set(true);
                }}
              />
            ))}
          </Suspense>
          <CameraControls position={position} target={target} />
        </Canvas>
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button onClick={() => onChange(0)}>Position 1</button>
          <button onClick={() => onChange(1)}>Position 2</button>
          <button onClick={() => onChange(2)}>Position 3</button>
        </div>
      </Wrapper>
    </main>
  );
}
