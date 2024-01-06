/** @format */

import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "T-Shirt Customizer App",
    image: "/t-shirt.png",
    description:
      "A user-friendly web app enabling personalized t-shirt designs. Users can upload images, set logos or textures, and select colors using a picker. Powered by Three.js, Framer Motion, and OpenAI, it offers a seamless 3D rendering experience. ",
    onClick: () =>
      window.open("https://t-shirt-customizer-rjqf.onrender.com/", "_blank"),
  },
  {
    id: 2,
    title: "Staking DApp",
    image: "/staking_dapp.png",
    description:
      "A streamlined platform for users to stake Ether and earn interest. With predefined interest rate tiers based on lock periods, users can easily stake for varying durations. The DApp provides a simple interface for staking and viewing positions, and users can close positions effortlessly. It's a user-centric solution for those looking to participate in staking with a straightforward and rewarding experience.",
    onClick: () =>
      window.open("https://staking-dapp-taupe.vercel.app/", "_blank"),
  },
  {
    id: 3,
    title: "Metaverse Website",
    image: "/metaverse.png",
    description:
      "The Metaverse platform is a dynamic space for users to engage with immersive digital experiences. Offering a diverse range of interactive elements, it allows users to explore and create within a vibrant virtual environment. Focus was only on user-centric design",
    onClick: () =>
      window.open("https://metaverse-zhmz.onrender.com/", "_blank"),
  },
  // {
  //   id: 4,
  //   title: "Staking DApp",
  //   image:
  //     "https://images.pexels.com/photos/7512250/pexels-photo-7512250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque totam quod. Maxime quidem at ullam omnis odit fuga necessitatibus ",
  // },
];

const LogThemAll = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [-350, 350]);

  return (
    <motion.section className="projectTitles">
      <div className="container">
        <div className="imageContainer" ref={ref}>
          <img src={item.image} alt="lakdjs" />
        </div>
        <motion.div className="textContainer" style={{ y: scrollY }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button onClick={item.onClick}>See Demo</button>
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.hr style={{ scaleX }} className="progressBar" />
      </div>
      {projects.map((proj) => (
        <LogThemAll item={proj} key={proj.id} />
      ))}
    </div>
  );
};

export default Portfolio;
