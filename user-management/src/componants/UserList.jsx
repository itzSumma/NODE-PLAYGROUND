import React, { use } from 'react';

const UserList = ({userPromise}) => {
    const users =use(userPromise);
    console.log(users);
    return (
        <div>
            <h2>
               Users inside suspense: {users.length}
            </h2>
        </div>
    );
};

export default UserList;