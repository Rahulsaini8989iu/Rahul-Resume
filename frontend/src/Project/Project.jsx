import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  const projects = [
    {
      img: "/src/assets/car.jpg",
      link: "https://car-rental-gules-chi.vercel.app/",
      title: "Car Rental Web App",
      overview:
        "A full-stack car rental system with user & owner dashboards, secure booking flow, and MongoDB CRUD operations.",
    },
    {
      img: "/src/assets/go cart.png",
      link: "https://go-cart-beta-khaki.vercel.app/",
      title: "Go-Cart E-Commerce App",
      overview:
        "A modern e-commerce website built with React, Next.js, and Stripe integration — smooth cart and checkout experience.",
    },
    {
      img: "/src/assets/quick-show.png",
      link: "https://quick-show-app-jet.vercel.app/",
      title: "Quick Show Movie App",
      overview:
        "A dynamic movie search and booking app fetching live data from APIs. Built with React and responsive UI.",
    },
  ];

  return (
    <motion.div
      className="projects-page"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1 className="projects-title" variants={staggerItem}>
        My Featured Projects
      </motion.h1>

      <motion.div className="projects-grid" variants={staggerContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={staggerItem}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image-wrapper">
              <img
                src={project.img}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <h2>{project.title}</h2>
                <p>{project.overview}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View the Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
