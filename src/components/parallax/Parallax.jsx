/** @format */

import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

	return (
		<motion.div
			className='parallax'
			ref={ref}
			style={{
				background:
					type === "services"
						? "linear-gradient(180deg, #111132, #0c0c1d)"
						: "linear-gradient(180deg, #111132, #505064)",
			}}
		>
			<motion.h1 style={{ y: yText }}>
				{type === "services" ? "What I Do?" : "What I Did?"}
			</motion.h1>
			<div className='mountains'></div>
			<motion.div
				className='planets'
				style={{
					y: yBg,
					backgroundImage: `url(${
						type === "services" ? "/planets.png" : "/sun.png"
					})`,
				}}
			></motion.div>
			<motion.div className='stars' style={{ x: yBg }}></motion.div>
		</motion.div>
	);
};

export default Parallax;
