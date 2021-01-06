import React, { Component } from 'react';
// import List from './classes/ListAndKeys';
import NameForm from './classes/Forms';
import Todo from './classes/Todo';
import AuthForm from './classes/Auth';
import AuthTodo from './classes/AuthTodo';

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
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            email: 'wasi@gmail.com'
        }
    }
    handleChange = (email) => {
        this.setState({ isLogin: true, email: email });
    }
    render() {
        return ( <
            div > { /* <List ItemList={ItemList} /> */ } { /* <NameForm /> */ } { /* <Todo /> */ } {
                /* {
                          this.state.isLogin ?
                            <AuthTodo email={this.state.email} />
                          :
                            <AuthForm handleChange={this.handleChange} />
                        } */
            }

            <
            /div>
        );
    }
}

export default App;