"use client"
import "./footer.css"
import { motion } from "framer-motion"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.a
        href="#"
        className="back-to-top"
        onClick={scrollToTop}
        variants={staggerItem}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑ BACK TO TOP
      </motion.a>

      <motion.div className="social-icons" variants={staggerContainer}>
        {[
          { src: "./src/assets/facebook.svg", alt: "Facebook" },
          { src: "./src/assets/linkin.svg", alt: "LinkedIn" },
          { src: "./src/assets/instagram.svg", alt: "Instagram" },
          { src: "./src/assets/email.svg", alt: "Email" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href="#"
            variants={staggerItem}
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={social.src || "/placeholder.svg"} alt={social.alt} />
          </motion.a>
        ))}
      </motion.div>

      <motion.p className="copyright" variants={staggerItem}>
        <strong>©2020 Tomasz Gajda</strong> All Rights Reserved.
      </motion.p>
    </motion.footer>
  )
}

export default Footer
