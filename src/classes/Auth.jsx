import React from 'react';

class AuthForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        };

    }
    handeInput(val, prop) {
        this.setState({ [prop]: val })
    }

    handleSubmit = (event) => {
        this.userData();
        event.preventDefault();
    }

    userData = () => {
        const { name, email, password } = this.state;
        console.log("State", { name, email, password })
        let users = localStorage.getItem('users');
        if(users){
            let parseUsers = JSON.parse(users);
            let isFind = parseUsers.find(item => item.email === email);
            if(isFind){
                if(isFind.password === password){
                    alert("Login Successfullly!");
                    this.props.handleChange(email);
                }
                else{
                    alert("Invalid email/password!")
                }
            }
            else{
                localStorage.setItem('users', JSON.stringify([...parseUsers, {name, email, password}]));
            }
        }
        else{
            localStorage.setItem('users', JSON.stringify([{name, email, password}]));
        }
    }    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder={"Enter Username"} type="text"
                    value={this.state.name}
                    onChange={(event) => this.handeInput(event.target.value, "name")} />


                <input placeholder={"Enter Email"} type="email"
                    value={this.state.age}
                    onChange={(event) => this.handeInput(event.target.value, "email")} />


                <input placeholder={"Enter Password"} type="password"
                    value={this.state.id}
                    onChange={(event) => this.handeInput(event.target.value, "password")} />

                <input type="submit" value="Login" />
            </form>
        );
    }
}

export default AuthForm;