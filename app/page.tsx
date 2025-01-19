"use client";
import { Marker } from "@/components/Marker";
import { Model } from "@/components/Model";
import { Sidebar } from "@/components/Sidebar";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Sidebar>
        <Canvas
          style={{
            height: "90vh",
            position: "absolute",
            top: 0,
            borderBottom: "1px solid rgb(31, 31, 31)",
          }}
          shadows="basic"
          eventSource={document.getElementById("root")!}
          eventPrefix="client"
        >
          <ambientLight intensity={Math.PI / 2} />
          <Model />
          <Marker />
          <CameraControls />
        </Canvas>
      </Sidebar>
      <h1>Test</h1>
    </main>
  );
}
