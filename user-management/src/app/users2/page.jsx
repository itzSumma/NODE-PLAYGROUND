// const userPromise =fetch('').then(res => res.json());

import UserList from "@/componants/UserList";
import { Suspense } from "react";


const getUsers = async () => {
    const res = await fetch("http://localhost:4000/users");
    return res.json();
}

const UserPage2 = async () => {
    const userPromise = getUsers();
    console.log( "Inside suspense",userPromise);
    return (
        <div>
            <h2>Users2:with suspense</h2>
            <Suspense fallback={<div>Loading users...</div>}>
                <UserList userPromise={userPromise} />
            </Suspense>
        </div>
    );
};

               

export default UserPage2;