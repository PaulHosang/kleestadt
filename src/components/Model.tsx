import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/kleestadt.glb") as GLTFResult;
  const [isHovering, setIsHovering] = useState(false);
  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={(event) => (event.stopPropagation(), setIsHovering(true))}
      onPointerOut={(event) => setIsHovering(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.003"]}
        position={[3.005, 0.647, -3.039]}
        rotation={[0, -0.74, 0]}
        scale={[0.219, 0.037, 0.101]}
      />
    </group>
  );
}

useGLTF.preload("/kleestadt.glb");
