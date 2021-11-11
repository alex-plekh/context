// import React, {Component} from "react";
// import {USERS_URL} from "../../constans";
// import {ContextUsersFunction} from "./СontextUsers";
// import {UsersClass} from "./UsersClassContext";
//
// class MyComponents extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: [],
//             GetUsersBtn:true
//         };
//         this.getUsers = this.getUsers.bind(this)
//     }
//     getUsers() {
//         this.setState({
//             GetUsersBtn: false
//         })
//     };
//
//     componentDidMount() {
//         fetch(USERS_URL)
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({users: data});
//             })
//
//     }
//
//     render() {
//         let view;
//         const btn = this.state.GetUsersBtn;
//         if(btn) {
//             view = <button className={'mainBtn'} onClick={this.getUsers}>Get users</button>;
//         } else {
//             view = <div><UsersClass /></div>;
//         }
//         return (
//
//             <ContextUsersFunction.Provider value={{users: this.state.users}}>
//                 <div>
//                     {view}
//                 </div>
//             </ContextUsersFunction.Provider>
//
//         );
//     }
// }
//
// export default MyComponents;