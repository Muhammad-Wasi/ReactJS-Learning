import React, { Component } from 'react';

export default class AuthTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            list: [],
            email: '',
            isEdit: false,
            index: null
        }
    }

    componentDidMount() {
        console.log("Props => ", this.props);
        this.setState({ email: this.props.email }, () => {
            this.getTodos()
        });
    }

    getTodos = () => {
        const { email } = this.state;
        let todos = localStorage.getItem('todo');
        if (todos) {
            let parseTodo = JSON.parse(todos);
            let isFind = parseTodo.find(item => item.email === email);
            if (isFind) {
                this.setState({ list: isFind.todo });
            }
        }
        else {
            console.log('No todo exist!');
        }
    }

    addTodo = () => {
        const { text, list, email } = this.state;
        if (text) {
            let todos = localStorage.getItem('todo');
            if (todos) {
                let parseTodo = JSON.parse(todos);
                let index = parseTodo.findIndex(item => item.email === email);
                if (index != -1) {
                    let isFind = parseTodo[index];
                    isFind = { email: isFind.email, todo: [...isFind.todo, text] };
                    parseTodo.splice(index, 1, isFind)
                    //  console.log("parseTodo => ", parseTodo);
                    localStorage.setItem('todo', JSON.stringify(parseTodo));
                }
                else {
                    localStorage.setItem('todo', JSON.stringify([...parseTodo, { email, todo: [text] }]))
                }
            }
            else {
                localStorage.setItem('todo', JSON.stringify([{ email, todo: [text] }]))
            }
            this.setState({ text: '', list: [...list, text] });
        }
    }

    _Edit(i) {
        const { list } = this.state;
        this.setState({ isEdit: true, index: i, text: list[i] })
    }

    updateTodo = () => {
        const { list, text, index, email } = this.state;
        list.splice(index, 1, text)
        this.setState({ list, isEdit: false, index: null, text: '' });
        let todos = localStorage.getItem('todo');
        let parseTodo = JSON.parse(todos);
        let todoIndex = parseTodo.findIndex(item => item.email === email);
        let isFind = parseTodo[todoIndex];
        isFind = { email: isFind.email, todo: list };
        parseTodo.splice(todoIndex, 1, isFind)
        localStorage.setItem('todo', JSON.stringify(parseTodo));
    }
    cancle = () => {
        this.setState({ isEdit: false, index: null, text: '' })
    }

    _Delete(i) {
        const { list, email } = this.state;
        list.splice(i, 1);
        this.setState({ list })
        let todos = localStorage.getItem('todo');
        let parseTodo = JSON.parse(todos);
        let index = parseTodo.findIndex(item => item.email === email);
        let isFind = parseTodo[index];
        isFind = { email: isFind.email, todo: list };
        parseTodo.splice(index, 1, isFind)
        localStorage.setItem('todo', JSON.stringify(parseTodo));
    }
    render() {
        const { text, list, isEdit, index } = this.state;
        return (
            <div>
                <input
                    type='text'
                    placeholder='Enter message!'
                    value={text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                {
                    !isEdit ?
                        <button
                            onClick={this.addTodo}
                        >
                            Add
                        </button>
                        :
                        <div>
                            <button
                                onClick={this.updateTodo}
                            >
                                Update
                            </button>
                            <button
                                onClick={this.cancle}
                            >
                                Cancel
                            </button>
                        </div>
                }
                <br />
                <ul>
                    {
                        list.map((item, i) =>
                            <li key={i}>
                                <span>{item}</span>
                                {' '}
                                <button onClick={() => this._Edit(i)}>Edit</button>
                                {' '}
                                <button onClick={() => this._Delete(i)}>Delete</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

