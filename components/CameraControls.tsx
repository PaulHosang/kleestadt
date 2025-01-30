//Camera.tsx
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

interface Point {
  x: number;
  y: number;
  z: number;
}

interface Props {
  position: Point;
  target: Point;
}
const CameraControls = ({ position, target }: Props) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  camera.up = new Vector3(0, 1, 0);
  function cameraAnimate(): void {
    if (ref.current) {
      gsap.timeline().to(camera.position, {
        duration: 2,
        repeat: 0,
        x: position.x,
        y: position.y,
        z: position.z,
        ease: "power3.inOut",
      });

      gsap.timeline().to(
        ref.current.target,
        {
          duration: 2,
          repeat: 0,
          x: target.x,
          y: target.y,
          z: target.z,
          ease: "power3.inOut",
        },
        "<"
      );
    }
  }

  useEffect(() => {
    cameraAnimate();
  }, [target, position]);
  return (
    <OrbitControls
      ref={ref}
      args={[camera, domElement]}
      panSpeed={1}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

export { CameraControls };
