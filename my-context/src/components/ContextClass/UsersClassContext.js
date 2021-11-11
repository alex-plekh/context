import React, { Component } from 'react';
import { ContextUsers } from './СontextUsers'

// export class UsersClass extends Component {
//     render() {
//         return (
//             <div className='wrapper'>
//                 <ContextUsersFunction.Consumer>
//                     {(infoAboutUser) => {
//                         return infoAboutUser.users.map((user => {
//                             return (
//                                 <div key={user.id} className={'cardUser'}>
//                                     <h3 className={'name'}>{user.name}</h3>
//                                     <p>
//                                         <span className={'boldTitle'}>username:</span>{user.username}
//                                     </p>
//                                     <p>
//                                         <span className={'boldTitle'}>email:</span> {user.email}
//                                     </p>
//                                     <p>
//                                         <span className={'boldTitle'}>address:</span> {user.address.street} - {user.address.suite} - {user.address.city}
//                                     </p>
//                                     <p>
//                                         <span className={'boldTitle'}>phone:</span> {user.phone}
//                                     </p>
//                                     <p>
//                                         <span className={'boldTitle'}>website:</span>{user.website}
//                                     </p>
//                                     <p>
//                                         <span className={'boldTitle'}>company name:</span>{user.company.name}
//                                     </p>
//                                 </div>
//                             )
//                         }))
//                     }}
//                 </ContextUsersFunction.Consumer>
//             </div>
//         );
//     }
// }
