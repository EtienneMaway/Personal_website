/** @format */

import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
	initial: {
		x: "-200px",
		y: "100px",
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	// const ref = useRef();
	// const isInView = useInView(ref, { margin: "-100px" });
	return (
		<motion.div
			className='services'
			variants={variants}
			initial='initial'
			whileInView='animate'
		>
			<motion.div className='textContainer' variants={variants}>
				<p>
					I focus on having your brand grow <br /> and more forward
				</p>
				<hr />
			</motion.div>
			<motion.div className='titleContainer' variants={variants}>
				<div className='title'>
					<img src='/people.webp' alt='' />
					<h2>
						{" "}
						<motion.b
							whileHover={{
								color: "orange",
							}}
						>
							Unique
						</motion.b>{" "}
						ideas
					</h2>
				</div>
				<div className='title'>
					<h2>
						{" "}
						<motion.b
							whileHover={{
								color: "orange",
							}}
						>
							For your
						</motion.b>{" "}
						Business
					</h2>
					<button>WHAT WE DO?</button>
				</div>
			</motion.div>

			<motion.div className='listContainer' variants={variants}>
				<motion.div className='box'>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam
						officia odio obcaecati dolor ullam ea minima dolorum quidem
						accusamus!
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					// whileHover={{
					// 	backgroundColor: "lightgray",
					// 	color: "#000",
					// }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam
						officia odio obcaecati dolor ullam ea minima dolorum quidem
						accusamus!
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					// whileHover={{
					// 	backgroundColor: "lightgray",
					// 	color: "#000",
					// }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam
						officia odio obcaecati dolor ullam ea minima dolorum quidem
						accusamus!
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					// whileHover={{
					// 	backgroundColor: "lightgray",
					// 	color: "#000",
					// }}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam
						officia odio obcaecati dolor ullam ea minima dolorum quidem
						accusamus!
					</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
