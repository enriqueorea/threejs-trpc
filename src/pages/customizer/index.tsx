import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { downloadCanvasToImage, reader } from "~/utils/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "~/constants";
import { download } from "~/assets";
import { AIPicker, ColorPicker, FilePicker, CustomButton } from "~/components";
import { Tab } from "~/components/UI";

import { useUIStore } from "~/store";
import { fadeAnimation, slideAnimation } from "~/utils/motion";
import CanvasModel from "~/components/Canvas";

const CustomizerPage = () => {
	const { updateIntro } = useUIStore();
	return (
		<AnimatePresence>
			<motion.div
				key={"editor-tabs"}
				className="absolute left-0 top-0 z-10"
				{...slideAnimation("left")}
			>
				<div className="flex min-h-screen items-center">
					<div className="editortabs-container tabs">
						{EditorTabs.map((tab, index) => (
							<Tab
								key={`${tab.name}-${index}`}
								tab={tab}
								handleClick={() => {}}
							/>
						))}
					</div>
				</div>
			</motion.div>
			<motion.div
				key={"button"}
				className="absolute right-5 top-5 z-10"
				{...fadeAnimation}
			>
				<CustomButton
					type="filled"
					title="Go back"
					customClass="w-fit px-4 py-2.5 font-bold text-sm"
					onClick={() => updateIntro(true)}
					href="/"
				/>
			</motion.div>
			<motion.div
				key={"filtered-tabs "}
				className="filtertabs-container"
				{...slideAnimation("up")}
			>
				{FilterTabs.map((tab, index) => (
					<Tab key={`${tab.name}-${index}`} tab={tab} handleClick={() => {}} />
				))}
			</motion.div>
			<CanvasModel />
		</AnimatePresence>
	);
};

export default CustomizerPage;
