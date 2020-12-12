import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    console.log("test");
  }

  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle the theme</button>;
  }
}
