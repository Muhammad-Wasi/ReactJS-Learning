import React, { Component } from 'react';

export default class AuthTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            list: [],
            email: ''
        }
    }

    componentDidMount(){
        console.log("Props => ", this.props);
        this.setState({email: this.props.email}, () => {
            this.getTodos()
        });
    }

    getTodos = () => {
        const {email} = this.state;
        let todos = localStorage.getItem('todo');
        console.log("email", email)
        if(todos){
            let parseTodo = JSON.parse(todos);
            let isFind = parseTodo.find(item => item.email === email);
            if(isFind){
                this.setState({list: isFind.todo});
            }
        }
        else{
            console.log('No todo exist!');
        }
    }

    addTodo = () => {
        const { text, list, email } = this.state;
        if (text) {
            let todos = localStorage.getItem('todo');
            if(todos){
                let parseTodo = JSON.parse(todos);
                let index = parseTodo.findIndex(item => item.email === email);
                if(index != -1){
                    let isFind = parseTodo[index];
                     isFind = {email: isFind.email, todo: [...isFind.todo, text]};
                     parseTodo.splice(index, 1, isFind)
                    //  console.log("parseTodo => ", parseTodo);
                    localStorage.setItem('todo', JSON.stringify(parseTodo));
                }
                else{
                    localStorage.setItem('todo', JSON.stringify([...parseTodo, {email, todo: [text]}]))
                }
            }
            else{
                localStorage.setItem('todo', JSON.stringify([{email, todo: [text]}]))
            }
            this.setState({text: '', list: [...list, text]});
        }
    }

    render() {
        const { text, list, index } = this.state;
        return (
            <div>
                <input
                    type='text'
                    placeholder='Enter message!'
                    value={text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                        <button
                            onClick={this.addTodo}
                        >
                            Add
                        </button>
                <br />
                <ul>
                    {
                        list.map((item, i) =>
                            <li key={i}>
                                <span>{item}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

