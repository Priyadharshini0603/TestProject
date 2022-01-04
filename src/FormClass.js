import React, { Component } from "react";
import "./App.css";

class FormClass extends Component {
  state = {
    nametext: "",
  };
  changeHandler = (e) => {
    this.setState({
      nametext: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addName(this.state.nametext);
    this.setState({
      nametext: " ",
    });
  };

  render() {
    return (
      <div className="cards">
        <h1>Names List</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={this.state.nametext}
            onChange={this.changeHandler}></input>
          &nbsp;&nbsp;
          <button>Enter</button>
        </form>
      </div>
    );
  }
}
export default FormClass;