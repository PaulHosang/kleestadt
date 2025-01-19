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
          camera={{ position: [4, 0, 8] }}
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
            <Marker />
          </Suspense>

          <CameraControls />
        </Canvas>
      </Wrapper>
    </main>
  );
}
