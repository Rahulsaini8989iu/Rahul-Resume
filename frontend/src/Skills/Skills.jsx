"use client"
import React from "react"
import "./Skills.css"
import { motion } from "framer-motion"

// 🧠 animation variants
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
}

const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Skills() {
    const usingNow = [
        { src: "/src/assets/HTML.svg", name: "HTML5" },
        { src: "/src/assets/CSS.svg", name: "CSS3" },
        { src: "/src/assets/JS.svg", name: "JavaScript" },
        { src: "/src/assets/REACT.svg", name: "React" },
        { src: "/src/assets/tailwind.webp", name: "Tailwind CSS" },
        { src: "/src/assets/figma.svg", name: "Figma" },
        { src: "/src/assets/bootstrap.svg", name: "Bootstrap" },
        { src: "/src/assets/git.svg", name: "Git" },
        { src: "/src/assets/github.png", name: "GitHub" },
    ]

    const learning = [

        { src: "/src/assets/nodejs.png", name: "Node.js" },
        { src: "/src/assets/mongodb.png", name: "MongoDB" },
        { src: "/src/assets/nextjs-.webp", name: "Next.js" },
        { src: "/src/assets/express-logo.png", name: "Express.js" },
        { src: "/src/assets/mySql.svg", name: "MySQL" },
        { src: "/src/assets/neon.png", name: "Neon DB" },
        { src: "/src/assets/post.png", name: "Postman" },
        { src: "/src/assets/SASS.svg", name: "SASS" },
        { src: "/src/assets/Prisma.png", name: "Prisma" },
    ]

    return (
        <>
           <motion.div className="skills-top" variants={staggerItem}>
                <motion.button
                    className="skills-btn"
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, borderColor: "#00ffff" }}
                    whileTap={{ scale: 0.95 }}
                >
                    SKILLS
                </motion.button>

                <motion.p className="skills-desc" variants={staggerItem}>
                    Technologies and tools I’m currently using and learning to build modern,
                    efficient and creative web applications.
                </motion.p>

                <motion.div className="skills-line" variants={staggerItem}></motion.div>
            </motion.div>
        <motion.div
            className="skills-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
        >
            {/* USING NOW */}
            <motion.div className="skills-category" variants={staggerItem}>
                <motion.h1 variants={staggerItem}>USING NOW</motion.h1>
                <div className="skills-grid">
                    {usingNow.map((skill, i) => (
                        <motion.div
                            className="skill-card"
                            key={i}
                            variants={staggerItem}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 10px 25px rgba(0,255,255,0.4)",
                            }}
                        >
                            <motion.img
                                src={skill.src}
                                alt={skill.name}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 8,
                                    filter: "drop-shadow(0 0 8px #00ffff)",
                                }}
                            />
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* LEARNING */}
            <motion.div className="skills-category" variants={staggerItem}>
                <motion.h1 variants={staggerItem}>LEARNING</motion.h1>
                <div className="skills-grid">
                    {learning.map((skill, i) => (
                        <motion.div
                            className="skill-card"
                            key={i}
                            variants={staggerItem}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 10px 25px rgba(0,255,255,0.4)",
                            }}
                        >
                            <motion.img
                                src={skill.src}
                                alt={skill.name}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 8,
                                    filter: "drop-shadow(0 0 8px #00ffff)",
                                }}
                            />
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
        </>
    )
}

export default Skills
