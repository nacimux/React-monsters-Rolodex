import React,{Component } from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import { SearchBox} from './components/searchbox/search-box.component.jsx'
import './App.css' ;
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users}))
  }
  handleChange(e) {
    this.setState({searchField : e});
  }

    
  render() { 

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(

      <div className='app'>
        <h1>Monsters Pckedex</h1>
      <SearchBox 
      placeholder='search monsters'
      valueChanged={this.handleChange}/>
      <CardList monsters = {filteredMonsters}/>
      </div>
   )
  }
}

export default App;
