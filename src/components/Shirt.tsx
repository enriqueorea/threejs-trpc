import React from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import { useUIStore } from "~/store";
import { type GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type ActionName = "actionNameOne" | "actionNameTwo";
type GLTFResult = GLTF & {
	nodes: {
		T_Shirt_male: THREE.Mesh;
	};
	materials: {
		[key: string]: THREE.MeshStandardMaterial;
	};
};

interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

interface MyGLTFResult extends GLTFResult {
	animations: GLTFAction[];
}

export const Shirt = () => {
	const { fullDecal, logoDecal, isLogoTexture, isFullTexture } = useUIStore();

	const { nodes, materials } = useGLTF("/shirt_baked.glb") as MyGLTFResult;
	console.log(useGLTF("/shirt_baked.glb"));
	const logoTexture = useTexture(logoDecal);
	const fullTexture = useTexture(fullDecal);

	return (
		<group>
			<mesh
				castShadow
				geometry={nodes.T_Shirt_male.geometry}
				material={materials.lambert1}
				material-roughness={1}
				dispose={null}
			>
				{isFullTexture && (
					<Decal
						position={[0, 0, 0]}
						rotation={[0, 0, 0]}
						scale={1}
						map={fullTexture}
					/>
				)}

				{isLogoTexture && (
					<Decal
						position={[0, 0.04, 0.15]}
						rotation={[0, 0, 0]}
						scale={0.15}
						map={logoTexture}
						map-anisotropy={16}
						depthTest={false}
						depthWrite={true}
					/>
				)}
			</mesh>
		</group>
	);
};
