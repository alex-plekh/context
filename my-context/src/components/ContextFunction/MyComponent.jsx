import React, {useState} from "react";
import {USERS_URL} from "../../constans";
import {ContextUsersFunction} from "./ContextUsersFunction";

export function MyComponents(props) {
    const [GetUsersBtn, setGetUsersBtn] = useState(false);
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch(USERS_URL)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setGetUsersBtn(true)
            });
    }

    return (
        <ContextUsersFunction.Provider value={{users, getUsers, GetUsersBtn}}>
            {props.children}
        </ContextUsersFunction.Provider>

    );
}
