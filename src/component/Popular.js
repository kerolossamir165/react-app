import React from "react";
import Nav from "./Nav";
import { fatchPopularApis } from "../utils/api";
import ReposGrid from "./ReposGrid";
import Loading from "./Loading";

class Popular extends React.Component {
  state = {
    active: "All",
    repos: {},
    error: null,
  };

  componentDidMount() {
    this.handelActive(this.state.active);
  }

  handelActive = (lang) => {
    this.setState({ active: lang, error: null });

    fatchPopularApis(lang)
      .then((data) => {
        if (!this.state.repos[lang]) {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [lang]: data,
            },
          }));
        }
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  isLoading = () => {
    let { active, repos } = this.state;
    return !repos[active] && this.state.error === null;
  };

  render() {
    let { active, repos } = this.state;
    console.log(repos);
    return (
      <React.Fragment>
        <Nav handelActive={this.handelActive} active={active} />
        {this.isLoading() && <Loading content="Loading" />}
        {repos[active] && <ReposGrid repos={repos[active]} />}
        {this.state.error && <pre>{JSON.stringify(this.state.error)}</pre>}
      </React.Fragment>
    );
  }
}

export default Popular;
