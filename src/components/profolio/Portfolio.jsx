/** @format */

import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
	{
		id: 1,
		title: "Staking DApp",
		image:
			"https://images.pexels.com/photos/4500652/pexels-photo-4500652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque totam quod. Maxime quidem at ullam omnis odit fuga necessitatibus ",
	},
	{
		id: 2,
		title: "Staking DApp",
		image:
			"https://images.pexels.com/photos/18500862/pexels-photo-18500862/free-photo-of-a-typewriter-with-a-paper-that-says-decentalized.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque totam quod. Maxime quidem at ullam omnis odit fuga necessitatibus ",
	},
	{
		id: 3,
		title: "Staking DApp",
		image:
			"https://images.pexels.com/photos/11279904/pexels-photo-11279904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque totam quod. Maxime quidem at ullam omnis odit fuga necessitatibus ",
	},
	{
		id: 4,
		title: "Staking DApp",
		image:
			"https://images.pexels.com/photos/7512250/pexels-photo-7512250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque totam quod. Maxime quidem at ullam omnis odit fuga necessitatibus ",
	},
];

const LogThemAll = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ["start start", "end start"],
	});

	const scrollY = useTransform(scrollYProgress, [0, 1], [-350, 350]);

	return (
		<motion.section className='projectTitles'>
			<div className='container'>
				<div className='imageContainer' ref={ref}>
					<img src={item.image} alt='lakdjs' />
				</div>
				<motion.div className='textContainer' style={{ y: scrollY }}>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
					<button>See Demo</button>
				</motion.div>
			</div>
		</motion.section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 5,
	});
	return (
		<div className='portfolio' ref={ref}>
			<div className='progress'>
				<h1>Featured Works</h1>
				<motion.hr style={{ scaleX }} className='progressBar' />
			</div>
			{projects.map((proj) => (
				<LogThemAll item={proj} key={proj.id} />
			))}
		</div>
	);
};

export default Portfolio;
