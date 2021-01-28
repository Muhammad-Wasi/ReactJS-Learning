import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>Hello Form</h1>
                <div style={{
                    width: '300px',
                    height: '300px',
                    // textAlign: 'center',
                    display: 'flex',
                    border: '1px solid green',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <input
                        style={{ height: 30, border: '2px solid black', borderRadius: 8 }}
                        type='email'
                        placeholder={'Enter your email'}
                    />
                    <br />
                    <input
                        style={{ height: 30, border: '2px solid black', borderRadius: 8 }}
                        type='password'
                        placeholder={'Enter your password'}
                    />
                    <br />
                    <button
                        style={{
                            height: 30,
                            border: '2px solid rgb(255,255,255)',
                            borderRadius: 8,
                            backgroundColor: 'blue',
                            color: '#ffffff',
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default Form;