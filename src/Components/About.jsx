import style from "../Modules/About.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
function About() {
  return (
    <>
      <div className={style.aboutcontent}>
        <p style={{ color: "gray" }}>
          Hi, I’m Tulsi Parmar A proactive and detail-oriented Full-Stack
          Developer with expertise in the MERN stack (MongoDB, Express.js,
          React, Node.js) and sql. I thrive in solving real-world challenges
          through innovative and efficient solutions. With a strong focus on
          clean code, best practices, and collaborative teamwork, I ensure that
          my contributions drive both product success and user satisfaction.
          Collaborating with others is a great way to learn and grow, and I'm
          always open to new ideas and feedback. Let’s connect to discuss how I
          can add value to your team and help your organization achieve its
          goals!
        </p>
      </div>
      <div className={style.follow}>
        <a href="https://github.com/tulsi-parmar1" target="_blank">
          <FaGithub /> Follow on GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tulsi-parmar-76a865290/"
          target="_blank"
        >
          <FaLinkedin /> Follow on LinkedIn
        </a>
        <a href="mailto:parmartulsi222@gmail.com">
          {" "}
          <MdOutlineEmail />
          <span> </span>
          parmartulsi222@gmail.com
        </a>
      </div>
    </>
  );
}
export default About;
