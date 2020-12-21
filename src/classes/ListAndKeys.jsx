// import React, { Component } from 'react';

// class List extends Component {

//   lists = () => {
//     return this.props.ItemList.map((item, i) => {
//       return <li key={item.id}>
//         <b>Title: </b><span>{item.title}</span>
//         <br />
//         <b>Content: </b><span>{item.content}</span>
//       </li>
//     }
//     );
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {
//             this.lists()
//           }
//         </ul>
//       </div>
//     );
//   }
// }

// export default List;



// import React, { Component } from 'react';

// class List extends Component {

//   lists = (id, title, content) => {
//     return <div key={id}>
//       <b>Title: </b><span>{title}</span>
//       <br />
//       <b>Content: </b><span>{content}</span>
//       <br />
//       <br />
//     </div>
//   }
//   render() {
//     const ItemList = this.props.ItemList;
//     return (
//       <div>
//         {
//           ItemList.map(item => this.lists(item.id, item.title, item.content))
//         }
//       </div>
//     );
//   }
// }

// export default List;




import React, { Component } from 'react';

class List extends Component {

  listsObj = (id, title, content) => {
    return <div key={id}>
      <b>Title: </b><span>{title}</span>
      <br />
      <b>Content: </b><span>{content}</span>
      <br />
      <br />
    </div>
  }
  render() {
    const ItemList = this.props.ItemList;
    return (
      <div>
        {
          ItemList.map(item =>
            item.title == "Book" ?
              this.listsObj(item.id, item.title, item.content)
              :
              null
          )
        }
      </div>
    );
  }
}

export default List;
