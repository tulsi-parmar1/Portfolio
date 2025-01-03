import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import style from "../Modules/Navbar.module.css";
function Navbar() {
  const [navicon, setnavicon] = useState(false);
  const handleonclick = () => {
    setnavicon(!navicon);
  };
  return (
    <>
      <nav className={style.navbar}>
        <a href="" className={style.title}>
          Portfolio
        </a>
        <div className={style.menu}>
          {navicon ? (
            <IoClose className={style.icon2} onClick={handleonclick}></IoClose>
          ) : (
            <TfiMenu className={style.icon} onClick={handleonclick} />
          )}
          <ul
            className={`${style.menuitems} ${navicon && style.menuopen}`}
            onClick={() => setnavicon(false)}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Home
              </NavLink>
              <span className="Hover"></span>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
