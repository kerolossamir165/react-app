import React from "react";
import PropTypes from "prop-types";
import Tooltip from "./TollTip";
import { ThemeConsumer } from "../contexts/Theme";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa";

const ReposGrid = (props) => {
  return (
    <ThemeConsumer>
      {(value) => (
        <ul className="grid space-around">
          {props.repos.map((repo, index) => {
            let {
              name,
              owner,
              html_url,
              stargazers_count,
              forks,
              open_issues,
            } = repo;
            let { login, avatar_url } = owner;
            return (
              <li key={html_url} className={`repo bg-${value.theme}`}>
                <h4 className="header-lg center-text">
                  <span>#{index + 1}</span>
                </h4>
                <Tooltip text={login}>
                  <img
                    src={avatar_url}
                    alt={`avatar for ${login}`}
                    className="avatar"
                  />
                </Tooltip>
                <h2 className="center-text">
                  <a href={html_url} className="link">
                    {name}
                  </a>
                </h2>
                <ul className="card-list">
                  <li>
                    <Tooltip text="user">
                      <FaUser color="rgba(255 ,191,116)" size={22} />
                      <a href={`https://github.com/${login}`}>{login}</a>
                    </Tooltip>
                  </li>
                  <li>
                    <FaStar color="rgba(255 ,215,116)" size={22} />
                    {stargazers_count.toLocaleString()} stars
                  </li>
                  <li>
                    <FaCodeBranch color="rgba(255 ,215,116)" size={22} />
                    {forks.toLocaleString()} forks
                  </li>
                  <li>
                    <FaExclamationTriangle
                      color="rgba(255 ,191,116)"
                      size={22}
                    />
                    {open_issues.toLocaleString()} open issues
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </ThemeConsumer>
  );
};

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default ReposGrid;
