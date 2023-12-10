/** @format */
import "./hero.scss";

const Hero = () => {
	return (
		<div className='hero'>
			<div className='wrapper'>
				<div className='textContainer'>
					<h2>Etienne MW</h2>
					<h1>Software Engineer</h1>
					<div>
						<button>See the latest works</button>
						<button>Contact Me</button>
					</div>
					<img src='/scroll.png' alt='scroll' width={50} height={50} />
				</div>
			</div>

			<div className='slidingContainer'>
				<h2>FullStack Developer and Blockchain</h2>
			</div>

			<div className='imageContainer'>
				<img src='/hero2.png' alt='hero pic' />
			</div>
		</div>
	);
};

export default Hero;
