import React, { PureComponent } from "react";
import "./App.css";
import FormClass from "./FormClass";

class List extends PureComponent {
  state = {
    name: [],
  };

  addName = (text) => {
    const newName = this.state.name.concat({
      text: text,
    });
    this.setState({
      name: newName,
    });
  };
  render() {
    return (
      <div >
        <FormClass addName={this.addName} />
        <ul className="list">
          {this.state.name.map((names, index) => {
            return <li key={index}>{names.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;