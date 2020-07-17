import React from "react";

let styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  toolTip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0,0%,20%,.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    fontSize: "20px",
    textAlign: "center",
  },
};

// class ToolTip extends React.Component {

//   render() {
//     console.log(this.props);
//     return (
//       <div style={styles.container}>
//         {this.props.hovring && (
//           <div style={styles.toolTip}>{this.props.text}</div>
//         )}
//         {this.props.children}
//       </div>
//     );
//   }
// }

// const ToolTip = (props) => {
//   return (
//     <div style={styles.container}>
//       {props.hovring && <div style={styles.toolTip}>{props.text}</div>}
//       {props.children}
//     </div>
//   );
// };

/**** Using Higer order Component ************************** */
// let WithToolTip = (Component) => {
//   return class extends React.Component {
//     state = {
//       hovring: false,
//     };

//     mouseOver = () => {
//       this.setState({
//         hovring: true,
//       });
//     };
//     mouseLeave = () => {
//       this.setState({
//         hovring: false,
//       });
//     };

//     render() {
//       return (
//         <div onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
//           <Component {...this.props} hovring={this.state.hovring} />
//         </div>
//       );
//     }
//   };
// };

//
// export default WithToolTip(ToolTip);

class Hover extends React.Component {
  state = {
    hovring: false,
  };

  mouseOver = () => {
    this.setState({
      hovring: true,
    });
  };
  mouseLeave = () => {
    this.setState({
      hovring: false,
    });
  };

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
        {this.props.children(this.state.hovring)}
      </div>
    );
  }
}

const Tooltip = (props) => {
  return (
    <Hover>
      {(isHoverd) => (
        <div style={styles.container}>
          {isHoverd && <div style={styles.toolTip}>{props.text}</div>}
          {props.children}
        </div>
      )}
    </Hover>
  );
};

export default Tooltip;
