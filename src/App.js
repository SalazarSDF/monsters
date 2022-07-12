import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Jopa", lastName: "OSLINAYA" },
      company: "Hoody",
    };
    this.index = 0;
    this.arr = ["jopa", "vasya", "misha"];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: {
                      firstName: this.arr[this.index],
                      lastName: "Depard'e",
                    },
                  };
                },
                () => {
                  if (this.index >= 2) {
                    this.index = 0;
                  } else {
                    this.index++;
                  }
                  console.log(this.state);
                  console.log(this.index);
                }
              );
              //console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
