/** @format */

import { useEffect, useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: "-50px",
    y: "100px",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  // const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });

  const firstProject = () => {
    window.open("https://github.com/EtienneMaway/Project-threejs-ai", "_blank");
  };

  const secondProject = () => {
    window.open(
      "https://github.com/EtienneMaway/flashLoan-smartContract",
      "_blank",
    );
  };
  const thirdProject = () => {
    window.open("https://github.com/EtienneMaway/staking_DAPP", "_blank");
  };
  const fourthProject = () => {
    window.open("https://github.com/EtienneMaway/metaverse_Website", "_blank");
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Uniting Web2 Ingenuity with Web3 Innovation <br /> NFTs, DeFi, and
          Seamless Full-Stack Experiences
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h2>
            {" "}
            <motion.b
              whileHover={{
                color: "orange",
              }}
            >
              Creative
            </motion.b>{" "}
            Notions
          </h2>
        </div>
        <div className="title">
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
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          // whileHover={{
          // 	backgroundColor: "lightgray",
          // 	color: "#000",
          // }}
        >
          <h2>Complete Web Solutions</h2>
          <p>
            Seeking a cutting-edge, adaptive web application that excels in
            every aspect? I craft compelling user interface with the latest
            frameworks and implement robust server-side logic for efficient data
            management. Your project will translate Figma&apos;s vision into a
            dynamic reality.
          </p>
          <button onClick={firstProject}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{
          // 	backgroundColor: "lightgray",
          // 	color: "#000",
          // }}
        >
          <h2>DeFi Platform Development:</h2>
          <p>
            Ready to democratize access to decentralized finance? I build DeFi
            platforms with user-friendly frontends and robust backend smart
            contract development. Whether it&apos;s lending, borrowing, or yield
            farming. Your users will effortlessly harness the transformative
            power of DeFi through a secure platform
          </p>
          <button onClick={thirdProject}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{
          // 	backgroundColor: "lightgray",
          // 	color: "#000",
          // }}
        >
          <h2>Elevate the Website Experience</h2>
          <p>
            {/* Elevate your NFT marketplace with a visually captivating frontend
            design that captivates users. Seamlessly integrate blockchain-backed
            security for ownership verification and tamper-proof transactions.
            Your NFTs deserve a marketplace marrying aesthetic appeal with
            robust web3 functionality. */}
            Enhance your online presence with captivating web design and
            superior user experiences. Elevate your website&apos;s aesthetics
            and functionality, ensuring it not only meets but exceeds your
            expectations. Let&apos;s build a digital masterpiece together –
            websites that don&apos;t just look good but offer a seamless and
            delightful user experience tailored to your needs.
          </p>
          <button onClick={fourthProject}>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Cross-Chain DApp Development</h2>
          <p>
            Have a DApp that spans diverse blockchains? I excel in integrating
            user interfaces seamlessly, ensuring your decentralized application
            runs smoothly across chains like Ethereum and Binance Smart Chain.
            Users will navigate a unified, intuitive interface for a cohesive
            experience
          </p>
          <button onClick={secondProject}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
