/** @format */

import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const SocialLink = ({ href, title, iconSrc }) => (
	<div className='social-link'>
		<a href={href} title={title} target='_blank' rel='noopener noreferrer'>
			<img src={iconSrc} alt={title} />
		</a>
		<span className='tooltip'>{title}</span>
	</div>
);

const Navbar = () => {
	return (
		<div className='navbar'>
			{/* Sidebar */}
			<Sidebar />

			{/* NavBar */}
			<div className='wrapper'>
				<motion.span
					initial={{ opacity: 0, scale: -2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				>
					EtMW.
				</motion.span>
				<div className='social'>
					<SocialLink
						href='https://github.com/EtienneMaway'
						title='GitHub'
						iconSrc='/github.png'
					/>
					<SocialLink
						href='https://www.linkedin.com/in/etienne-mw-a190291bb/'
						title='LinkedIn'
						iconSrc='/linkedIn.png'
					/>
					<SocialLink
						href='https://medium.com/@etiennemaway'
						title='Medium'
						iconSrc='/medium.png'
					/>
					<SocialLink
						href='https://www.upwork.com/freelancers/~01cbdb9d90d2a9f75b'
						title='Upwork'
						iconSrc='/upwork.png'
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
