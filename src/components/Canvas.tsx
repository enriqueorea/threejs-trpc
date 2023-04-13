import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { Shirt, Backdrop, CameraRig } from "./";

const CanvasModel = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<Environment preset="city" />

			<Shirt />
		</Canvas>
	);
};

export default CanvasModel;
