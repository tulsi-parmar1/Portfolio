import jsIcon from "../assets/icons8-javascript-240.png";
import style from "../Modules/Projects.module.css";
import { CiLink } from "react-icons/ci";
import php from "../assets/php.png";
const Project = () => {
  return (
    <>
      <div className={style.projectcontent}>
        <h1>Things I’ve made trying to put my dent in the universe.</h1>
        <p style={{ marginBottom: "28px" }}>
          I've worked on a variety of projects over the years and I'm proud of
          the progress I've made. Many of these projects are open-source and
          available for others to explore and contribute to. If you're
          interested in any of the projects I've worked on, please feel free to
          check out the code and suggest any improvements or enhancements you
          might have in mind. Collaborating with others is a great way to learn
          and grow, and I'm always open to new ideas and feedback.
        </p>
      </div>
      <div className={style.projectscontainer}>
        <a
          href="https://github.com/tulsi-parmar1/Job-Seeking-Application"
          target="_blank"
        >
          <div className={style.project}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "-10px",
              }}
            >
              <img src={jsIcon} alt="" />
              <h4>HireHub</h4>
            </div>
            <p>
              A dynamic job-seeking platform built with the MERN stack, offering
              features like job postings, applications, profile management, and
              personalized job recommendations to connect talent with
              opportunities seamlessly.
            </p>
            <span>
              {" "}
              <CiLink />
              view project
            </span>
          </div>
        </a>
        <a
          href="https://github.com/tulsi-parmar1/Expense-tracker-app "
          target="_blank"
        >
          <div className={style.project}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "-10px",
              }}
            >
              <img src={jsIcon} alt="" />
              <h4>Expense-Tracker</h4>
            </div>
            <p>
              A user-friendly MERN stack application designed to track, manage,
              and categorize expenses in real-time, helping users stay on top of
              their finances effortlessly.
            </p>
            <span>
              <CiLink /> view project
            </span>
          </div>
        </a>
        <a href="https://github.com/tulsi-parmar1/Quiz-App" target="_blank">
          <div className={style.project}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "-10px",
              }}
            >
              <img src={jsIcon} alt="" />
              <h4>Quiz app</h4>
            </div>
            <p>
              An interactive MERN stack application for creating, managing, and
              taking quizzes, featuring real-time scoring and customizable quiz
              options for an engaging learning experience.
            </p>
            <span>
              <CiLink /> view project
            </span>
          </div>
        </a>
        <a href="https://github.com/tulsi-parmar1/php-crud-app" target="_blank">
          <div className={style.project}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "-10px",
              }}
            >
              <img src={php} alt="" />
              <h4>PHP-CURD application</h4>
            </div>
            <p>
              A streamlined web app built with PHP, enabling users to Create,
              Read, Update, and Delete data efficiently, offering a robust
              solution for managing database records.
            </p>
            <span>
              <CiLink /> view project
            </span>
          </div>
        </a>
      </div>
    </>
  );
};
export default Project;
