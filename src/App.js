import React, { Component } from 'react';
// import List from './classes/ListAndKeys';
import NameForm from './classes/Forms';

const ItemList = [
  { id: 1, title: 'Book', content: 'This is Book!' },
  { id: 2, title: 'Book', content: 'This is Book!' },
  { id: 3, title: 'Programming', content: 'This is Programming!' },
  { id: 4, title: 'Book', content: 'This is Book!' },
  { id: 5, title: 'Devops', content: 'This is Devops!' },
  { id: 6, title: 'Github', content: 'This is Github!' },
  { id: 7, title: 'Fiverr', content: 'This is Fiverr!' }
];
class App extends Component {
  render() {
    return (
      <div>
        {/* <List ItemList={ItemList} /> */}
        <NameForm />
      </div>
    );
  }
}

export default App;
