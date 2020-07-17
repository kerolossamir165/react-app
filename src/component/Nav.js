import React from "react";
import PropTypes from "prop-types";
import { ThemeConsumer } from "../contexts/Theme";

let stylesNavBtn = {
  position: "absolute",
  top: "78px",
  right: "20px",
  padding: "6px 20px",
  fontSize: "17px",
  border: "none",
  outLine: "none",
  borderRadius: "5px",
};

const Nav = (props) => {
  let languages = ["All", "Java", "Ruby", "Php", "Python", "Css"];
  let classes = "btn-clear nav-link ";
  return (
    <ThemeConsumer>
      {(value) => (
        <nav>
          <ul className="flex-center ">
            {languages.map((language) => (
              <li key={language}>
                <button
                  className={
                    props.active === language
                      ? `${classes} active ${value.theme}`
                      : `${classes} ${value.theme}`
                  }
                  onClick={() => props.handelActive(language)}
                >
                  {language}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={value.ToggleTheme}
            style={
              value.theme === "light"
                ? { ...stylesNavBtn, background: "#1f1f1f", color: "#eee" }
                : stylesNavBtn
            }
          >
            {value.theme === "light" ? "dark" : "light"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
};

Nav.propTypes = {
  active: PropTypes.string.isRequired,
  handelActive: PropTypes.func.isRequired,
};

export default Nav;
