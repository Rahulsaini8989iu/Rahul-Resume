"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"
import { FaBarsStaggered } from "react-icons/fa6"
import { motion } from "framer-motion"
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div className="logo" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
       <Link to='/'> <h1>MyResume</h1></Link>
        <img src={logo} alt="logo" />
      </motion.div>

      <ul className="links">
        <motion.li onClick={() => scrollToSection("about")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          About me
        </motion.li>
        <motion.li onClick={() => scrollToSection("skills")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Skills
        </motion.li>
        <motion.li onClick={() => scrollToSection("portfolio")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Projects
        </motion.li>
        <motion.button
          onClick={() => scrollToSection("contact")}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 6px aqua" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          CONTACT ME
        </motion.button>
      </ul>

      <motion.div className="bar" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <FaBarsStaggered />
      </motion.div>
    </motion.div>
  )
}

export default Navbar
