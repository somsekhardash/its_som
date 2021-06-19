import * as React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { objMaker } from "./SiteHeader";

const SiteNav = ({ Schema }: any) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const data = objMaker(Schema);
  const {
    about_me,
    address1,
    address2,
    address3,
    email,
    facebook,
    full_name,
    github,
    linkedin,
    mobile,
    profilepic,
    twitter,
  } = data;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">{full_name}</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={profilepic || ""}
            alt=""
          />
        </span>
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse${showMenu ? " show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="experience"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="education"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="map"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Map
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SiteNav;
