import React, { Component } from "react";

function Title(props) {
  return (
    <h1>{props.titletext}</h1>
  )
}
// class Title extends Component {
//     render() {
//       return (
//         <h1>{this.props.titletext}</h1>
//       )
//     }
//   }

export default Title;