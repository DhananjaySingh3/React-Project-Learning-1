import React from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.onSearch = this.onSearch.bind(this);
  };

  // onSearch(event) {
  //   return this.setState({ searchField: event.target.value }, () => console.log(this.state));
  // }

  onSearch = (event) => {
    return this.setState({ searchField: event.target.value }, () => console.log(this.state));
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      return response.json();
    }).then((users) => {
      return this.setState({ monsters: users });
    })
  };

  render() {
    // Instead of directly modifying our state value we r storing it for our search use
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase().trim());
    });
    return (
      <div className="App">
      <h1 className="main-heading">Monster Rolodex</h1>
        <SearchBox monsters={filteredMonsters} placeholder="Search here..." handleSearchChange={this.onSearch}>
        </SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    );
  };

}

export default App;
