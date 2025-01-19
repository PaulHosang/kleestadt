"use client";
import { Marker } from "@/components/Marker";
import { Model } from "@/components/Model";
import { Wrapper } from "@/components/Sidebar";
import { CameraControls, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
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
          shadows="basic"
          // eventSource={document.getElementById("root")!}
          eventPrefix="client"
        >
          <ambientLight intensity={Math.PI / 2} />
          <Suspense
            fallback={
              <Html>
                <h1>Loading..</h1>
              </Html>
            }
          >
            <Model />
            <Marker />
          </Suspense>

          <CameraControls />
        </Canvas>
      </Wrapper>
    </main>
  );
}
