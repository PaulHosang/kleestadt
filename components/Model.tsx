import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
  nodes: {
    Cube120: THREE.Mesh;
  };
  materials: {
    ["Procedural pearl white painted plastic"]: THREE.MeshPhysicalMaterial;
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
        geometry={nodes.Cube120.geometry}
        material={materials["Procedural pearl white painted plastic"]}
        position={[-3.266, 0.454, 1.978]}
        rotation={[3.129, 0.83, -3.131]}
      />
    </group>
  );
}

useGLTF.preload("/kleestadt.glb");
