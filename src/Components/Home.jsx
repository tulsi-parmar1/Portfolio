import style from "../Modules/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "typed.js";
import { useEffect } from "react";
import Project from "../Components/Project.jsx";
import Skills from "./Skills.jsx";
import Pink from "../assets/pink.jpg";
import tulsiparmar from "../assets/Tulsi_Parmar.pdf";
const Home = () => {
  //   useEffect(() => {
  //     const typed = new Typed(".type", {
  //       strings: ["ReactJS Developer", "Web Developer", "Full Stack Developer"],
  //       typeSpeed: 100,
  //       backSpeed: 100,
  //       loop: true,
  //     });
  //     return () => {
  //       typed.destroy();
  //     };
  //   }, []);

  return (
    <>
      <div className={style.content}>
        <div className={style.intro}>
          {/* <span className="type"></span> */}
          <p className={style.name}>Hey! I'm Tulsi</p>
          <p className={style.introduction}>
            I am a full stack developer with good knowledge of react and nodejs.
            I have experience in building scalable, secure and reliable web
            applications using various frameworks and technologies. I enjoy
            solving complex problems and learning new skills. I am passionate
            about creating high-quality code that follows best practices and
            industry standards. I am always looking for new challenges and
            opportunities to grow as a developer.
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
        <img src={Pink} alt="Tulsi Parmar" className={style.laptopimg} />
      </div>
      <Project></Project>
      <Skills></Skills>
    </>
  );
};
export default Home;
