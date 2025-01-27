import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export function Model() {
  const { nodes, materials } = useGLTF(
    "/kleestadt.glb"
  ) as unknown as GLTFResult;
  return (
    <group dispose={null}>
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
