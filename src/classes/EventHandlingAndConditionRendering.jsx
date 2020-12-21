// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogin: false
//     }
//   }

//   handleClick = () => { // New method
//     const isLogin = this.state.isLogin;
//     this.setState({
//       isLogin: !isLogin
//     })
//   }

//   login = () => {
//     return (
//       <h1>Welcome back!</h1>
//     )
//   }

//   logout = () => {
//     return (
//       <h1>Please sign in.</h1>
//     )
//   }

//   render() {
//     return (
//       <div>
//         {
//           this.state.isLogin ?
//             this.login()
//             :
//             this.logout()
//         }
//         <button onClick={this.handleClick}>
//           {!this.state.isLogin ? "Login" : "Logout"}
//         </button>
//       </div>
//     );
//   }
// }

// export default App;



// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       names: ['Usman', "Salman", 'Ali']
//     }
//   }

//   handleClick = () => { // New method
//     let count = this.state.count;
//     const nameLength = this.state.names.length;
//     this.setState({
//       count: count + 1 == nameLength ? 0 : ++count
//     })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.names[this.state.count]}
//         <br />
//         <button onClick={this.handleClick}>
//           {this.state.count}
//         </button>
//       </div>
//     );
//   }
// }

// export default App;




// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const count = 1;
//     return (
//       <div>
//         { count ? <h1>Messages: {count}</h1> : null}
//       </div>
//     );
//   }
// }

// export default App;
