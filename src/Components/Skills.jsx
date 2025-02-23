import style from "../Modules/Skills.module.css";
import javascrit from "../assets/icons8-javascript-240.png";
import github from "../assets/icons8-github-logo-94.png";
import sql from "../assets/icons8-sql-64.png";
import react from "../assets/icons8-react-native-480.png";
import nodejs from "../assets/icons8-nodejs-480.png";
import express from "../assets/icons8-express-js-50.png";
import mongodb from "../assets/icons8-mongo-db-144.png";
import html from "../assets/icons8-html-logo-480.png";
import css from "../assets/icons8-css-logo-480.png";
import tailwind from "../assets/icons8-tailwind-css-144.png";
import redux from "../assets/icons8-redux-144.png";

function Skills() {
  return (
    <>
      <div className={style.skills}>
        <h1>My Tech Stack</h1>
        <p>
          Experienced in building full-stack web applications using modern
          technologies like React, Node.js, MongoDB, and Express.js. Skilled in
          creating dynamic, responsive, and user-friendly interfaces with a
          focus on performance and scalability.
        </p>

        <div className={style.logosMain}>
          <div className={style.logos}>
            <h1>Frontend</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={html} alt="html" />
              HTML
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={css} alt="css" />
              CSS
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={javascrit} alt="Javascript" />
              Javascript
            </div>{" "}
          </div>
          <div className={style.logos}>
            <h1>frontend library</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={react} alt="React.js" />
              React.js
            </div>{" "}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={tailwind} alt="Tailwind" />
              Tailwind
            </div>{" "}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={redux} alt="Redux" />
              Redux
            </div>
          </div>
          <div className={style.logos}>
            <h1>Backend</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <img src={nodejs} alt=" Node.js" />
              Node.js
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <img src={express} alt="Express.js" />
              Express.js
            </div>{" "}
          </div>

          <div className={style.logos}>
            <h1>Database</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={mongodb} alt="Mongodb" />
              MongoDb
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={sql} alt="SQL" />
              SQL
            </div>{" "}
          </div>
          <div className={style.logos}>
            <h1>Version Control</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <img src={github} alt="GitHub" />
              GitHub
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
