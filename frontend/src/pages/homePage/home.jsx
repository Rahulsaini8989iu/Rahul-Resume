"use client"

import "./home.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import hero from '../../assets/hero.png'
import rightside from '../../assets/rightside.png'
import github from '../../assets/github.png'
import linkin from '../../assets/linkin.png'
import Vector from '../../assets/Vector.png'
import Rectangle from '../../assets/Rectangle 83.png'
import Rectangle2 from '../../assets/Rectangle 82.png'
import logoItb from '../../assets/Logo ITB.png'
import separatorBlack from '../../assets/separatorBlack 1.png'
import image1 from '../../assets/136378-200 1.png'
import maintenance from '../../assets/maintenance--v3 1.png'
import img533288 from '../../assets/img_533288 1.png'
import Projects from "../../Project/Project"
import Contact from "../../Contact/Contact"
import Skills from "../../Skills/Skills"

function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true })

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
    <>
      {/* HERO SECTION */}
      <motion.header
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="hero-section"
      >
        <div className="left-div">
          <div className="left-childs">
            <motion.p className="p1" variants={staggerItem}>Hi, I am</motion.p>
            <motion.h1 variants={staggerItem}>Rahul Saini</motion.h1>
            <motion.p className="p2" variants={staggerItem}>Full Stack Web Developer</motion.p>
            <motion.div className="platforms" variants={staggerItem}>
              {[Vector, linkin, github].map((icon, idx) => (
                <motion.div key={idx} className="bg" whileHover={{ scale: 1.2, rotate: idx % 2 === 0 ? 5 : -5 }} whileTap={{ scale: 0.9 }}>
                  <img src={icon} alt="icon" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="right-div">
          <motion.img
            className="tringle"
            src={rightside}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          />
          <motion.img
            className="character"
            src={hero}
            alt=""
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* MOBILE VIEW */}
        <motion.img
          className="phone-character"
          src={hero}
          alt=""
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        />
        <div className="phone-view">
          <motion.img className="rectangle83" src={Rectangle} alt="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} />
          <motion.img className="rectangle82" src={Rectangle2} alt="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} />
          <motion.div className="intro" variants={staggerContainer} initial="hidden" animate="visible">
            <div className="part-1">
              <motion.p className="p1" variants={staggerItem}>Hi, I am</motion.p>
              <motion.h1 variants={staggerItem}>Rahul Saini</motion.h1>
              <motion.p className="p2" variants={staggerItem}>Full Stack Web Developer</motion.p>
            </div>
            <motion.div className="part2" variants={staggerItem}>
              {[Vector, linkin, github].map((icon, idx) => (
                <motion.img key={idx} src={icon} alt="icon" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* IT BERRIES SECTION */}
      <motion.div className="it-berries" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1 }}>
        <motion.img src={logoItb} alt="" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} />
        <motion.div className="detail" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
          <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>IT BERRIES</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
           Hardworking, highly motivated professional eager to lend combined knowledge and skills to enhance business performance. Operates well in both individual and team capacities, leveraging seasoned work ethic to quickly adapt to different processes and drive company objectives. Resourceful and results-driven with a passion for growth and efficiency to meet company needs and increase service value. Seeking to utilize excellent communication, interpersonal, and organizational skills to complete tasks. Reliable with a good work ethic and the ability to quickly adapt to new tasks and environments.
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            READ MORE
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ABOUT SECTION */}
      <motion.div id="about" className="about" ref={aboutRef} initial="hidden" animate={aboutInView ? "visible" : "hidden"} variants={staggerContainer}>
        <motion.button className="a-b-1" variants={staggerItem} whileHover={{ scale: 1.05, borderColor: "#00ffff" }} whileTap={{ scale: 0.95 }}>ABOUT ME</motion.button>
        <motion.p variants={staggerItem}>I’m a passionate Full Stack Developer who loves building creative and functional web applications.</motion.p>
        <motion.img className="devider" src={separatorBlack} variants={staggerItem} alt="" />

        {/* SKILLS PREVIEW */}
        <motion.div
          className="skills-compo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            className="skills"
            style={{ padding: "20px 35px" }}
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={image1} alt="design" />
            <h2>DESIGN</h2>
            <p>I can design clean, modern, and responsive layouts based on your ideas and goals.</p>
          </motion.div>

          <motion.div
            className="skills"
            style={{ padding: "23px 50px" }}
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={maintenance} alt="development" />
            <h2>DEVELOPMENT</h2>
            <p>From frontend to backend, I can build complete and functional web applications.</p>
          </motion.div>

          <motion.div
            className="skills"
            style={{ padding: "30px 65px" }}
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={img533288} alt="maintenance" />
            <h2>MAINTENANCE</h2>
            <p>I ensure your website stays fast, updated, and error-free with ongoing support.</p>
          </motion.div>
        </motion.div>
      </motion.div>

    
      <div id="skills">
        <Skills />
      </div>

      {/* PORTFOLIO SECTION */}
      <motion.div id="portfolio" className="portfolio" ref={portfolioRef} initial="hidden" animate={portfolioInView ? "visible" : "hidden"} variants={staggerContainer}>
        <motion.div className="myprojects" variants={staggerItem}>
          <motion.button whileHover={{ scale: 1.05, borderColor: "#00ffff" }} whileTap={{ scale: 0.95 }}>My Projects</motion.button>
        </motion.div>

        <motion.div className="all-Projects" variants={staggerItem}>
        <p>Projects in Progress</p>

        </motion.div>

        <Projects />

        <motion.div className="many" variants={staggerItem}>
          <p>And many more to come!</p>
        </motion.div>
      </motion.div>

      {/* CONTACT SECTION */}
      <motion.div id="contact" className="contact" ref={contactRef} initial="hidden" animate={contactInView ? "visible" : "hidden"} variants={staggerContainer}>
        <motion.button className="a-b-1" variants={staggerItem} whileHover={{ scale: 1.05, borderColor: "#00ffff" }} whileTap={{ scale: 0.95 }}>CONTACT</motion.button>
        <motion.p variants={staggerItem}>Feel free to reach out for collaborations or inquiries!</motion.p>
        <motion.img src={separatorBlack} alt="" variants={staggerItem} />
      </motion.div>

      {/* FORM SECTION */}
      <motion.div className="form-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <Contact />
      </motion.div>
    </>
  )
}

export default Home
