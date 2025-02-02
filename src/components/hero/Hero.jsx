/** @format */
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 20,
		},
	},
};

const Hero = () => {
	return (
		<div className='hero'>
			<div className='wrapper'>
				<motion.div
					className='textContainer'
					variants={textVariants}
					initial='initial'
					animate='animate'
				>
					<motion.h2 variants={textVariants}>Etienne MW</motion.h2>
					<motion.h1 variants={textVariants}>Software Engineer</motion.h1>
					<motion.p className='capabilities' variants={textVariants}>
						Specialized in building <span>Web2</span> and <span>Web3</span>{" "}
						applications. From traditional web apps to decentralized
						applications (DApps), I bring your digital vision to life with
						modern technologies and blockchain integration.
					</motion.p>
					<motion.div className='buttons'>
						<motion.button variants={textVariants}>
							<a href='#Portfolio'>See the latest works</a>
						</motion.button>
						<motion.button variants={textVariants}>
							<a href='#Contact'>Contact Me</a>
						</motion.button>
					</motion.div>
					<motion.img
						className='scrollImg'
						variants={textVariants}
						animate='scrollButton'
						src='/scroll.png'
						alt='scroll'
						width={50}
						height={50}
					/>
				</motion.div>
				<div className='decorationContainer'>
					<div className='circle'></div>
					<div className='circle'></div>
					<div className='circle'></div>
					<div className='centerDot'></div>
				</div>
			</div>

			<motion.div
				className='slidingContainer'
				variants={sliderVariants}
				initial='initial'
				animate='animate'
			>
				<h2>Web2 & Web3 Development</h2>
			</motion.div>
		</div>
	);
};

export default Hero;
