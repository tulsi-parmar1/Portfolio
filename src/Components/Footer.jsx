import React from "react";
import style from "../Modules/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={style.fmain}>
        <div className={style.Footer}>
          {/* <hr /> */}
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
          <div>
            <a href="/skills">Skills</a>
          </div>
          <div>
            {" "}
            <a href="/projects">Project</a>
          </div>
          <div>
            {" "}
            <a href="/contact">Contact me</a>
          </div>
        </div>
        <p>© 2025 Tulsi Parmar. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
