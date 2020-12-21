import React from 'react';

class NameForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'grapefruit',
            default: 'mango',
            name: '',
            age: '',
            id: ''
        };

    }

    // handleChange = (event) => {
    //     this.setState({ value: event.target.value });
    //     console.log('Event', event.target.value)
    // }

    // handleSubmit = (event) => {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    // handleName = (event) => {
    //     this.setState({ name: event.target.value })
    // }
    // handleAge = (event) => {
    //     this.setState({ age: event.target.value })
    // }
    // handleId = (event) => {
    //     this.setState({ id: event.target.value })
    // }

    handeInput(val, prop) {
        // if(prop === "name"){
        //     this.setState({name: val})
        // }
        // if(prop === "age"){
        //     this.setState({age: val})
        // }
        // if(prop === "id"){
        //     this.setState({id: val})
        // }
        this.setState({ [prop]: val })
    }

    handleSubmit = (event) => {
        const { name, age, id } = this.state;
        console.log("State", { name, age, id })
        event.preventDefault();
    }

    render() {
        // const items = [
        //     { val: "", name: "Select fruit" },
        //     { val: "lime", name: "Lime" },
        //     { val: "mango", name: "Mango" },
        //     { val: "apple", name: "Apple" }
        // ];
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label> */}
                {/* <label>
                    Detail:
                <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                </label> */}
                {/* <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="">Select fruit</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label> */}
                {/* <label>
                    Pick your favorite flavor:
                    <select multiple value={[this.state.value, this.state.default]} onChange={this.handleChange}>
                        <option value="">Select fruit</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label> */}
                {/* <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        {
                            items.map(data => <option key={data.val} value={data.val}>{data.name}</option>)
                        }
                    </select>
                </label> */}
                {/* <input type="file" multiple onChange={(event) => console.log("Event", event.target.value)} /> */}
                <input placeholder={"Enter Name"} type="text"
                    value={this.state.name}
                    onChange={(event) => this.handeInput(event.target.value, "name")} />


                <input placeholder={"Enter Age"} type="number"
                    value={this.state.age}
                    onChange={(event) => this.handeInput(event.target.value, "age")} />


                <input placeholder={"Enter ID"} type="text"
                    value={this.state.id}
                    onChange={(event) => this.handeInput(event.target.value, "id")} />


                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;