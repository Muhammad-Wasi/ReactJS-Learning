import React, { Component, Fragment } from 'react';

class Lifting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempF: null,
            tempC: null,
            temp: 0
        }
    }

    BoilingVerdict = (celsius) => {
        if (celsius > 0 && celsius <= 50) {
            return <p>The water would not boil.</p>;
        }
        else if (celsius > 50 && celsius <= 99) {
            return <p>The water is boiling.</p>;
        }
        else if (celsius === 100) {
            return <p>The water would boiled.</p>;
        }
    }

    Start = () => {
        let interval = setInterval(() => {
            if(this.state.temp === 100){
                clearInterval(interval);
                return true;
            }
            this.setState({ temp: this.state.temp + 1 })
        }, 100)
    }

    // TempHandle = (val, name) => {
    //     console.log('Value', val);
    //     if(val){
    //         if (name === 'tempC') {
    //             let temp = this.toFahrenheit(val).toFixed(2);
    //             this.setState({
    //                 tempC: val,
    //                 tempF: temp
    //             })
    //         }
    //         else {
    //             let temp = this.toCelsius(val).toFixed(2);
    //             this.setState({
    //                 tempC: temp,
    //                 tempF: val
    //             })
    //         }
    //     }
    //     else{
    //         this.setState({tempC: null, tempF: null})
    //     }
    // }

    // toCelsius = (fahrenheit) => {
    //     return (fahrenheit - 32) * 5 / 9;
    // }

    // toFahrenheit = (celsius) => {
    //     return (celsius * 9 / 5) + 32;
    // }

    render() {
        const { tempC, tempF } = this.state;
        return (
            <Fragment>
                {/* <input
                    type="number"
                    placeholder="Enter tempreture in C"
                    onChange={(e) => this.TempHandle(e.target.value, 'tempC')}
                    value={tempC ? tempC : ''}
                />
                <br />
                <br />
                <input
                    type="number"
                    placeholder="Enter tempreture in F"
                    onChange={(e) => this.TempHandle(e.target.value, 'tempF')}
                    value={tempF ? tempF : ''}
                /> */}
                {this.BoilingVerdict(this.state.temp)}
                {console.log("this.state.temp => ", this.state.temp)}
                <br />
                <button onClick={() => this.Start()}>Start</button>
            </Fragment>
        );
    }
}

export default Lifting;
