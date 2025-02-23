import style from "../Modules/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Project from "../Components/Project.jsx";
import Skills from "./Skills.jsx";
import Pink from "../assets/pink.jpg";
import tulsiparmar from "../assets/TULSI PARMAR2.pdf";
const Home = () => {
  return (
    <>
      <div className={style.content}>
        <div className={style.intro}>
          <p className={style.name}>Hey! I'm Tulsi</p>
          <p className={style.introduction}>
            I am a passionate Full Stack developer with expertise in the MERN
            stack (MongoDB, Express.js, React, and Node.js) SQL,OOPs I am
            dedicated to crafting intuitive, user-friendly web applications that
            combine clean design with robust functionality. I enjoy solving
            complex problems and learning new skills. I am passionate about
            creating high-quality code that follows best practices and industry
            standards. I am always looking for new challenges and opportunities
            to grow as a developer.
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
            className={style.btndiv}
          >
            <button className={style.btnn}>
              <a href="mailto:parmartulsi222@gmail.com">Reach Out</a>
            </button>
            <button className={style.btnn}>
              <a href={tulsiparmar} target="_blank">
                Resume
              </a>
            </button>
          </div>
        </div>
        {/* <img src={img} alt="Tulsi Parmar" className={style.laptopimg} /> */}
        <img src={Pink} alt="Tulsi Parmar" className={style.laptopimg} />
      </div>
      <Project></Project>
      <Skills></Skills>
    </>
  );
};
export default Home;
