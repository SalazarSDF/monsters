//import { Component } from "react"; class method import
import React, { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterdMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilterdMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Oslinaya Jopa</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class component
//class App extends Component {
//  constructor() {
//    super();
//    this.state = {
//      monsters: [],
//      searchField: "",
//    };
//  }

//  componentDidMount() {
//    fetch("https://jsonplaceholder.typicode.com/users")
//      .then((response) => response.json())
//      .then((users) =>
//        this.setState(() => {
//          return { monsters: users };
//        })
//      );
//  }

//  onSearchChange = (e) => {
//    const searchField = e.target.value.toLocaleLowerCase();
//    this.setState(() => {
//      return { searchField };
//    });
//  };

//  render() {
//    //console.log('Render from AppJS')
//    const { monsters, searchField } = this.state;
//    const { onSearchChange } = this;

//    const filteredMonsters = monsters.filter((monster) =>
//      monster.name.toLocaleLowerCase().includes(searchField)
//    );
//    return (
//      <div className="App">
//        <h1 className="app-title">Oslinaya Jopa</h1>
//        <SearchBox
//          onChangeHandler={onSearchChange}
//          placeholder="search monsters"
//          className="monsters-search-box"
//        />
//        <CardList monsters={filteredMonsters} />
//      </div>
//    );
//  }
//}

export default App;
