import React from "react";

let styles = {
  fontSize: "40px",
  positoin: "absolute",
  left: "0",
  right: "0",
  textAlign: "center",
};

class Loading extends React.Component {
  state = {
    content: this.props.content,
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      if (this.state.content === this.props.content + "...") {
        this.setState({
          content: this.props.content,
        });
      } else {
        this.setState({
          content: this.state.content + ".",
        });
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div style={styles}>{this.state.content}</div>;
  }
}

Loading.defaultProps = {
  speed: 300,
};

export default Loading;
