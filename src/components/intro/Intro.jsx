import { useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/intro.css";

function Intro({ onFinish }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2300);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <motion.div
            className="nexus-intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.03,
                filter: "blur(8px)",
            }}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
        >
            <div className="intro-glow intro-glow-one"></div>
            <div className="intro-glow intro-glow-two"></div>

            <div className="intro-content">

                <motion.div
                    className="intro-mark"
                    initial={{
                        opacity: 0,
                        scale: 0.7,
                        rotate: -10,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <span>N</span>
                </motion.div>

                <motion.div
                    className="intro-line"
                    initial={{
                        width: 0,
                        opacity: 0,
                    }}
                    animate={{
                        width: "100%",
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.35,
                        ease: "easeOut",
                    }}
                />

                <motion.h1
                    className="intro-title"
                    initial={{
                        opacity: 0,
                        y: 18,
                        letterSpacing: "0.6em",
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        letterSpacing: "0.28em",
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    NEXUS
                </motion.h1>

                <motion.p
                    className="intro-subtitle"
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.8,
                    }}
                >
                    YOUR GROUP. YOUR SPACE.
                </motion.p>

                <motion.div
                    className="intro-loader"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.9,
                        duration: 0.4,
                    }}
                >
                    <motion.div
                        className="intro-loader-progress"
                        initial={{
                            width: "0%",
                        }}
                        animate={{
                            width: "100%",
                        }}
                        transition={{
                            duration: 1.35,
                            delay: 0.95,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                <motion.span
                    className="intro-version"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 0.55,
                    }}
                    transition={{
                        delay: 1,
                    }}
                >
                    NEXUS • 2026
                </motion.span>

            </div>
        </motion.div>
    );
}

export default Intro;