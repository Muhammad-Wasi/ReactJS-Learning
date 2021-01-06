import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            list: [
                'wasi',
                'Hello',
                'World'
            ],
            index: null
        }
    }

    addTodo = () => {
        const { text, list } = this.state;
        if (text) {
            this.setState({
                list: [...list, text],
                text: ''
            })
        }
    }

    delete(index) {
        const { list } = this.state;
        list.splice(index, 1);
        this.setState({ list })
    }

    edit(index) {
        const { list } = this.state;
        this.setState({ text: list[index], index })
    }

    updateTodo = () => {
        const { list, text, index } = this.state;
        list.splice(index, 1, text);
        this.setState({ list, text: '', index: null })
    }

    cancel = () => {
        this.setState({ text: '', index: null })
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
                {
                    index == null ?
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
                                onClick={this.cancel}
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
                                <button onClick={() => this.edit(i)}>Edit</button>
                                <button onClick={() => this.delete(i)}>Delete</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

